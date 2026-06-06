import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, organisation, type, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      // TODO: swap to a verified fwtsl.net address once domain is verified on Resend
      from: "DortiBox Contact <onboarding@resend.dev>",
      to: ["dortiboxpo@fwtsl.net"],
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #ffffff;">
          
          <!-- Header -->
          <div style="background: #2D5239; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <h1 style="color: #ffffff; font-size: 20px; margin: 0; font-weight: 700;">
              New Contact Form Submission
            </h1>
            <p style="color: #D8DBBD; font-size: 14px; margin: 6px 0 0;">
              Received via dortibox.com/contact
            </p>
          </div>

          <!-- Details -->
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #D8DBBD; color: #6B7280; font-size: 13px; width: 140px;">
                Full Name
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #D8DBBD; color: #1A1A2E; font-size: 14px; font-weight: 600;">
                ${name}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #D8DBBD; color: #6B7280; font-size: 13px;">
                Email
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #D8DBBD; color: #1A1A2E; font-size: 14px;">
                <a href="mailto:${email}" style="color: #3A6B4A;">${email}</a>
              </td>
            </tr>
            ${organisation ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #D8DBBD; color: #6B7280; font-size: 13px;">
                Organisation
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #D8DBBD; color: #1A1A2E; font-size: 14px;">
                ${organisation}
              </td>
            </tr>
            ` : ""}
            ${type ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #D8DBBD; color: #6B7280; font-size: 13px;">
                Enquiry Type
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #D8DBBD; color: #1A1A2E; font-size: 14px;">
                <span style="background: #EBF2EE; color: #3A6B4A; padding: 3px 10px; border-radius: 20px; font-size: 12px; font-weight: 600;">
                  ${type}
                </span>
              </td>
            </tr>
            ` : ""}
          </table>

          <!-- Message -->
          <div style="background: #FAF6E3; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
            <p style="color: #6B7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 10px;">
              Message
            </p>
            <p style="color: #1A1A2E; font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap;">
              ${message}
            </p>
          </div>

          <!-- Reply CTA -->
          <div style="text-align: center; padding: 16px 0;">
            
          <a    href="mailto:${email}"
              style="display: inline-block; background: #E8A020; color: #ffffff; font-size: 14px; font-weight: 700; padding: 12px 28px; border-radius: 100px; text-decoration: none;"
            >
              Reply to ${name}
            </a>
          </div>

          <!-- Footer -->
          <div style="border-top: 1px solid #D8DBBD; padding-top: 16px; margin-top: 16px; text-align: center;">
            <p style="color: #9CA3AF; font-size: 12px; margin: 0;">
              DortiBox — Freetown Waste Transformers SL Limited
            </p>
            <p style="color: #9CA3AF; font-size: 12px; margin: 4px 0 0;">
              BSI Offices, 55A Wilkinson Road, Freetown
            </p>
          </div>

        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}