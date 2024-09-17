import Image from "next/image";
import Link from "next/link";
import {
  BiLogoFacebookCircle,
  BiLogoTwitter,
  BiLogoInstagram,
} from "react-icons/bi";

const Team = () => {
  const team = [
    {
      name: "Lorem Ipsum",
      position: "Director",
      image: "/images/random.png",
      description:
        "Lorem ipsum dolor sit amet, consectetu incididunt ut dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      name: "Lorem Ipsum",
      position: "Director",
      image: "/images/random.png",
      description:
        "Lorem ipsum dolor sit amet, consectetu incididunt ut dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      name: "Lorem Ipsum",
      position: "Director",
      image: "/images/random.png",
      description:
        "Lorem ipsum dolor sit amet, consectetu incididunt ut dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      name: "Lorem Ipsum",
      position: "Director",
      image: "/images/random.png",
      description:
        "Lorem ipsum dolor sit amet, consectetu incididunt ut dolore magna aliqua. Ut enim ad minim veniam",
    },
  ];
  return (
    <section className="flex items-center py-10 lg:py-24 font-poppins w-full">
      <div className="justify-center flex-1 px-4 py-6 mx-auto max-w-full md:max-w-7xl lg:py-4 md:px-6">
        <div className="mb-10 text-center">
          <span className="block mb-4 text-xs font-semibold leading-4 tracking-widest text-center text-[var(--theme-color)] uppercase text-gray-500">
            Team
          </span>
          <h1 className="section-heading font-bold uppercase text-gray-800">
            Our Team
          </h1>
        </div>
        <div className="flex gap-12 flex-wrap justify-evenly px-4">
          {team.map((member) => (
            <Link
              key={member.name}
              href="#"
              className="flex flex-wrap mb-0 overflow-hidden rounded gap-5 xl:w-1/3"
            >
              <div className="inline-block mb-3 overflow-hidden text-xs text-gray-800 md:rounded-full h-96 w-full md:w-64 md:h-64 relative border-[var(--theme-color)] border-4 ">
                <Image
                  className="absolute top-0 left-0 object-cover w-full h-full duration-300 hover:scale-[1.25]"
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  style={{
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
              </div>
              <div className="relative flex self-center flex-1 lg:ml-8 ">
                <div>
                  <h2 className="mb-2 text-2xl font-bold text-gray-800">
                    {member.name}
                  </h2>
                  <p className="mb-4 text-sm font-medium text-[var(--theme-color)]">
                    {member.position}
                  </p>
                  <p className="mb-6 text-sm text-gray-800">
                    {member.description}
                  </p>
                  <div className="flex  text-gray-800">
                    <span className="inline-block mr-5 duration-300 hover:text-[var(--theme-color)]">
                      <BiLogoFacebookCircle className="w-7 h-7" />
                    </span>
                    <span className="inline-block mr-5 duration-300 hover:text-[var(--theme-color)]">
                      <BiLogoTwitter className="w-7 h-7" />
                    </span>
                    <span className="inline-block mr-5 duration-300 hover:text-[var(--theme-color)]">
                      <BiLogoInstagram className="w-7 h-7" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
