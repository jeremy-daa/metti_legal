import CommentSection from "@/components/CommentSection";
import Hero2 from "@/components/Hero2";
import LineBreak from "@/components/LineBreak";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Params {
  params: {
    id: string;
  };
}
const page = async ({ params: { id } }: Params) => {
  const res: any = await fetch(
    `https://metti-legal.vercel.app/api/posts?id=${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    }
  ).then((res) => res.json());
  const blog = res.post;
  if (!blog) {
    return notFound();
  }
  const { title, content, image, fileAttached, comments } = blog;
  return (
    <div className="">
      <Hero2 title={title} img={image} />
      <div className="bg-[#ebebebbd] w-full pl-[200px] pr-[50px] flex justify-between">
        <div className="flex-[0.65]">
          <h1 className="text-4xl font-bold text-[var(--theme-color)] text-center pt-10 mb-16 px-4">
            {title}
          </h1>
          <Image
            src={image}
            alt={title}
            width={1920}
            height={1080}
            className="mx-auto max-w-[500px] h-auto object-cover max-h-[350px]"
          />
          <div className="w-[80%] mx-auto mt-14 flex justify-center flex-col items-center">
            <div className="text-start mb-[50px]">
              <p className="text-start text-[20px]">
                <LineBreak str={content} />
              </p>
            </div>
            {fileAttached && (
              <>
                <Link
                  className="tracking-wider px-7 py-4 bg-[var(--light-color)] text-[var(--theme-color)] text-sm  hover:text-[var(--light-color)] duration-500 cursor-pointer mt-5 hover:bg-[var(--theme-color)] rounded-[2px] border-[var(--theme-color)] border-2 mb-[50px]"
                  href={fileAttached}
                  download={fileAttached}
                >
                  Download Attached File
                </Link>
              </>
            )}
          </div>
        </div>
        <CommentSection id={id} comments={comments} />
      </div>
    </div>
  );
};

export default page;
