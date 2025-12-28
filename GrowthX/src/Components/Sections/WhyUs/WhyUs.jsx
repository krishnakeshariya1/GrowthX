import SectionTitle from "../../UI/SectionTitle";
import WhyUsCard from "./WhyUsCard";



const WhyUs =()=> {
  return (
    <section className="py-24 bg-linear-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Why Choose Us"
          subtitle="We blend engineering discipline with product storytelling."
        />
        <WhyUsCard />
      </div>
    </section>
  );
}
export default WhyUs