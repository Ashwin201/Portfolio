import Project from "@/models/Projects";
import { connectToDb } from "@/mongodb/database";
import { NextResponse } from "next/server";

//Get request for Project
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
    const data = await Project.findById({ _id: id });
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to receive content." },
      { status: 400 }
    );
  }
}
//Put request for Project
export async function PUT(req, { params }) {
  try {
    const id = params.id;
    if (!id) {
      return NextResponse.json(
        { message: "No detail found based on this id" },
        { status: 400 }
      );
    }
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
    const data = await Project.findByIdAndUpdate(
      { _id: id },
      {
        projectNumber,
        title,
        description,
        category,
        image,
        technology,
        feature,
        github,
        live,
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
//Dwlwtwrequest for Project
export async function DELETE(req, { params }) {
  try {
    const id = params.id;

    await connectToDb();
    await Project.findByIdAndDelete({ _id: id });
    return NextResponse.json(
      { message: "Content deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to delete content" },
      { status: 400 }
    );
  }
}
