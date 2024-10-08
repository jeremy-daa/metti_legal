import React from "react";

const Article = ({
  title,
  description,
}: {
  title: string;
  description: string[];
}) => {
  return (
    <section className="pt-16 md:px-24 sm:px-10 px-5">
      <h1 className="text-3xl pb-3 lg:text-[35px] font-medium text-center border-b-[1px] border-[var(--theme-color)] mb-10">
        {title}
      </h1>
      {description.map((desc, index) => (
        <p key={index} className="text-lg lg:text-xl mb-5">
          {desc}
        </p>
      ))}
    </section>
  );
};

export default Article;
