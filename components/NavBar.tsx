"use client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineDown } from "react-icons/ai";
import NavLink from "./NavLink";
import { useState } from "react";
import NavLinkDisabled from "./NavLinkDisabled";

const NavBar = () => {
  const [style, setStyle] = useState({});
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setStyle({
        backgroundColor: "rgba(46, 46, 46, 0.98)",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
      });
    } else {
      setStyle({});
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }

  return (
    <nav
      className="flexBetween w-full paddings fixed top-0 left-0 z-10 duration-300"
      style={style}
    >
      <Link href={"/"}>
        <Image
          alt="Metti Legal Services Logo"
          src="/logo.png"
          className="drop-shadow-lg w-auto h-auto"
          width={50}
          height={50}
        />
      </Link>

      <ul className="xl:gap-7 gap-3 flexBetween">
        <li className="dropDownLink relative">
          <NavLinkDisabled className={"navLink"} href={"#"}>
            The Firm
            <AiOutlineDown className={"downIcon"} />
          </NavLinkDisabled>
          <ul className="dropDown inline-block">
            <li>
              <Link href={"/about"}>About Us</Link>
            </li>
            <li>
              <Link href={"/our-team"}>Our Team</Link>
            </li>
          </ul>
        </li>
        <li className="dropDownLink relative">
          <NavLinkDisabled className={"navLink"} href={"#"}>
            Sectors & Services
            <AiOutlineDown className={"downIcon"} />
          </NavLinkDisabled>
          <ul className="dropDown inline-block dropDownWide">
            <li>
              <Link href={"sectors/banking-and-financial-services"}>
                Banking & Financial Services
              </Link>
            </li>
            <li>
              <Link href={"sectors/construction-and-infrastracture"}>
                Construction & Infrastructure
              </Link>
            </li>
            <li>
              <Link href={"sectors/corporate-services"}>
                Corporate Services
              </Link>
            </li>
            <li>
              <Link href={"sectors/dispute-resolution"}>
                Dispute Resolution
              </Link>
            </li>
            <li>
              <Link href={"sectors/employment"}>Employment</Link>
            </li>
            <li>
              <Link href={"sectors/energy-and-mining"}>Energy & Mining</Link>
            </li>
            <li>
              <Link href={"sectors/intellectual-property-and-technology"}>
                Intellectual Property & Technology
              </Link>
            </li>
            <li>
              <Link href={"sectors/project-finance-ppp-and-public-procurement"}>
                Project Finance, PPP & Public Procurement
              </Link>
            </li>
            <li>
              <Link href={"sectors/real-estate-and-property"}>
                Real Estate & Property
              </Link>
            </li>
            <li>
              <Link href={"sectors/regulatory-and-government-affairs"}>
                Regulatory & Government Affairs
              </Link>
            </li>

            <li>
              <Link href={"sectors/tax-and-customs"}>Tax & Customs</Link>
            </li>
            <li>
              <Link href={"sectors/trade-practice-and-anti-trust"}>
                Trade Practice & Anti-Trust
              </Link>
            </li>
            <li>
              <Link href={"sectors/aviation-law"}>Aviation Law</Link>
            </li>
            <li>
              <Link href={"sectors/hospitality-and-leisure"}>
                Hospitality & Leisure
              </Link>
            </li>
            <li>
              <Link href={"sectors/ict-and-telecom"}>ICT & Telecom</Link>
            </li>
            <li>
              <Link href={"sectors/manufacturing-and-industries"}>
                Manufacturing & Industries
              </Link>
            </li>
            <li>
              <Link href={"sectors/ngos"}>NGO’s</Link>
            </li>
          </ul>
        </li>
        <li className="dropDownLink relative">
          <NavLinkDisabled className={"navLink"} href={"#"}>
            Resources
            <AiOutlineDown className={"downIcon"} />
          </NavLinkDisabled>
          <ul className="dropDown inline-block">
            <li>
              <Link href={"/blog"}>Law & Policy</Link>
            </li>
          </ul>
        </li>
        <li className="dropDownLink relative">
          <NavLink className={"navLink"} href={"/testimonials"}>
            Testimonials
          </NavLink>
        </li>
        <li>
          <Link className={"navLink enquire"} href={"/contact"}>
            Enquire
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
