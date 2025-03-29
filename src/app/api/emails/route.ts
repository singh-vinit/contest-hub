import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { eq } from "drizzle-orm";

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
        { status: 409 }// Conflict=409
      );
    }

    //insert email into the database
    await db.insert(usersTable).values({ email });

    return NextResponse.json(
      { message: "Email added successfully" },
      { status: 200 }// OK=200
    );
  } catch (error) {
    console.error("Error adding email:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }// Internal Server Error=500
    );
  }
}
