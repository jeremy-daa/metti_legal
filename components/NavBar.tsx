import Image from "next/image";
import Link from "next/link";
import { AiOutlineDown } from "react-icons/ai";
import NavLink from "./NavLink";

const NavBar = () => {
  return (
    <nav className="flexBetween w-full paddings sticky top-0 left-0 z-10">
      <Link href={"/"}>
        <Image
          alt="Metti Legal Services Logo"
          src="/logo.png"
          width={50}
          height={50}
        />
      </Link>

      <ul className="gap-7 flexBetween">
        <li className="dropDownLink relative">
          <NavLink className={"navLink"} href={"/the-firm"}>
            The Firm
            <AiOutlineDown className={"downIcon"} />
          </NavLink>
          <ul className="dropDown inline-block">
            <li>
              <Link href={"/our-values"}>Our Values</Link>
            </li>
            <li>
              <Link href={"/our-team"}>Our Team</Link>
            </li>
          </ul>
        </li>
        <li className="dropDownLink relative">
          <NavLink className={"navLink"} href={"/sectors-and-services"}>
            Sectors & Services
            <AiOutlineDown className={"downIcon"} />
          </NavLink>
          <ul className="dropDown inline-block dropDownWide">
            <li>
              <Link href={"/banking-and-financial-services"}>
                Banking & Financial Services
              </Link>
            </li>
            <li>
              <Link href={"/construction-and-infrastracture"}>
                Construction & Infrastructure
              </Link>
            </li>
            <li>
              <Link href={"/corporate-services"}>Corporate Services</Link>
            </li>
            <li>
              <Link href={"/dispute-resolution"}>Dispute Resolution</Link>
            </li>
            <li>
              <Link href={"/employment"}>Employment</Link>
            </li>
            <li>
              <Link href={"/energy-and-mining"}>Energy & Mining</Link>
            </li>
            <li>
              <Link href={"/intellectual-property-and-technology"}>
                Intellectual Property & Technology
              </Link>
            </li>
            <li>
              <Link href={"/project-finance-ppp-and-public-procurement"}>
                Project Finance, PPP & Public Procurement
              </Link>
            </li>
            <li>
              <Link href={"/real-estate-and-property"}>
                Real Estate & Property
              </Link>
            </li>
            <li>
              <Link href={"/regulatory-and-government-affairs"}>
                Regulatory & Government Affairs
              </Link>
            </li>

            <li>
              <Link href={"/tax-and-customs"}>Tax & Customs</Link>
            </li>
            <li>
              <Link href={"/trade-practice-and-anti-trust"}>
                Trade Practice & Anti-Trust
              </Link>
            </li>
            <li>
              <Link href={"/aviation-law"}>Aviation Law</Link>
            </li>
            <li>
              <Link href={"/hospitality-and-leisure"}>
                Hospitality & Leisure
              </Link>
            </li>
            <li>
              <Link href={"/ict-and-telecom"}>ICT & Telecom</Link>
            </li>
            <li>
              <Link href={"/manufacturing-and-industries"}>
                Manufacturing & Industries
              </Link>
            </li>
            <li>
              <Link href={"/ngos"}>NGO’s</Link>
            </li>
          </ul>
        </li>
        <li className="dropDownLink relative">
          <NavLink className={"navLink"} href={"/resources"}>
            Resources
            <AiOutlineDown className={"downIcon"} />
          </NavLink>
          <ul className="dropDown inline-block">
            <li>
              <Link href={"/our-values"}>Law & Policy</Link>
            </li>
          </ul>
        </li>
        <li className="dropDownLink relative">
          <NavLink className={"navLink"} href={"/testimonials"}>
            Testimonials
          </NavLink>
        </li>
        <li className="dropDownLink relative">
          <NavLink className={"navLink"} href={"/contact-us"}>
            Contact Us
          </NavLink>
        </li>
        <li>
          <Link className={"navLink enquire"} href={"/contact-us"}>
            Enquire
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
