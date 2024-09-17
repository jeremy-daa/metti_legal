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
        title={"Our Mission"}
        description={[
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla architecto soluta voluptatem qui, quis rem tenetur fuga sapiente, quos quo alias beatae iusto facilis quam consequatur ducimus non doloremque, sit eius quod dolorum blanditiis voluptas libero.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla architecto soluta voluptatem qui, quis rem tenetur fuga sapiente, quos quo alias beatae iusto facilis quam consequatur ducimus non doloremque, sit eius quod dolorum blanditiis voluptas libero.",
        ]}
        img={"/images/2.jpg"}
      />
      <Lawyers />
      {/* <TeamDescription /> */}
    </div>
  );
};

export default page;
