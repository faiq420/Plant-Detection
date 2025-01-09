import React, { useEffect, useRef } from "react";
import vision from "../../assets/action.jpg";
import HeadingTag from "../../components/HeadingTag";

const VisionSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const leftDivRef = useRef<HTMLDivElement | null>(null);
  const rightDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animations
            if (leftDivRef.current) {
              leftDivRef.current.classList.add(
                "md:animate-slideInFromLeft", // Add this animation only for medium and larger screens
                "md:opacity-100"
              );
              leftDivRef.current.classList.remove(
                "md:translate-x-[-100%]",
                "md:opacity-0"
              );
            }
            if (rightDivRef.current) {
              rightDivRef.current.classList.add(
                "md:animate-slideInFromRight", // Add this animation only for medium and larger screens
                "md:opacity-100"
              );
              rightDivRef.current.classList.remove(
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
    <section
      ref={sectionRef}
      id="vision"
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {/* Left Section */}
      <div
        ref={leftDivRef}
        className="opacity-100 translate-x-0 md:opacity-0 md:translate-x-[-100%] transition-transform duration-1000 ease-out"
      >
        <p className="text-gray-700 max-w-3xl mx-auto mb-6 text-sm">
          Food security is important for billions of people. To keep crops
          healthy, we need to manage plant health well. Spotting plant diseases
          quickly can help reduce damage and increase how much we grow. We've
          made new ways to find these diseases that can boost crop yields and
          cut down on harmful pesticides.
          <br />
          <br />
          While improving crop varieties is key, we also need to focus on
          disease detection. Old methods, like farmers checking plants by hand,
          can take a lot of time and money. Our app solves this problem. It
          automatically finds diseases on fruits, vegetables, and plant leaves.
          This offers a faster and easier way than traditional methods.
        </p>
      </div>
      {/* Right Section */}
      <div
        ref={rightDivRef}
        className="relative w-full h-auto rounded-xl opacity-100 translate-x-0 md:opacity-0 md:translate-x-[100%] transition-transform duration-1000 ease-out"
      >
        <img
          src={vision}
          alt="Vision"
          className="h-auto md:h-[90%] w-auto mt-8 rounded-xl object-cover"
        />
      </div>
    </section>
  );
};

export default VisionSection;
