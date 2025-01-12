import React, { useEffect, useRef } from "react";

const Features: React.FC = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const leftDivRef = useRef<HTMLDivElement | null>(null);
  const centerDivRef = useRef<HTMLDivElement | null>(null);
  const rightDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (leftDivRef.current) {
              leftDivRef.current.classList.add(
                "md:animate-slideInFromLeft",
                "md:opacity-100"
              );
              leftDivRef.current.classList.remove(
                "md:translate-x-[-100%]",
                "md:opacity-0"
              );
            }
            if (centerDivRef.current) {
              centerDivRef.current.classList.add(
                "md:animate-popIn",
                "md:opacity-100"
              );
              centerDivRef.current.classList.remove("md:scale-0", "md:opacity-0");
            }
            if (rightDivRef.current) {
              rightDivRef.current.classList.add(
                "md:animate-slideInFromRight",
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

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      <div
        ref={leftDivRef}
        className="p-4 lg:mt-4 mt-3 rounded-lg shadow-lg text-center md:opacity-0 md:translate-x-[-100%] transition-transform duration-1000 ease-out"
      >
        <div className="">
          <div className="about-icon mb-md-4 mb-3">
            <i className="fa fa-viadeo text-4xl text-green-900"></i>
          </div>
          <div className="">
            <p className="pb-3 text-sm">Easy Detection</p>
            <p className="text-xs">Just need to click and upload image.</p>
          </div>
        </div>
      </div>
      <div
        ref={centerDivRef}
        className="p-4 lg:mt-4 mt-3 rounded-lg shadow-lg text-center md:opacity-0 md:scale-0 transition-transform duration-500 ease-out"
      >
        <div className="ser-Agriculture-grid">
          <div className="about-icon mb-md-4 mb-3">
            <i
              className="fa fa-pagelines text-4xl text-green-900"
              aria-hidden="true"
            ></i>
          </div>
          <div className="">
            <p className="pb-3 text-sm">Cause and Solution</p>
            <p className="text-xs">
              Provides the cause and solution of the identified diseases.
            </p>
          </div>
        </div>
      </div>
      <div
        ref={rightDivRef}
        className="p-4 lg:mt-4 mt-3 rounded-lg shadow-lg text-center md:opacity-0 md:translate-x-[100%] transition-transform duration-1000 ease-out"
      >
        <div className="ser-Agriculture-grid">
          <div className="about-icon mb-md-4 mb-3">
            <i
              className="fa fa-leaf text-4xl text-green-900"
              aria-hidden="true"
            ></i>
          </div>
          <div className="">
            <p className="pb-3 text-sm">Large Plant Support</p>
            <p className="text-xs">
              Supports around 14 different types of plants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
