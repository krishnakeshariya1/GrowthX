import Button from "../../UI/Button";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Heading1 from "./Heading1";
import Paragraph from "./paragraph";

const Hero = ()=> {
  const ref = useRef(null);

  useEffect(() => {
    gsap.from(ref.current.children, {
      y: 60,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-50 via-white to-pink-50"
    >
      <div
        ref={ref}
        className="text-center px-4 max-w-3xl"
      >
        < Heading1 />
        < Paragraph />
        <div className="mt-8 flex gap-4 justify-center">
          <Button>Get Started</Button>
          <Button variant="outline">View Demo</Button>
        </div>
      </div>
    </section>
  );
}
export default Hero