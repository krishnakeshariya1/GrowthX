import SectionTitle from "../../UI/SectionTitle";
import StatCard from "../../UI/StartCard";
import GrowthCard from "./GrowthCard";

const Growth =()=> {
  return (
    <section className="py-24 bg-linear-to-b from-white to-indigo-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Growth That Speaks"
          subtitle="Metrics that build trust with investors and stakeholders."
        />
        <GrowthCard />
      </div>
    </section>
  );
}
export default Growth