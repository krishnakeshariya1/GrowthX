const features = [
  {
    title: "Real-time Analytics",
    desc: "Track KPIs and growth metrics instantly with live dashboards.",
  },
  {
    title: "Scalable Architecture",
    desc: "Built with modular React components for long-term scale.",
  },
  {
    title: "High Performance UI",
    desc: "Optimized rendering with smooth GSAP animations.",
  },
  {
    title: "Investor Ready",
    desc: "Designed to communicate value, traction, and momentum.",
  },
];

const FeatureCard = ()=>{
    return(
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-indigo-50 hover:bg-indigo-100 transition"
            >
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                {f.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
    )
}
export default FeatureCard