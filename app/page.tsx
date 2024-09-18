import Description from "@/components/Description";
import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Map from "@/components/Map";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Description
        title={"Experience Unmatched Legal Excellence"}
        description={[
          "Welcome to Metti Tadele Legal Firm, the epitome of legal expertise and professionalism in Ethiopia. As a premier Ethiopian law firm, we are committed to delivering top-tier legal advice and solutions tailored to the unique needs of each client. Our extensive experience across various legal domains enables us to provide authoritative and strategic legal services, ensuring that your business and investments in Ethiopia are not only secure but also primed for success.",
        ]}
        img="/images/4.jpg"
      />
      <Services />
      <PracticeAreas />
      <Team />
      <Expertise />
      <Testimonials />
      <ContactForm />
      <Map />
    </main>
  );
}
