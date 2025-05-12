import React from "react";
import AboutMain from "../features/aboutFeatures/AboutMain";
import Testimonial from "../features/homeFeatures/Testimonal";
import Faqs from "../features/homeFeatures/Faqs";
import OurServices from "../features/aboutFeatures/OurServices";
import Smart from "../features/aboutFeatures/Smart";
import Inspirational from "../features/aboutFeatures/Inspirational";
import OurStory from "../features/aboutFeatures/OurStory";
import WhatWeOffer from "../features/aboutFeatures/WhatWeOffer";

const About = () => {
  return (
    <main className="">
      <AboutMain />
      <Smart />
      <OurServices />
      <OurStory />
      <WhatWeOffer />
      <Inspirational />
      <div className="bg-white">
        <Testimonial />
        <Faqs />
      </div>
    </main>
  );
};

export default About;
