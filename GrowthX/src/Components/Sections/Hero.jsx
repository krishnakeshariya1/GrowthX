import Button from "../UI/Button";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

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
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Build Products That{" "}
          <span className=" bg-linear-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
            Scale Growth
          </span>
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          Data-driven UI systems crafted for
          performance, engagement, and investor
          confidence.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <Button>Get Started</Button>
          <Button variant="outline">View Demo</Button>
        </div>
      </div>
    </section>
  );
}
export default Hero