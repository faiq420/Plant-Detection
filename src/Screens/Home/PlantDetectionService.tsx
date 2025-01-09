import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import fruitsAndVeggies from "../../assets/fruitsandvegies.avif";
import SubHeadingTag from "../../components/SubHeadingTag";

const PlantDetection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const textDivRef = useRef<HTMLDivElement | null>(null);
  const imageDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (textDivRef.current) {
              textDivRef.current.classList.add(
                "md:animate-slideInFromLeft",
                "md:opacity-100"
              );
              textDivRef.current.classList.remove(
                "md:translate-x-[-100%]",
                "md:opacity-0"
              );
            }
            if (imageDivRef.current) {
              imageDivRef.current.classList.add(
                "md:animate-slideInFromRight",
                "md:opacity-100"
              );
              imageDivRef.current.classList.remove(
                "md:translate-x-[100%]",
                "md:opacity-0"
              );
            }
          }
        });
      },
      { threshold: 0.2 }
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
    <div
      ref={sectionRef}
      className="md:flex justify-between flex-row-reverse md:flex-row gap-6 space-y-6 md:space-y-0"
    >
      <div
        ref={textDivRef}
        className="text-sm text-gray-700 max-w-3xl w-full md:w-[60%] opacity-100 md:opacity-0 md:translate-x-[-100%] transition-transform duration-1000 ease-out"
      >
        <div className="block md:hidden">
          <SubHeadingTag heading="Fruits & Veggies Identification" />
        </div>
        The advanced vegetation identification system enables the user to
        identify numerous fruits and vegetables with perfect accuracy. The
        system is integrated with machine-learning algorithms that analyze image
        patterns available in the forms of plants, fruits, or vegetables to
        provide very accurate identification in real time. This smart feature
        will help farmers, researchers, and gardening enthusiasts in recognizing
        plants right within their farm and finally deciding their crops and
        produce.
        <br />
        <Link to="/IdentifyPlant" className="underline text-teal-900">
          Test
        </Link>
      </div>
      <div
        ref={imageDivRef}
        className="relative w-full md:w-[40%] h-auto rounded-xl opacity-100 md:opacity-0 md:translate-x-[100%] transition-transform duration-1000 ease-out"
      >
        <img
          src={fruitsAndVeggies}
          alt="Fruits and Vegetables"
          className="h-auto w-full rounded-xl"
        />
        <div className="absolute hidden md:block inset-0 bg-gradient-to-r from-transparent to-[#00000095] rounded-xl"></div>
      </div>
    </div>
  );
};

export default PlantDetection;
