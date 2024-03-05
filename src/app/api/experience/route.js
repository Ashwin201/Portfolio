import Experience from "@/models/Experience";
import { connectToDb } from "@/mongodb/database";
import { NextResponse } from "next/server";

//Get request for experience
export async function GET(req) {
  try {
    await connectToDb();
    const data = await Experience.find();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to receive content." },
      { status: 400 }
    );
  }
}

//Post request for Experience
export async function POST(req) {
  try {
    const { role, company, duration, description } = await req.json();
    await connectToDb();
    const data = await Experience.create({
      role,
      company,
      duration,
      description,
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
