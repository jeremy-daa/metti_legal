import Article from "@/components/Article";
import ContactForm from "@/components/ContactForm";
import Description from "@/components/Description";
import Hero2 from "@/components/Hero2";
import NextSteps from "@/components/NextSteps";

const page = () => (
  <div className="pb-24">
    <Hero2 title={"About Us"} img={"/images/1.jpg"} />
    <Description
      title={"World-Class Legal Services Tailored to Your Business in Ethiopia"}
      description={[
        "Welcome to Metti Tadele Legal Services, your gateway to the best and most world-class legal solutions in Ethiopia. As a business owner, you understand the importance of having a reliable and exceptional legal partner by your side. That's where we come in.",
        "At Metti Tadele Legal Services, we are committed to providing you with the best legal services in Ethiopia. Our team of experienced and dedicated lawyers is here to help you navigate the complex legal landscape in Ethiopia and ensure that your business is protected and thriving.",
      ]}
      img={"/images/4.jpg"}
    />
    <Article
      title={"Dependable Expertise"}
      description={[
        "At MTLS, we have been leading the way in corporate and transactional law in Ethiopia for nearly two decades. Founded by the renowned legal expert, MTLS, our team of highly skilled professionals has been trained in eight jurisdictions, ensuring a breadth of knowledge and expertise that sets us apart.",
        "When you choose our services, dependability becomes our hallmark. Our clients have placed their lasting trust and confidence in us for over 20 years. We are committed to upholding ethical practices and tirelessly protecting the interests and benefits of our clients. Your success is our priority.",
      ]}
    />
    <Article
      title={"Diversified Solutions"}
      description={[
        "As the preferred choice of clients across various business sectors, we pride ourselves on providing a growing set of practice areas and legal advisory services. From investment and corporate transactions to taxation, international arbitration, energy, project financing, intellectual property, and more, our comprehensive range of services covers all aspects of your legal needs.",
      ]}
    />
    <div className="mb-16"></div>
    <Description
      title={"Tailored to You"}
      description={[
        "What sets us apart is our dynamic team, equipped with global training and an unwavering dedication to understanding your unique needs. We take the time to step into your shoes, view the world through your perspective, and craft tailored solutions that address your specific challenges. We believe in building a personal connection with each client, ensuring that your goals and aspirations are at the heart of our legal strategies.",
      ]}
      img={"/images/4.jpg"}
    />
    <Article
      title={"Experience the Difference"}
      description={[
        "When you choose Metti Tadele Legal Services, you're choosing a partner who goes beyond the ordinary. We are here to provide you with world-class legal expertise, unrivaled dedication, and personalized service that surpasses your expectations.",
      ]}
    />
    <NextSteps />
    <ContactForm />
  </div>
);

export default page;
