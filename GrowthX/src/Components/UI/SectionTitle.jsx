const SectionTitle=({ title, subtitle })=> {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold bg-gradient-top-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-gray-500 max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle