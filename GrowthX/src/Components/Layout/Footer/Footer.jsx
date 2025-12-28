import Logo from "../../UI/Logo";
import Copywrite from "./Copywrite";
import FooterLi from "./FooterLi";
import FooterLi2 from "./FooterLi2";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12">
            <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
                <div>
                    <Logo />
                    <p className="mt-4 text-sm">
                        Building growth-driven digital products for modern businesses.
                    </p>
                </div>
                < FooterLi />
                <FooterLi2 />
            </div>
            <Copywrite />
        </footer>
    );
}
export default Footer