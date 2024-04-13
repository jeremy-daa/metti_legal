import Description from "@/components/Description";
import Hero2 from "@/components/Hero2";
import Team from "@/components/Team";
import TeamDescription from "@/components/TeamDescription";

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
      <Team />
      <TeamDescription />
    </div>
  );
};

export default page;
