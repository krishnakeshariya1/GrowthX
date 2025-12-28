import SectionTitle from "../../UI/SectionTitle";
import FeatureCard from "./FeatureCard";
const Features = ()=> {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Product Capabilities"
          subtitle="Everything you need to build, scale, and present a growth-driven product."
        />

        < FeatureCard />
      </div>
    </section>
  );
}
export default Features