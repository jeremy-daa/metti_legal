import Post from "@/models/Post";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
const uri =
  "mongodb+srv://mettilegal:dYgvHQuMYMM0hokO@cluster0.rjejrtd.mongodb.net/?retryWrites=true&w=majority";

export async function POST(request: Request) {
  const body = await request.json();
  const { postId, commenter, email, content } = body;
  try {
    await mongoose.connect(uri);
    // Find the post by ID
    const existingPost = await Post.findById(postId);

    // Check if the post exists
    if (!existingPost) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    // Create new comment object
    const newComment = {
      commenter: commenter || "Anonymous",
      email: email || "",
      content: content || "",
      createdAt: new Date(),
    };
    existingPost.comments.push(newComment);

    // Save the updated post
    await existingPost.save();

    return NextResponse.json(
      { message: "Comment added successfully" },
      { status: 200 }
    );
  } catch (e: any) {
    console.log(e);
    return NextResponse.json(
      { message: `Internal Server Error: ${e.message}` },
      { status: 500 }
    );
  }
}
