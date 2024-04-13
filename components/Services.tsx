import Image from "next/image";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      title: "Corporate Services",
      image: "/icons/corporate-law.svg",
      link: "/corporate-services",
    },
    {
      title: "Banking & Financial Services",
      image: "/icons/financial-consulting.svg",
      link: "/banking-and-financial-services",
    },
    {
      title: "Real Estate & Property",
      image: "/icons/real-estate-law.svg",
      link: "/real-estate-and-property",
    },
    {
      title: "Banking & Financial Services",
      image: "/icons/financial-consulting.svg",
      link: "/banking-and-financial-services",
    },
  ];
  return (
    <div className="w-full p-4 flex flex-wrap bg-[#fac6ff] h-[150px]">
      {services.map((service, key) => (
        <div
          className="lg:w-1/4 w-1/2 flex flex-col items-center justify-center pt-2"
          key={key}
        >
          <Image
            src={service.image}
            alt={service.title}
            width={80}
            height={80}
            className="w-20 h-20 pb-2"
          />
          <Link
            className="text-center text-[#4a4a4a] cursor-pointer font-medium"
            href={service.link}
          >
            {service.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Services;
