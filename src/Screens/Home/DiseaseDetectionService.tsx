import React, { useEffect, useRef, useState } from "react";
import pestedleave from "../../assets/PestedLeave.jpg";
import { Link } from "react-router-dom";
import SubHeadingTag from "../../components/SubHeadingTag";

const DiseaseDetectionService = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const textDivRef = useRef<HTMLDivElement | null>(null);
  const imageDivRef = useRef<HTMLDivElement | null>(null);

  const [animationEnded, setAnimationEnded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (imageDivRef.current) {
              imageDivRef.current.classList.add(
                "md:animate-slideInFromLeft",
                "md:opacity-100"
              );
              imageDivRef.current.classList.remove(
                "md:translate-x-[-100%]",
                "md:opacity-0"
              );
            }
            if (textDivRef.current) {
              textDivRef.current.classList.add(
                "md:animate-slideInFromRight",
                "md:opacity-100"
              );
              textDivRef.current.classList.remove(
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

  const handleAnimationEnd = () => {
    // Set state to mark animation end
    setAnimationEnded(true);
  };

  return (
    <div
      ref={sectionRef}
      className="md:flex justify-between md:flex-row-reverse flex-col gap-6 space-y-6 md:space-y-0"
    >
      {/* Text Content */}
      <div
        ref={textDivRef}
        className={`text-sm text-gray-700 max-w-3xl w-full md:w-[60%] flex items-end transition-all duration-1000 ease-out ${
          animationEnded
            ? "md:opacity-100 md:translate-x-0"
            : "md:opacity-0 md:translate-x-[100%]"
        } md:opacity-100 md:translate-x-0`} // Apply static visibility and position on mobile screens
        onAnimationEnd={handleAnimationEnd}
      >
        <p>
          <div className="block md:hidden">
            <SubHeadingTag heading="Disease Detection" />
          </div>
          Early identification of plant disease is important in safeguarding
          crop health and maximizing output. Our disease detection app
          investigates images of plant leaves to know the possible illnesses and
          the intensity of harm. Hence, making evidence-based inferences, and
          empowering users to take immediate remedial action rather than using
          indiscriminate pesticides and avoiding the usual crop losses.
          <br />
          <Link to={"/DetectDisease"} className="underline text-teal-900">
            Test
          </Link>
        </p>
      </div>

      {/* Image Content */}
      <div
        ref={imageDivRef}
        className={`relative w-full md:w-[40%] h-auto rounded-xl transition-all duration-1000 ease-out ${
          animationEnded
            ? "md:opacity-100 md:translate-x-0"
            : "md:opacity-0 md:translate-x-[-100%]"
        } md:opacity-100 md:translate-x-0`} // Apply static visibility and position on mobile screens
        onAnimationEnd={handleAnimationEnd}
      >
        <img
          src={pestedleave}
          alt="Pested Leave"
          className="h-auto w-full rounded-xl object-cover"
        />
        <div className="absolute hidden md:block inset-0 bg-gradient-to-r from-[#00000095] to-transparent rounded-xl"></div>
      </div>
    </div>
  );
};

export default DiseaseDetectionService;
