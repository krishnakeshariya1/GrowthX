const reasons = [
  {
    title: "Business First",
    desc: "We design UI to drive decisions, not just look pretty.",
  },
  {
    title: "Engineering Mindset",
    desc: "Clean architecture, reusable components, scalable code.",
  },
  {
    title: "Conversion Focused",
    desc: "Animations and layouts crafted to increase engagement.",
  },
];
const WhyUsCard =()=>{
    return(
        <>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold text-indigo-600 mb-3">
                {r.title}
              </h3>
              <p className="text-gray-600">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
        </>
    )
}
export default WhyUsCard