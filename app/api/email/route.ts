import { type NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    const { naam, topic, onderwerp, email, telefoonnummer, bericht } = await request.json();

    // Testing
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_SERVER_HOST,
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_SERVER_USERNAME,
            pass: process.env.SMTP_SERVER_PASSWORD
        }
    })

    const mailOptions = {
        from: process.env.SMTP_SERVER_USERNAME,
        to: process.env.MAIL_RECEIVER,
        subject: `Nieuw bericht van ${naam}`,
        text: `
        Er is een nieuw bericht ontvangen via de website.\n
        Naam: ${naam}
        Topic: ${topic}
        Onderwerp: ${onderwerp}
        Email: ${email}
        Telefoonnummer: ${telefoonnummer}
        Bericht: ${bericht}
        `
    }

    const sendMailPromise = () => 
        new Promise<string>((resolve, reject) => {
            transporter.sendMail(mailOptions, function (err) {
                if (!err) {
                    resolve('Email sent successfully');
                } else {
                    reject(err.message)
                }
            })
        })

    try {
        await sendMailPromise();
        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}