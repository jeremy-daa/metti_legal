import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";
import { compareHash, hashPassword } from "@/utils/functions";
const bcrypt = require("bcryptjs");
import Admin from "@/models/Admin";
var count = 0;

cloudinary.config({
  cloud_name: "dzixkcq2a",
  api_key: "766334355269891",
  api_secret: "KVOcoCB2_YJLRYz75hGwEvIbqyo",
});

const uri =
  "mongodb+srv://mettilegal:dYgvHQuMYMM0hokO@cluster0.rjejrtd.mongodb.net/?retryWrites=true&w=majority";

export async function POST(request: Request) {
  // await mongoose.connect(uri);

  // const data = new Admin({
  //   username: "admin",
  //   password: hashPassword("admin"),
  //   email: "admin@admin.com",
  //   fullName: "Admin",
  // });
  // await data.save();

  try {
    mongoose.connect(uri);
    const body = await request.json();
    const { username, password } = body;
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return NextResponse.json(
        { message: "User doesn't exist" },
        { status: 404 }
      );
    }
    const passMatch = await compareHash(password, admin.password);
    if (passMatch) {
      return NextResponse.json({ admin }, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }
  } catch (error: any) {
    console.error("There's been and error:", error.messsage);
  }

  return NextResponse.json({ message: "POST: Hello World" });
}
export async function GET(request: Request) {
  return NextResponse.json({ error: "Forbidden" }, { status: 403 });
}
