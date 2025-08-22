import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { emailTemplate } from "@/helpers/emailTemplate";

type ResponseData = {
  message: string;
};

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   if (req.method === "POST") {
//     console.log(
//       "This is the response received",
//       req.body.email,
//       req.body.message
//     );

//     return res.status(200).json({ message: "This worked" });
//   }
// }

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESENT_API_KEY);
  const { email, message } = await req.json();

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Mulțumim de email!",
    html: emailTemplate(email, message),
  });

  return NextResponse.json({ message: "success!", status: 200 });
}
