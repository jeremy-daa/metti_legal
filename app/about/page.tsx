import Article from "@/components/Article";
import ContactForm from "@/components/ContactForm";
import Description from "@/components/Description";
import Hero2 from "@/components/Hero2";
import NextSteps from "@/components/NextSteps";

const page = () => {
  return (
    <div className="pb-24">
      <Hero2 title={"About Us"} img={"/images/6.jpg"} />
      <Description
        title={"Our Mission"}
        description={[
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla architecto soluta voluptatem qui, quis rem tenetur fuga sapiente, quos quo alias beatae iusto facilis quam consequatur ducimus non doloremque, sit eius quod dolorum blanditiis voluptas libero.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla architecto soluta voluptatem qui, quis rem tenetur fuga sapiente, quos quo alias beatae iusto facilis quam consequatur ducimus non doloremque, sit eius quod dolorum blanditiis voluptas libero.",
        ]}
        img={"/images/4.jpg"}
      />
      <Article />
      <Article />
      <NextSteps />
      <Article />
      <ContactForm />
    </div>
  );
};

export default page;
