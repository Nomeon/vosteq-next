import { type NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    tls: {
        rejectUnauthorized: true,
    },
    auth: {
        user: process.env.SMTP_SERVER_USERNAME,
        pass: process.env.SMTP_SERVER_PASSWORD
    }
  })

  transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log(success);
    }
  })
}