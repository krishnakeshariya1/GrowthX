const Button =({ children, variant = "primary" })=> {
  const base = "px-6 py-3 rounded-lg font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer",
    secondary:
      "bg-pink-500 text-white hover:bg-pink-600",
    outline:
      "border border-indigo-600 text-indigo-600 hover:bg-indigo-50",
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}
export default Button