import React from "react";

const Expertise = () => {
  const expertise = [
    {
      title: "Corporate Law",
      progress: "80",
    },
    {
      title: "Banking & Financial Law",
      progress: "90",
    },
    {
      title: "Real Estate & Property",
      progress: "100",
    },
    {
      title: "Litigation",
      progress: "89",
    },
    {
      title: "Tax & Customs Law",
      progress: "89",
    },
  ];
  return (
    <div className=" bg-[#fac6ff] w-full flex flex-col justify-center items-center py-10 gap-7">
      <h1 className="section-heading">Our Expertise</h1>
      <div className="md:w-[90%] w-full flex flex-wrap gap-1 justify-evenly items-between">
        {expertise.map((expertise, key) => (
          <div
            className="flex flex-col gap-5 justify-center items-center my-6"
            key={key}
          >
            <div
              className="circular-progress"
              style={{
                background: `conic-gradient(var(--theme-color) ${expertise.progress}%, #f1f1f1 50deg)`,
              }}
            >
              <span className="progress-value text-5xl font-medium">
                {expertise.progress}%
              </span>
            </div>
            <p className="text-xl font-medium text-gray-800">
              {expertise.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
