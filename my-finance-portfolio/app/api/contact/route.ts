import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: "wilfriedlawpro@gmail.com",
      replyTo: email,
      subject: `[Portfolio] ${subject || "New message"} — from ${name}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9; border-radius: 8px;">
          <h2 style="font-size: 18px; font-weight: 600; color: #1a1a1a; margin-bottom: 16px;">New message from your portfolio</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #888; font-size: 13px; width: 80px;">Name</td><td style="padding: 8px 0; color: #1a1a1a; font-size: 13px;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #888; font-size: 13px;">Email</td><td style="padding: 8px 0; color: #1a1a1a; font-size: 13px;"><a href="mailto:${email}" style="color: #0ea5e9;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #888; font-size: 13px;">Subject</td><td style="padding: 8px 0; color: #1a1a1a; font-size: 13px;">${subject || "—"}</td></tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 16px 0;" />
          <p style="font-size: 13px; color: #2a2a2a; line-height: 1.7; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
