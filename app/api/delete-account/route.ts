import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, reason } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone number are required." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      // TODO: swap to noreply@fwtsl.net once domain is verified on Resend
      from: "DortiBox <onboarding@resend.dev>",
      to: ["dortiboxpo@fwtsl.net"],
      subject: `Account Deletion Request — ${name} (${phone})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #ffffff;">

          <!-- Header -->
          <div style="background: #dc2626; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <h1 style="color: #ffffff; font-size: 20px; margin: 0; font-weight: 700;">
              Account Deletion Request
            </h1>
            <p style="color: #fecaca; font-size: 14px; margin: 6px 0 0;">
              Received via dortibox.com/delete-account
            </p>
          </div>

          <!-- Details -->
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #D8DBBD; color: #6B7280; font-size: 13px; width: 160px;">
                Full Name
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #D8DBBD; color: #1A1A2E; font-size: 14px; font-weight: 600;">
                ${name}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #D8DBBD; color: #6B7280; font-size: 13px;">
                Registered Phone
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #D8DBBD; color: #1A1A2E; font-size: 14px; font-weight: 600;">
                ${phone}
              </td>
            </tr>
            ${reason ? `
            <tr>
              <td style="padding: 12px 0; color: #6B7280; font-size: 13px; vertical-align: top; padding-top: 16px;">
                Reason
              </td>
              <td style="padding: 12px 0; color: #1A1A2E; font-size: 14px; padding-top: 16px; line-height: 1.6;">
                ${reason}
              </td>
            </tr>
            ` : ""}
          </table>

          <!-- Action required -->
          <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
            <p style="color: #dc2626; font-size: 13px; font-weight: 700; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 0.05em;">
              Action Required
            </p>
            <p style="color: #7f1d1d; font-size: 14px; line-height: 1.6; margin: 0;">
              Please locate this account in the DortiBox admin dashboard using the
              phone number above and process the deletion within 5 business days.
              Send a confirmation to the user once complete.
            </p>
          </div>

          <!-- Footer -->
          <div style="border-top: 1px solid #D8DBBD; padding-top: 16px; text-align: center;">
            <p style="color: #9CA3AF; font-size: 12px; margin: 0;">
              DortiBox — Freetown Waste Transformers SL Limited
            </p>
          </div>

        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to submit request. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Delete account error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}