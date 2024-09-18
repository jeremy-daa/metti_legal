import Image from "next/image";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      title: "Banking & Financial Services",
      image: "/icons/banking.svg",
      link: "/sectors/banking-and-financial-services",
    },
    {
      title: "Construction & Infrastructure",
      image: "/icons/construction.svg",
      link: "/sectors/construction-and-infrastructure",
    },
    {
      title: "Corporate Services",
      image: "/icons/business.svg",
      link: "/sectors/corporate-services",
    },
    {
      title: "Dispute Resolution",
      image: "/icons/dispute.svg",
      link: "/sectors/dispute-resolution",
    },
  ];
  return (
    <div className="w-full px-10 py-10 flex flex-wrap bg-[#fac6ff] gap-8 justify-evenly">
      {services.map((service, key) => (
        <div
          className="flex flex-col items-center justify-center pt-2"
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
