import Button from "../UI/Button";

const Navbar =()=> {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-extrabold bg-linear-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
          GrowthX
        </div>

        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a href="#home" className="hover:text-indigo-600">Home</a>
          <a href="#features" className="hover:text-indigo-600">Features</a>
          <a href="#whyus" className="hover:text-indigo-600">Why Us</a>
          <a href="#growth" className="hover:text-indigo-600">Growth</a>
        </div>
        <Button  variant="primary">Get started</ Button>
      </div>
    </nav>
  );
}
export default Navbar