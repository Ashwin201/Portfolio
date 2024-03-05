import About from "@/models/About";
import { connectToDb } from "@/mongodb/database";
import { NextResponse } from "next/server";

//Get request for about
export async function GET(req) {
  try {
    await connectToDb();
    const data = await About.find();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to receive content." },
      { status: 400 }
    );
  }
}

//Post request for about
export async function POST(req) {
  try {
    const { title, shortDesc, role, description, resume } = await req.json();
    await connectToDb();
    const data = await About.create({
      title,
      shortDesc,
      role,
      description,
      resume,
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
