const StatCard =({ value, label })=> {
  return (
    <div className="bg-white/80 backdrop-blur p-6 rounded-2xl shadow hover:shadow-xl transition">
      <p className="text-4xl font-extrabold text-indigo-600">
        {value}
      </p>
      <p className="mt-2 text-gray-600">{label}</p>
    </div>
  );
}
export default StatCard