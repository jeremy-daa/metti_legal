import Link from "next/link";
import Image from "next/image";

const PracticeAreas = () => {
  const practiceAreas = [
    {
      title: "Banking & Financial Services",
      description:
        "With the rapid expansion of private banks, micro-finance institutions, and insurance service providers in Ethiopia, it's crucial to navigate the ever-changing financial regulations. Our team of lawyers stays at the forefront of this dynamic landscape, providing expert advice on foreign financing, shareholder loans, foreign exchange regulations, compliance, and more. We have extensive experience in major insurance policy advisory for investments in Ethiopia.",
      link: "/banking-and-financial-services",
      image: "/images/1.jpg",
    },
    {
      title: "Construction & Infrastructure",
      description:
        "We provide legal advice on all aspects of construction and infrastructure projects, including construction contracts, project finance, public-private partnerships, and more. Our team has extensive experience in advising on the construction of roads, railways, airports, and other infrastructure projects.",
      link: "/construction-and-infrastracture",
      image: "/images/2.jpg",
    },
    {
      title: "Corporate Services",
      description:
        "We provide a wide range of corporate services, including company formation, corporate governance, mergers and acquisitions, and more. Our team has extensive experience in advising on the establishment of companies, branches, representative offices, and other business entities in Ethiopia.",
      link: "/corporate-services",
      image: "/images/3.jpg",
    },
    {
      title: "Dispute Resolution",
      description:
        "We provide legal advice on all aspects of dispute resolution, including litigation, arbitration, mediation, and more. Our team has extensive experience in advising on the resolution of disputes in Ethiopia.",
      link: "/dispute-resolution",
      image: "/images/4.jpg",
    },
    {
      title: "Employment",
      description:
        "We provide legal advice on all aspects of employment law, including employment contracts, employee benefits, labor disputes, and more. Our team has extensive experience in advising on employment law in Ethiopia.",
      link: "/employment",
      image: "/images/2.jpg",
    },
    {
      title: "Energy & Mining",
      description:
        "We provide legal advice on all aspects of energy and mining law, including mining licenses, power purchase agreements, and more. Our team has extensive experience in advising on energy and mining law in Ethiopia.",
      link: "/energy-and-mining",
      image: "/images/4.jpg",
    },
    {
      title: "Intellectual Property & Technology",
      description:
        "We provide legal advice on all aspects of intellectual property and technology law, including trademarks, patents, copyrights, and more.",
      link: "/intellectual-property-and-technology",
      image: "/images/1.jpg",
    },
    {
      title: "Project Finance, PPP & Public Procurement",
      description:
        "We provide legal advice on all aspects of project finance, public-private partnerships, and public procurement law. Our team has extensive experience in advising on project finance, public-private partnerships, and public procurement law in Ethiopia.",
      link: "/project-finance-ppp-and-public-procurement",
      image: "/images/3.jpg",
    },
    {
      title: "Real Estate & Property",
      description:
        "We provide legal advice on all aspects of real estate and property law, including property development, property management, and more. Our team has extensive experience in advising on real estate and property law in Ethiopia.",
      link: "/real-estate-and-property",
      image: "/images/1.jpg",
    },
    {
      title: "Regulatory & Government Affairs",
      description:
        "We provide legal advice on all aspects of regulatory and government affairs, including regulatory compliance, government relations, and more. Our team has extensive experience in advising on regulatory and government affairs in Ethiopia.",
      link: "/regulatory-and-government-affairs",
      image: "/images/2.jpg",
    },
    {
      title: "Tax & Customs",
      description:
        "We provide legal advice on all aspects of tax and customs law, including tax planning, tax compliance, and more. Our team has extensive experience in advising on tax and customs law in Ethiopia.",
      link: "/tax-and-customs",
      image: "/images/3.jpg",
    },
    {
      title: "Trade Practice & Anti-Trust",
      description:
        "We provide legal advice on all aspects of trade practice and anti-trust law, including competition law, consumer protection, and more. Our team has extensive experience in advising on trade practice and anti-trust law in Ethiopia.",
      link: "/trade-practice-and-anti-trust",
      image: "/images/4.jpg",
    },
    {
      title: "Aviation Law",
      description:
        "We provide legal advice on all aspects of aviation law, including aircraft financing, aircraft leasing, and more. Our team has extensive experience in advising on aviation law in Ethiopia.",
      link: "/aviation-law",
      image: "/images/1.jpg",
    },
    {
      title: "Hospitality & Leisure",
      description:
        "We provide legal advice on all aspects of hospitality and leisure law, including hotel management, hotel operations, and more. Our team has extensive experience in advising on hospitality and leisure law in Ethiopia.",
      link: "/hospitality-and-leisure",
      image: "/images/4.jpg",
    },
    {
      title: "ICT & Telecom",
      description:
        "We provide legal advice on all aspects of ICT and telecom law, including telecommunications, internet, and more. Our team has extensive experience in advising on ICT and telecom law in Ethiopia.",
      link: "/ict-and-telecom",
      image: "/images/2.jpg",
    },
    {
      title: "Manufacturing & Industries",
      description:
        "We provide legal advice on all aspects of manufacturing and industries law, including manufacturing, industrial development, and more. Our team has extensive experience in advising on manufacturing and industries law in Ethiopia.",
      link: "/manufacturing-and-industries",
      image: "/images/3.jpg",
    },
    {
      title: "NGO’s",
      description:
        "We provide legal advice on all aspects of NGO law, including NGO registration, NGO compliance, and more. Our team has extensive experience in advising on NGO law in Ethiopia.",
      link: "/ngos",
      image: "/images/1.jpg",
    },
  ];
  return (
    <div className="flex flex-wrap justify-start w-full ">
      <div className="w-full h-[150px] text-center text-5xl font-medium flex justify-center items-center uppercase bg-[var(--lighter-dark)]">
        <h1
          className="section-heading"
          style={{
            color: "var(--theme-color)",
          }}
        >
          Our Practice Areas
        </h1>
      </div>
      {practiceAreas.map((practiceArea, key) =>
        key < 12 ? (
          <div
            className="w-1/4 flex flex-col items-center justify-center h-[300px] relative overflow-hidden practice-container"
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
                href={practiceArea.link}
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
  );
};

export default PracticeAreas;
