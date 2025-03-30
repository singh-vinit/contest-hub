import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { eq } from "drizzle-orm";

import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    //check if the email already exists in the database
    const existingEmail = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));
    if (existingEmail.length > 0) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 409 } // Conflict=409
      );
    }

    //insert email into the database
    await db.insert(usersTable).values({ email });

    //send email to the user
    //configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    console.log(process.env.SMTP_USER, process.env.SMTP_PASS);
    //send email
    transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Welcome to our Contest Platform👋",
      text: "Thank you for subscribing ❤️! We will notify you about upcoming contests and opportunities.",
    });

    return NextResponse.json(
      { message: "Email added successfully" },
      { status: 200 } // OK=200
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 } // Internal Server Error=500
    );
  }
}
