import React, { useState, useEffect, useRef } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { root: null, threshold: 0.68 } // Trigger when at least 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="p-8 text-center mainBg h-screen flex flex-col justify-center items-center relative overflow-hidden"
    >
      <div
        className={`fixed mx-auto w-screen ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to AgriVision!
        </h1>
        <p className="text-sm md:text-lg text-white">
          Revolutionize Your Garden: Smart Identification, Instant Diagnosis,
          Better Growth.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
