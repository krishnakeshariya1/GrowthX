import Button from "../UI/Button";
import Logo from "../UI/Logo";

const Navbar =()=> {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        < Logo />
        
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