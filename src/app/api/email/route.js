import Email from "@/models/Emails";
import { connectToDb } from "@/mongodb/database";
import { NextResponse } from "next/server";

//Get request for expEmail
export async function GET(req) {
  try {
    await connectToDb();
    const data = await Email.find();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to receive content." },
      { status: 400 }
    );
  }
}

//Post request for Email
export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();
    await connectToDb();
    const data = await Email.create({
      name,
      email,
      subject,
      message,
    });
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to create content" },
      { status: 400 }
    );
  }
}
