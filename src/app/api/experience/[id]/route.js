import Experience from "@/models/Experience";
import { connectToDb } from "@/mongodb/database";
import { NextResponse } from "next/server";

//Get request for Experience
export async function GET(req, { params }) {
  try {
    const id = params.id;
    if (!id) {
      return NextResponse.json(
        { message: "No detail found based on this id" },
        { status: 400 }
      );
    }
    await connectToDb();
    const data = await Experience.findById({ _id: id });
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to update content" },
      { status: 400 }
    );
  }
}

//Put request for Experience
export async function PUT(req, { params }) {
  try {
    const id = params.id;
    if (!id) {
      return NextResponse.json(
        { message: "No detail found based on this id" },
        { status: 400 }
      );
    }
    const { role, company, duration, description } = await req.json();
    await connectToDb();
    const data = await Experience.findByIdAndUpdate(
      { _id: id },
      {
        role,
        company,
        duration,
        description,
      }
    );
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to update content" },
      { status: 400 }
    );
  }
}

//Put request for Experience
export async function DELETE(req, { params }) {
  try {
    const id = params.id;
    if (!id) {
      return NextResponse.json(
        { message: "No detail found based on this id" },
        { status: 400 }
      );
    }
    await connectToDb();
    await Experience.findByIdAndDelete({ _id: id });
    return NextResponse.json(
      { message: "Work deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to update content" },
      { status: 400 }
    );
  }
}
