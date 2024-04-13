"use client";
import { cropString } from "@/utils/functions";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { fetchPosts } from "./AdminDashboard";
import Link from "next/link";
import { TbClipboardCopy } from "react-icons/tb";
import { MdMenuBook } from "react-icons/md";

interface Blog {
  id: number;
  title: string;
  body: string;
}

const Blogs = () => {
  const placeholders = Array.from({ length: 6 }, (_, i) => i);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(6);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const [filteredDisplayBlogs, setFilteredDisplayBlogs] = useState(
    [] as Blog[]
  );
  const currentBlogs = filteredDisplayBlogs.slice(
    indexOfFirstBlog,
    indexOfLastBlog
  );
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const awaitPosts = async () => {
    const req = await fetchPosts().then((res) => {
      setLoading(false);
      setBlogs(res.posts);
      setFilteredDisplayBlogs(res.posts);
    });
    return req;
  };
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setBlogs(data);
    //     setLoading(false);
    //   });
    awaitPosts();
  }, []);
  const handleSearch = () => {
    const filteredBlogs = blogs?.filter((blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredDisplayBlogs(filteredBlogs);
  };

  return (
    <div className="py-16">
      <div className="w-full flex justify-center items-center mb-12">
        <div className="w-[45%] flex justify-start items-center border-[2px] border-[var(--theme-color)] rounded-[50px] text-lg ">
          <input
            type="text"
            className="w-[70%] bg-transparent outline-none h-full px-10 py-4"
            placeholder="Search Blogs and Articles"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <button
            className="translate-x-1 flex justify-start items-center w-[30%] outline-none h-full bg-[var(--theme-color)] px-[45px] py-4 text-white font-bold border-[2px] border-[var(--theme-color)] rounded-r-[50px] hover:shadow-[var(--theme-color)] hover:shadow-md duration-500"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      {loading ? (
        <>
          <div className="w-full px-[100px] flex flex-wrap justify-start items-start gap-5">
            {placeholders.map((_, i) => (
              <div
                key={i}
                className="h-[550px] min-w-[30%] w-[30%] flex flex-col items-start justify-start relative border-[2px] border-[var(--theme-color)] rounded-[10px] shadow-[var(--theme-color)] hover:shadow-lg duration-500 px-5 py-5"
              >
                <div className="w-full h-[300px] bg-[#e6e6e6e5] object-cover object-top rounded-[6px] mb-10 pulseText"></div>
                <h2 className="w-[80%] py-5 bg-[#f79cff] object-cover object-top rounded-[6px] mb-10 pulseText"></h2>

                <p className="w-full py-3 bg-[#e6e6e6e5] pulseText mb-2"></p>
                <p className="w-full py-3 bg-[#e6e6e6e5] pulseText mb-2"></p>
                <p className="w-full py-3 bg-[#e6e6e6e5] pulseText mb-2"></p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="w-full px-[100px] flex flex-wrap justify-start items-start gap-5 ">
          {currentBlogs.map((blog: any) => (
            <div
              key={blog._id}
              className="min-h-[550px] min-w-[30%] w-[30%] flex flex-col items-start justify-between relative border-[2px] border-[var(--theme-color)] rounded-[10px] boxShadow duration-500 px-5 py-5 select-none"
            >
              <div>
                <Image
                  src={blog.image}
                  alt={""}
                  width={400}
                  height={200}
                  className="min-w-full h-[300px] object-cover object-top rounded-[6px] mb-5 border-[var(--theme-color)] border-2"
                />
                <h2 className="text-xl mb-3 text-[var(--theme-color)] capitalize">
                  {blog.title}
                </h2>
                <p>{cropString(blog.content, 100)}</p>
              </div>
              <div className="flex justify-between min-w-full ">
                <Link
                  href={`/blog/${blog._id}`}
                  className="tracking-wider px-4 py-1 bg-[var(--light-color)] text-[var(--theme-color)] text-sm  hover:text-[var(--light-color)] duration-500 cursor-pointer mt-5 hover:bg-[var(--theme-color)] rounded-[2px] border-[var(--theme-color)] border-2 flex justify-center items-center gap-2"
                >
                  <MdMenuBook />
                  Read more...
                </Link>
                <div
                  className="tracking-wider px-4 py-1 bg-[var(--light-color)] text-[var(--theme-color)] text-sm  hover:text-[var(--light-color)] duration-500 cursor-pointer mt-5 hover:bg-[var(--theme-color)] rounded-[2px] border-[var(--theme-color)] border-2 flex justify-center items-center gap-2"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `${window.location.origin}/blog/${blog._id}`
                    );
                  }}
                >
                  <TbClipboardCopy />
                  Copy Link
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-center items-center mt-8 gap-3">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="cursor-pointer mr-2 px-10 py-2 bg-[var(--theme-color)] border-[var(--theme-color)] border-2 text-white rounded disabled:bg-[white] disabled:text-[var(--theme-color)] disabled:cursor-auto"
        >
          Prev
        </button>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentBlogs.length < blogsPerPage}
          className="cursor-pointer px-10 py-2 bg-[var(--theme-color)] border-[var(--theme-color)] border-2 text-white rounded disabled:bg-[white] disabled:text-[var(--theme-color)] disabled:cursor-auto "
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Blogs;
