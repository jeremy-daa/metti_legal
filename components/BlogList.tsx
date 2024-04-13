"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdOutlineModeEdit, MdOutlineDeleteOutline } from "react-icons/md";
import LineBreak from "./LineBreak";
import Link from "next/link";

interface BlogListProps {
  id: string;
  title: string;
  content: string;
  image: string;
  file?: string;
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
}

const BlogList = ({
  id,
  title,
  content,
  image,
  file,
  handleEdit,
  handleDelete,
}: BlogListProps) => {
  // const handleDelete = async () => {
  //   const res = await fetch(`/api/posts/${id}`, {
  //     method: "DELETE",
  //   });
  //   if (res.ok) {
  //     alert("Post deleted successfully");
  //   } else {
  //     alert("An error occurred while deleting post");
  //   }
  // };

  return (
    <div className="w-full border-[var(--theme-color)] border-[2px] rounded-md px-5 py-5 flex justify-start items-start mb-8">
      <Image
        src={image}
        className="h-[300px] min-w-[250px] object-cover rounded-md border-[2px] border-[var(--theme-color)]"
        width={300}
        height={300}
        alt={""}
      />
      <div className="ml-10 w-full flex flex-col justify-between items-start">
        <div>
          <h1 className="text-3xl font-medium mt-2 text-[var(--theme-color)]">
            {title}
          </h1>
          <p className="text-lg text-[#333] mt-2">
            <LineBreak str={content} doubleBreak />
          </p>
        </div>
        {file && (
          <Link
            href={file}
            className="px-8 py-2 text-base rounded-md bg-[var(--theme-color)] text-[var(--light-color)]"
          >
            Attached File
          </Link>
        )}
      </div>
      {/* buttons to delete and edit*/}
      <div className="ml-10 min-w-[160px] flex justify-center items-end flex-col">
        <button
          className="bg-[var(--theme-color)] text-white rounded-md expandButton"
          onClick={() => handleEdit(id)}
        >
          <MdOutlineModeEdit />
          Edit
        </button>
        <button
          className="bg-red-400 text-white rounded-md expandButton"
          onClick={() => handleDelete(id)}
        >
          <MdOutlineDeleteOutline />
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogList;
