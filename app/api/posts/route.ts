import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";
import Post from "@/models/Post";
// check if next auth session object exists
import { getAuthSession } from "@/lib/authOptions";
import Admin from "@/models/Admin";

cloudinary.config({
  cloud_name: "dzixkcq2a",
  api_key: "766334355269891",
  api_secret: "KVOcoCB2_YJLRYz75hGwEvIbqyo",
});
const uri =
  "mongodb+srv://mettilegal:dYgvHQuMYMM0hokO@cluster0.rjejrtd.mongodb.net/?retryWrites=true&w=majority";

export async function POST(request: Request) {
  const defaultImage =
    "https://res.cloudinary.com/dzixkcq2a/image/upload/v1712951816/post-image/ggpnjgahub1rrcays5ow.jpg";
  const session = await getAuthSession();
  const body = await request.json();
  if (!session?.user) {
    return NextResponse.json(
      { message: "User not authenticated! Fuck Off Cunt!" },
      { status: 401 }
    );
  } else {
    const { title, content, image, fileAttached } = body;
    const username = session?.user.name;

    try {
      await mongoose.connect(uri);
      const admin = await Admin.findOne({ username: username });
      const newPost = new Post({
        title: title,
        content: content,
        author: admin._id,
        image: image || defaultImage,
        fileAttached: fileAttached || "",
      });
      const res = await newPost.save();
      if (res) {
        return NextResponse.json(
          { message: "Post added successfully" },
          { status: 200 }
        );
      }
    } catch (e: any) {
      console.log(e);
      NextResponse.json(
        { message: `Internal Server Err ${e.message}` },
        { status: 500 }
      );
    }
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
}
export async function PUT(request: Request) {
  const session = await getAuthSession();
  const body = await request.json();
  if (!session?.user) {
    return NextResponse.json(
      { message: "User not authenticated! Fuck Off Cunt!" },
      { status: 401 }
    );
  } else {
    const { postId, title, content, image, fileAttached } = body;
    try {
      await mongoose.connect(uri);
      // Find the post by ID
      const existingPost = await Post.findById(postId);

      // Check if the post exists
      if (!existingPost) {
        return NextResponse.json(
          { message: "Post not found" },
          { status: 404 }
        );
      }

      const updateObj: any = {};
      if (typeof title !== "undefined" && title !== null && title !== "") {
        updateObj["title"] = title;
      }
      if (
        typeof content !== "undefined" &&
        content !== null &&
        content !== ""
      ) {
        updateObj["content"] = content;
      }
      if (typeof image !== "undefined" && image !== null && image !== "") {
        updateObj["image"] = image;
      }
      if (
        typeof fileAttached !== "undefined" &&
        fileAttached !== null &&
        fileAttached !== ""
      ) {
        updateObj["fileAttached"] = fileAttached;
      }

      await Post.findByIdAndUpdate(postId, updateObj);

      return NextResponse.json(
        { message: "Post updated successfully" },
        { status: 200 }
      );
    } catch (e: any) {
      console.log(e);
      return NextResponse.json(
        { message: `Internal Server Err ${e.message}` },
        { status: 500 }
      );
    }
  }
}

export async function GET(request: Request) {
  const params = new URLSearchParams(request.url.split("?")[1]);

  try {
    await mongoose.connect(uri);
    if (params && params.has("id")) {
      const id = params.get("id");
      const post = await Post.findById(id);
      return NextResponse.json({ post }, { status: 200 });
    }
    const posts = await Post.find({});
    return NextResponse.json({ posts }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
export async function DELETE(request: Request) {
  const params = new URLSearchParams(request.url.split("?")[1]);
  const session = await getAuthSession();
  if (!session?.user) {
    return NextResponse.json(
      { message: "User not authenticated" },
      { status: 401 }
    );
  }
  const id = params.get("id");

  try {
    await mongoose.connect(uri);
    const postExists = await Post.findById(id);
    if (!postExists) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }
    const post = await Post.findByIdAndDelete(id);
    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }
    // await cloudinary.uploader.destroy(post.image);
    return NextResponse.json(
      { message: "Post deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Error deleting post" },
      { status: 500 }
    );
  }
}
