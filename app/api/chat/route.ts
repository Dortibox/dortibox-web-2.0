import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `You are the DortiBox Assistant — a helpful, friendly AI for Freetown Waste Transformers (FWT), a waste management company in Freetown, Sierra Leone.

Your role is to help users with questions about:
- DortiBox app — how to download, register, and use it
- Waste collection services — scheduling, frequencies, bin sizes
- Subscription plans — 1 month (200 SLE), 3 months (585 SLE, save 2.5%), 12 months (2280 SLE, save 5%)
- Payments — Orange Money and Afrimoney via USSD code *715*380#
- USSD access — users without smartphones can dial *715*380# to register and manage pickups
- Service areas — Block 6 CBD communities: Sorie Town, Albert Academy, Kroo Town, Sanders Brook, Central, Murray Town, Brookfields
- Partnership and investment enquiries — direct to /contact or info@fwtsl.net
- General company information

Tone: Friendly, clear, helpful. Use simple English — many users may have English as a second language. Keep responses concise and to the point.

If you don't know something specific, direct the user to contact the team at info@fwtsl.net or call +232 76 242 328.

Do NOT make up information. Do NOT discuss topics unrelated to DortiBox and waste management in Freetown.`;

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 },
      );
    }

    const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
      { role: "system", content: SYSTEM_PROMPT },
      ...history.slice(-10).map((m: { role: string; content: string }) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      })),
      { role: "user", content: message },
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
      max_tokens: 400,
      temperature: 0.7,
    });

    const reply =
      completion.choices[0]?.message?.content ||
      "Sorry, I could not generate a response.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat error:", err);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 },
    );
  }
}
