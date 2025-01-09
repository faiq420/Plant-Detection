import React from "react";
import SectionSeperator from "../../components/SectionSeperator";
import HeadingTag from "../../components/HeadingTag";
import VisionSection from "./VisionSection";
import PlantDetection from "./PlantDetectionService";
import DiseaseDetectionService from "./DiseaseDetectionService";
import Features from "./Features";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <div className="text-gray-800 font-raleway bg-[#fffefc] overflow-hidden">
      {/* <section className="p-8 text-center mainBg h-screen flex flex-col justify-center items-center relative overflow-hidden">
        <div className="fixed mx-auto w-screen">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to AgriVision!
          </h1>
          <p className="text-sm md:text-lg text-white">
            Revolutionize Your Garden: Smart Identification, Instant Diagnosis,
            Better Growth.
          </p>
        </div>
      </section> */}

      <HeroSection />

      <section id="features" className="p-8">
        <HeadingTag heading="Vision" />
        <VisionSection />
      </section>

      <SectionSeperator />

      <section id="features" className="p-8">
        <HeadingTag heading="Features" />
        <Features />
      </section>

      <SectionSeperator />

      <section id="services" className="p-8 md:px-[10%]">
        <HeadingTag heading="Services" />
        <div className="space-y-6">
          <PlantDetection />
          <DiseaseDetectionService />
        </div>
      </section>
    </div>
  );
};

export default Home;
