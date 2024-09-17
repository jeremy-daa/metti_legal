"use client";
import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";
import Hero4 from "./Hero4";
import BlogListSkeleton from "./BlogListSkeleton";
import { PiPlusCircleThin } from "react-icons/pi";
import { set } from "mongoose";

export const fetchPosts = async () => {
  const res = await fetch("/api/posts");
  const posts = await res.json();
  console.log(posts);
  return posts;
};

const cloudName = "dzixkcq2a";

const AdminDashboard = () => {
  // const cld = new Cloudinary({ cloud: { cloudName, apiKey, apiSecret } });
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const [addModal, setAddModal] = useState(false);

  const [deleteModal, setDeleteModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [file, setFile] = useState<HTMLInputElement>();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<HTMLInputElement>();
  const [id, setId] = useState("");
  const awaitPosts = async () => {
    const req = await fetchPosts().then((res) => {
      setLoading(false);
      setPosts(res.posts);
    });
    return req;
  };
  const modalOpener = (id: string) => {
    setModal(true);
    setId(id);
  };
  const deleteModalOpener = (id: string) => {
    setDeleteModal(true);
    setId(id);
  };
  const modalCloser = () => {
    setModal(false);
    setDeleteModal(false);
    setAddModal(false);
    setTitle("");
    setContent("");
    setImage(undefined);
    setFile(undefined);
    setError("");
    setId("");
  };
  useEffect(() => {
    awaitPosts();
  }, []);
  const addHandler = async () => {
    var imageUrl = "";
    var fileUrl = "";
    if (!title || !content) {
      return setError("Title and content are required");
    }
    setError("");
    const imageData = new FormData();
    const fileData = new FormData();
    if (image?.files) {
      imageData.append("file", image?.files[0]);
      imageData.append("upload_preset", "post-image");
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
        {
          method: "POST",
          body: imageData,
        }
      )
        .then((res) => res.json())
        .catch(() => setError("Error uploading image"));
      if (res) {
        imageUrl = res.secure_url;
        console.log("Image uploaded successfully \n", imageUrl);
      }
    }
    if (file?.files) {
      fileData.append("file", file?.files[0]);
      fileData.append("upload_preset", "post-file");
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
        {
          method: "POST",
          body: fileData,
        }
      )
        .then((res) => res.json())
        .catch(() => setError("Error uploading image"));
      if (res) {
        fileUrl = res.secure_url;
        console.log("File uploaded successfully \n", fileUrl);
      } else {
        console.log("File upload failed");
      }
    }
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title || null,
        content: content || null,
        image: imageUrl || null,
        fileAttached: fileUrl || null,
      }),
    });
    if (res.status === 200) {
      alert("Post added successfully");
      console.log("Post added successfully");
      awaitPosts();
      modalCloser();
    } else {
      alert("An error occurred while adding post");
    }
  };
  const deleteHandler = async () => {
    const res = await fetch(`/api/posts?id=${id}`, {
      method: "DELETE",
    });
    if (res.status === 200) {
      alert("Post deleted successfully");
      console.log("Post deleted successfully");
      awaitPosts();
      modalCloser();
    } else if (res.status === 404) {
      alert("Post not found");
    } else {
      alert("An error occurred while deleting post");
    }
  };
  const updateHandler = async () => {
    var imageUrl = "";
    var fileUrl = "";
    const imageData = new FormData();
    const fileData = new FormData();
    if (image?.files) {
      imageData.append("file", image?.files[0]);
      imageData.append("upload_preset", "post-image");
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
        {
          method: "POST",
          body: imageData,
        }
      )
        .then((res) => res.json())
        .catch(() => setError("Error uploading image"));
      if (res) {
        imageUrl = res.secure_url;
        console.log("Image uploaded successfully \n", imageUrl);
      }
    }
    if (file?.files) {
      fileData.append("file", file?.files[0]);
      fileData.append("upload_preset", "post-file");
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
        {
          method: "POST",
          body: fileData,
        }
      )
        .then((res) => res.json())
        .catch(() => setError("Error uploading image"));
      if (res) {
        fileUrl = res.secure_url;
        console.log("File uploaded successfully \n", fileUrl);
      } else {
        console.log("File upload failed");
      }
    }
    const res = await fetch(`/api/posts?id=${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId: id,
        title: title || null,
        content: content || null,
        image: imageUrl || null,
        fileAttached: fileUrl || null,
      }),
    });
    if (res.status === 200) {
      alert("Post updated successfully");
      console.log("Post updated successfully");
      awaitPosts();
      modalCloser();
    } else if (res.status === 404) {
      alert("Post not found");
    } else {
      alert("An error occurred while updating post");
    }
  };
  return (
    <div className="relative">
      {modal && (
        <>
          <div className="fixed top-0 left-0 min-w-full min-h-full glass z-30">
            <div className="w-[500px] bg-white p-7 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[var(--theme-color)] border-[2px] rounded-md">
              {error && <p className="text-red-400 text-xl">{error}</p>}
              <h1 className="text-2xl font-semibold text-[var(--theme-color)] mb-5">
                Edit Post
              </h1>
              <form>
                <input
                  type="text"
                  placeholder="Title"
                  className="w-full border-[1px] border-[#333] rounded-md p-2 mb-3"
                  onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                  placeholder="Content"
                  className="w-full h-[100px] border-[1px] border-[#333] rounded-md p-2 mb-3"
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <label className="text-[var(--theme-color)]">
                  Update Image
                </label>
                <input
                  type="file"
                  accept=".png,.jpg,.jpeg"
                  placeholder="Image"
                  className="w-full border-[1px] border-[#333] rounded-md p-2 mt-2 mb-3"
                  onChange={(e) => setImage(e.target)}
                />
                <label className="text-[var(--theme-color)]">
                  Update File Attached
                </label>
                <input
                  type="file"
                  placeholder="Image"
                  className="w-full border-[1px] border-[#333] rounded-md p-2 mt-2 mb-3"
                  onChange={(e) => setFile(e.target)}
                />
              </form>
              <div className="flex gap-10 justify-start items-center">
                <button
                  className="bg-[var(--theme-color)] text-white rounded-md p-2 mt-2"
                  onClick={updateHandler}
                >
                  Update
                </button>
                <button
                  className="bg-red-400 text-white rounded-md p-2 mt-2"
                  onClick={modalCloser}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {deleteModal && (
        <>
          <div className="fixed top-0 left-0 min-w-full min-h-full glass z-30">
            <div className="w-[500px] bg-white p-7 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[var(--theme-color)] border-[2px] rounded-md text-center">
              <h1 className="text-2xl font-semibold text-[var(--theme-color)] mb-5">
                Delete Post
              </h1>
              <p>Are you sure you want to delete this post?</p>
              <div className="flex gap-10 justify-center items-center mt-5">
                <button
                  className="bg-[var(--theme-color)] text-white rounded-md p-2 px-10 mt-2"
                  onClick={deleteHandler}
                >
                  Yes
                </button>
                <button
                  className="bg-red-400 text-white rounded-md p-2 px-10 mt-2"
                  onClick={modalCloser}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {addModal && (
        <>
          <div className="fixed top-0 left-0 min-w-full min-h-full glass z-30">
            <div className="w-[500px] bg-white p-7 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[var(--theme-color)] border-[2px] rounded-md">
              {error && <p className="text-red-400 text-xl">{error}</p>}
              <h1 className="text-2xl font-semibold text-[var(--theme-color)] mb-5">
                Add Post
              </h1>
              <form>
                <input
                  type="text"
                  placeholder="Title"
                  className="w-full border-[1px] border-[#333] rounded-md p-2 mb-3"
                  onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                  placeholder="Content"
                  className="w-full h-[100px] border-[1px] border-[#333] rounded-md p-2 mb-3"
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <label className="text-[var(--theme-color)]">Add Image</label>
                <input
                  type="file"
                  accept=".png,.jpg,.jpeg"
                  placeholder="Image"
                  className="w-full border-[1px] border-[#333] rounded-md p-2 mt-2 mb-3"
                  onChange={(e) => setImage(e.target)}
                />
                <label className="text-[var(--theme-color)]">
                  Add File to be Attached
                </label>
                <input
                  type="file"
                  placeholder="Image"
                  className="w-full border-[1px] border-[#333] rounded-md p-2 mt-2 mb-3"
                  onChange={(e) => setFile(e.target)}
                />
              </form>
              <div className="flex gap-10 justify-start items-center">
                <button
                  className="bg-[var(--theme-color)] text-white rounded-md px-6 p-2 mt-2"
                  onClick={addHandler}
                >
                  Add
                </button>
                <button
                  className="bg-red-400 text-white rounded-md px-6 p-2 mt-2"
                  onClick={modalCloser}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      <Hero4 />
      {/* <SignOut /> */}

      {/* <h1>Admin Dashboard</h1> */}
      <div>
        <div className="w-[75%] mx-auto mt-10">
          <h1 className="text-[50px] text-[var(--theme-color)] font-semibold text-center mb-2">
            Write a new post
          </h1>
          <div
            className="max-w-[700px] mx-auto h-[150px] border-[3px] cursor-pointer hover:scale-[1.02] duration-300 boxShadow rounded-xl border-[var(--theme-color)] mb-5 flex justify-center items-center"
            onClick={() => setAddModal(true)}
          >
            <PiPlusCircleThin className="text-[var(--theme-color)] text-8xl" />
          </div>
          <h1 className="text-[50px] text-[var(--theme-color)] font-semibold text-center mb-8">
            Recent posts
          </h1>
          {loading && (
            <>
              {Array.from({ length: 4 }).map((_, i) => (
                <BlogListSkeleton key={i} />
              ))}
            </>
          )}
          {posts &&
            posts.map((post: any) => (
              <BlogList
                key={post._id}
                id={post._id}
                title={post.title}
                content={post.content}
                image={post.image}
                file={post.fileAttached}
                handleEdit={modalOpener}
                handleDelete={deleteModalOpener}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
