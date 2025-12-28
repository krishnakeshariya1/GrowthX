import Button from "../../UI/Button";
import Logo from "../../UI/Logo";
import Lis from "./Lis";

const Navbar =()=> {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        < Logo />
        <Lis />
        <Button  variant="primary">Get started</ Button>
      </div>
    </nav>
  );
}
export default Navbar