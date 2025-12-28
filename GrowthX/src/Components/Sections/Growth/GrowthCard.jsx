import StatCard from "../../UI/StartCard";

const GrowthCard = () => {
    const stats = [
        { value: "3.2x", label: "Revenue Growth" },
        { value: "68%", label: "User Retention" },
        { value: "120K+", label: "Active Users" },
    ];

    return (
        <div className="grid md:grid-cols-3 gap-8">
            {stats.map((s, i) => (
                <StatCard key={i} {...s} />
            ))}
        </div>
    )
}
export default GrowthCard