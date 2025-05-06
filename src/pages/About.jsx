import React from "react";
import AboutMain from "../features/aboutFeatures/AboutMain";
import Testimonial from "../features/homeFeatures/Testimonal";
import Faqs from "../features/homeFeatures/Faqs";

const About = () => {
  return (
    <main className="">
      <AboutMain />
      <div className="bg-graylight">
        <Testimonial />
        <Faqs />
      </div>
    </main>
  );
};

export default About;
