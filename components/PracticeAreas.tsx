import Link from "next/link";
import Image from "next/image";
import { practiceAreas } from "../data/practiceAreas";

const PracticeAreas = () => {
  return (
    <div className="flex flex-wrap justify-start w-full " id="sectors">
      <div className="w-full h-[150px] text-center text-5xl font-medium flex justify-center items-center uppercase bg-[var(--lighter-dark)]">
        <h1
          className="section-heading"
          style={{
            color: "var(--theme-color)",
          }}
        >
          Our Service Areas
        </h1>
      </div>
      <div className="flex flex-wrap w-full">
        {practiceAreas.map((practiceArea, key) =>
          key < 8 ? (
            <div
              className="flex flex-col items-center justify-center xl:w-1/4 lg:w-1/3 md:w-1/2 w-full h-[300px] relative overflow-hidden practice-container"
              key={key}
            >
              <Image
                src={practiceArea.image}
                alt={practiceArea.title}
                width={350}
                height={350}
                className="absolute top-0 left-0 w-full h-full -z-10"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              ></Image>
              <div className="absolute w-full h-full bg-black opacity-40 -z-10"></div>
              <h1 className="absolute text-center text-gray-100 text-xl font-medium bottom-[8%] left-[50%] -translate-x-[50%] w-full practice-area-title">
                {practiceArea.title}
              </h1>
              <div className="absolute bottom-0 translate-y-[100%] p-4 text-black bg-gray-100 bg-opacity-20 practice-area-description">
                {""}
                <Link
                  href={practiceArea.link ? practiceArea.link : "#"}
                  className="cursor-pointer text-xl font-medium text-[var(--theme-color)] practice-area-link"
                >
                  {practiceArea.title}
                </Link>
                <p className="text-sm font-light text-gray-100">
                  {practiceArea.description.length > 200
                    ? practiceArea.description.substring(0, 200) + "..."
                    : practiceArea.description}
                </p>{" "}
              </div>
            </div>
          ) : null
        )}
      </div>

      <div className="w-full flex justify-center"></div>
    </div>
  );
};

export default PracticeAreas;
