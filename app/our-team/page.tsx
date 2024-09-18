import Description from "@/components/Description";
import Hero2 from "@/components/Hero2";
import Image from "next/image";
import TeamDescription from "@/components/TeamDescription";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import Lawyers from "@/components/Lawyers";

const page = () => {
  return (
    <div>
      <Hero2 title={"Our Team"} img={"/images/1.jpg"} />
      <Description
        title={"Meet Our Exceptional Team of Legal Experts"}
        description={[
          "At Metti Tadele Legal Services, we have assembled a team of exceptional legal experts who are ready to provide world-class services tailored to your business needs. Contact us today and experience the difference our personalized approach can make for your success.",
        ]}
        img={"/images/2.jpg"}
      />
      <Lawyers />
      <TeamDescription />
    </div>
  );
};

export default page;
