import Project from "@/models/Projects";
import { connectToDb } from "@/mongodb/database";
import { NextResponse } from "next/server";

//Get request for Project
export async function GET(req) {
  try {
    await connectToDb();
    const data = await Project.find();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to receive content." },
      { status: 400 }
    );
  }
}

//Post request for Project
export async function POST(req) {
  try {
    const {
      projectNumber,
      title,
      description,
      category,
      image,
      technology,
      feature,
      github,
      live,
    } = await req.json();
    await connectToDb();
    const data = await Project.create({
      projectNumber,
      title,
      description,
      category,
      image,
      technology,
      feature,
      github,
      live,
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
