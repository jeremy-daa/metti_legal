"use client";
import { set } from "mongoose";
import React, { useEffect, useState } from "react";

const CommentSection = ({
  id,
  comments,
}: {
  id: string;
  comments: {
    commenter: string;
    email: string;
    content: string;
  }[];
}) => {
  const [commenter, setCommenter] = useState("");
  const [email, setEmail] = useState("");
  const [content, setComment] = useState("");
  const [commentList, setCommentList] = useState(comments);
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState("");
  const fetchComments = async () => {
    const res: any = await fetch(`/api/posts?id=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    const blog = res.post;
    setCommentList(blog.comments);
  };

  const handleComment = async () => {
    const res = await fetch(`/api/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId: id,
        commenter: commenter,
        content: content,
        email: email,
      }),
    });
    if (res.status === 200) {
      fetchComments();
      setCommenter("");
      setEmail("");
      setComment("");
      setInfo("Comment was successful");
    } else if (res.status === 404) {
      setInfo("Post not found");
    } else {
      console.log("Error occurred while updating creating comment");
      setInfo("Error occurred while updating creating comment");
    }
  };
  console.log(comments);
  return (
    <div className="mb-[50px] flex-[0.35]">
      {/* comments */}
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-[var(--theme-color)] text-center pt-10 mb-8 px-4">
          Comments
        </h1>
        {/* <div className="w-[80%] min-w-[300px] mx-auto">
          <div className="w-full h-[200px] bg-[#e6e6e6e5] object-cover object-top rounded-[6px] mb-10"></div>
          <p className="w-full py-3 bg-[#e6e6e6e5] mb-2"></p>
          <p className="w-full py-3 bg-[#e6e6e6e5] mb-2"></p>
          <p className="w-full py-3 bg-[#e6e6e6e5] mb-2"></p>
        </div> */}
        <div className="w-full md:w-[80%] min-w-[300px] mx-auto">
          {commentList.length > 0 ? (
            commentList.map((comment, i) => (
              <div
                key={i}
                className="w-full py-3 bg-[#e6e6e6e5] mb-2 px-4 flex flex-col justify-center items-start gap-3"
              >
                <h1 className="font-bold text-[var(--theme-color)]">
                  {comment.commenter}
                </h1>
                <p>{comment.content}</p>
                <p className="text-sm font-bold text-[#333]">{comment.email}</p>
              </div>
            ))
          ) : (
            <p className="w-full text-center px-4 py-3 border-2 rounded-md">
              No comments yet
            </p>
          )}
        </div>
      </div>
      {/* Leave a comment */}
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-[var(--theme-color)] text-center pt-10 mb-8 px-4">
          Leave a Comment
        </h1>
        {info && (
          <p className="w-full md:w-[80%] min-w-[300px] mx-auto text-center text-[var(--theme-color)] bg-[#e6e6e6e5] py-3 px-4 mb-2">
            {info}
          </p>
        )}
        <div className="w-full md:w-[80%] min-w-[300px] mx-auto">
          <input
            type="text"
            placeholder="Name"
            className="w-full py-3 bg-[#e6e6e6e5] mb-2 px-4"
            value={commenter}
            onChange={(e) => setCommenter(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full py-3 bg-[#e6e6e6e5] mb-2 px-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Comment"
            className="w-full py-3 bg-[#e6e6e6e5] mb-2 px-4"
            value={content}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button
            className="w-full py-3 bg-[var(--theme-color)] text-white font-bold border-[2px] border-[var(--theme-color)] rounded-[10px] hover:shadow-[var(--theme-color)] hover:shadow-md duration-500"
            onClick={handleComment}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
