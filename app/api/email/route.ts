import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { emailTemplate } from "@/helpers/emailTemplate";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESENT_API_KEY);
  const { email, message } = await req.json();

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Mulțumim de email!",
    html: emailTemplate(email, message),
  });

  return NextResponse.json({ message: "success!", status: 200 });
}
