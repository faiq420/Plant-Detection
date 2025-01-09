import React from "react";
import SectionSeperator from "../../components/SectionSeperator";
import HeadingTag from "../../components/HeadingTag";
import VisionSection from "./VisionSection";
import PlantDetection from "./PlantDetectionService";
import DiseaseDetectionService from "./DiseaseDetectionService";
import Features from "./Features";

const Home = () => {
  return (
    <div className="text-gray-800 font-raleway bg-[#fffefc] overflow-hidden">
      <section className="p-8 text-center mainBg h-screen flex flex-col justify-center ">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to AgriVision!
        </h1>
        <p className="text-sm md:text-lg text-white mb-8">
          Revolutionize Your Garden: Smart Identification, Instant Diagnosis,
          Better Growth.
        </p>
      </section>

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
