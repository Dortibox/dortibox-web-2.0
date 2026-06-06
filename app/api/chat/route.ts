import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { buildKnowledgeContext } from "@/lib/dortibox-knowledge";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const BLOCKED_PATTERNS = [
  /competitor|klin salone|other waste/i,
  /politics|election|government party/i,
  /personal (data|information) of other/i,
  /hack|exploit|injection|sql|script/i,
  /sex|porn|adult content/i,
  /weapon|bomb|violence/i,
];

const OFF_TOPIC_PATTERNS = [
  /recipe|cook|food/i,
  /football|soccer|sport/i,
  /movie|music|song|artist/i,
  /weather/i,
  /cryptocurrency|bitcoin|nft/i,
  /homework|essay|write.*for me/i,
];

function checkGuardrails(message: string): {
  blocked: boolean;
  offTopic: boolean;
} {
  for (const pattern of BLOCKED_PATTERNS) {
    if (pattern.test(message)) {
      return { blocked: true, offTopic: false };
    }
  }
  for (const pattern of OFF_TOPIC_PATTERNS) {
    if (pattern.test(message)) {
      return { blocked: false, offTopic: true };
    }
  }
  return { blocked: false, offTopic: false };
}

function buildSystemPrompt(knowledgeContext: string): string {
  return `You are the DortiBox Assistant — a helpful, friendly AI assistant for Freetown Waste Transformers (FWT), a waste management company operating in Freetown, Sierra Leone.

## YOUR ROLE
Help users with questions about DortiBox waste collection services. Be concise, clear, and friendly. Use simple English — many users may have English as a second language.

## WHAT YOU CAN HELP WITH
- How to download and use the DortiBox app
- Registering via USSD (*715*380#) for users without smartphones
- Subscription plans, pricing, and bin sizes
- Payment via Orange Money and Afrimoney
- Service coverage areas and communities
- Scheduling and managing pickups
- Partnership and investment enquiries
- General company information

## WHAT YOU MUST NOT DO
- Discuss topics unrelated to DortiBox or waste management in Freetown
- Make up information not in the knowledge base below
- Share personal data of other users
- Engage with harmful, political, or inappropriate content
- Recommend or compare with competitor services

## LIVE KNOWLEDGE BASE
The following is real-time data from the DortiBox platform. Use this to answer questions accurately:

${knowledgeContext}

## RESPONSE GUIDELINES
- Keep responses under 150 words unless the question genuinely requires more detail
- Use bullet points for lists
- Always end with a helpful next step when relevant
- If you cannot answer something, direct the user to info@fwtsl.net or +232 76 242 328
- Never guess — only use information from the knowledge base above`;
}

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 },
      );
    }

    const sanitizedMessage = message.trim().slice(0, 500);

    const guardrail = checkGuardrails(sanitizedMessage);

    if (guardrail.blocked) {
      return NextResponse.json({
        reply:
          "I'm not able to help with that. I'm only here to assist with DortiBox waste collection services. Is there anything about our service I can help you with?",
      });
    }

    if (guardrail.offTopic) {
      return NextResponse.json({
        reply:
          "That's a bit outside my area! I'm specialised in DortiBox waste management services. I can help you with subscriptions, pickups, payments, and more. What would you like to know?",
      });
    }

    const knowledgeContext = await buildKnowledgeContext();
    const systemPrompt = buildSystemPrompt(knowledgeContext);

    // Build message history for Claude
    // Claude requires alternating user/assistant messages
    const rawHistory = history.slice(-8) as { role: string; content: string }[];

    // Ensure history starts with a user message
    const filteredHistory = rawHistory.filter((_, i) =>
      i === 0 ? rawHistory[0].role === "user" : true,
    );

    const messages: Anthropic.Messages.MessageParam[] = [
      ...filteredHistory.map((m) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      })),
      { role: "user" as const, content: sanitizedMessage },
    ];

    const response = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 400,
      system: systemPrompt,
      messages,
    });

    const reply =
      response.content[0]?.type === "text"
        ? response.content[0].text
        : "Sorry, I could not generate a response. Please try again or contact us at info@fwtsl.net";

    const sanitizedReply = reply
      .replace(/```[\s\S]*?```/g, "")
      .replace(/`/g, "")
      .trim();

    return NextResponse.json({ reply: sanitizedReply });
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json(
      {
        reply:
          "Sorry, something went wrong on my end. Please try again or contact us directly at info@fwtsl.net or +232 76 242 328.",
      },
      { status: 500 },
    );
  }
}
