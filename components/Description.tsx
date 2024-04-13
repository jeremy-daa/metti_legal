import Image from "next/image";
import React from "react";

const Description = ({
  title,
  description,
  img,
}: {
  title: string;
  description: string[];
  img: string;
}) => {
  return (
    <article className="w-full relative flex justify-end items-center">
      <Image
        src={img}
        alt="description"
        width={1280}
        height={720}
        className="absolute object-cover brightness-50 -z-10 top-0 left-0 h-full w-full"
      />
      <div className="flex w-[60%] flex-col gap-5 mx-10 my-[5rem] bg-gray-400 bg-opacity-30 p-5">
        <h1
          className="section-heading underline-short"
          style={{ color: "var(--theme-color)" }}
        >
          {title}
        </h1>
        <div className="text-l text-gray-100 flex flex-col gap-4">
          {description.map((desc, index) => (
            <p key={index} className="">
              {desc}
            </p>
          ))}
          {/* <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
            architecto soluta voluptatem qui, quis rem tenetur fuga sapiente,
            quos quo alias beatae iusto facilis quam consequatur ducimus non
            doloremque, sit eius quod dolorum blanditiis voluptas libero.{" "}
          </p>

          <p className="">
            Ad, explicabo adipisci deleniti unde dignissimos est at voluptates
            ducimus facilis quam eligendi dolorem impedit labore reiciendis iste
            fugiat quidem, maiores recusandae incidunt aut nostrum laudantium.
            Suscipit velit voluptates tenetur libero, ducimus, asperiores quia
            distinctio cupiditate tempore aut, consectetur illum! Quaerat iste
            enim est voluptatum ipsa soluta recusandae nostrum laborum quos
            necessitatibus. Veniam, minima iure maiores error repellat
            excepturi! Assumenda fugit inventore molestiae cum?
          </p>
          <p className="">
            Ad, explicabo adipisci deleniti unde dignissimos est at voluptates
            ducimus facilis quam eligendi dolorem impedit labore reiciendis iste
            fugiat quidem, maiores recusandae incidunt aut nostrum laudantium.
            Suscipit velit voluptates tenetur libero, ducimus, asperiores quia
            distinctio cupiditate tempore aut, consectetur illum! Quaerat iste
            enim est voluptatum ipsa soluta recusandae nostrum laborum quos
            necessitatibus. Veniam, minima iure maiores error repellat
            excepturi! Assumenda fugit inventore molestiae cum?
          </p> */}
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
            architecto soluta voluptatem qui, quis rem tenetur fuga sapiente,
            quos quo alias beatae iusto facilis quam consequatur ducimus non
            doloremque, sit eius quod dolorum blanditiis voluptas libero.{" "}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Description;
