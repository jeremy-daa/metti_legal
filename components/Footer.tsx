import Image from "next/image";
import Link from "next/link";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoLinkedin,
} from "react-icons/bi";
import NavLink from "./NavLink";
import NewsLetterForm from "./NewsLetterForm";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="footer">
      <div className="container">
        <div className="row flex-wrap">
          <div className="footer-col">
            <Image
              src="/logo.png"
              alt="Metti Legal Services Logo"
              width={80}
              height={80}
              className="mb-5 w-auto h-auto"
            />

            <h4>Reach Us</h4>
            <ul>
              <li>
                <Link href="https://maps.app.goo.gl/4fYG57vubh9HFyNfA">
                  Genete Limat, Addis Ababa, Ethiopia
                </Link>
              </li>
              <li>
                <Link href="tel:+251990251565">(+251) - 99 - 025 - 1565</Link>
              </li>
              <li>
                <Link
                  href="mailto:exaple@example.com"
                  style={{ textTransform: "lowercase" }}
                >
                  example
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-nav-link">
              <li>
                <NavLink href="/">Home</NavLink>
              </li>
              <li>
                <NavLink href="/our-team">Our Team</NavLink>
              </li>
              <li>
                <NavLink href="/corporate-services">Corporate Services</NavLink>
              </li>
              <li>
                <NavLink href="/real-estate-property">
                  Real Estate & Property
                </NavLink>
              </li>
              <li>
                <NavLink href="/law-policies">Laws and Policies</NavLink>
              </li>
              <li>
                <NavLink href="/testimonials">Testimonials</NavLink>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <Link href="#">
                <BiLogoFacebook />
              </Link>
              <Link href="#">
                <BiLogoTwitter />
              </Link>
              <Link href="#">
                <BiLogoInstagram />
              </Link>
              <Link href="#">
                <BiLogoLinkedin />
              </Link>
            </div>
            <NewsLetterForm />
          </div>
        </div>
        <div className="text-gray-200 flex justify-center items-center pt-14 code font-light text-base">
          <span className="pr-2 font-light">
            {date.getFullYear()} &copy; Meti Legal Services || All Rights
            Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
