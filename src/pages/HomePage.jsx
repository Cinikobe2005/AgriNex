import React from "react";
import AgriNex from "../assets/AgriNex.png";
import Button from "../components/Button";
import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";
import { Outlet, useMatch } from "react-router";
import HomeMain from "../features/homeFeatures/HomeMain";
import LogoMarque from "../features/homeFeatures/LogoMarque";
import WhatWeDo from "../features/homeFeatures/WhatWeDo";
import Benefits from "../features/homeFeatures/Benefits";
import Rating from "../features/homeFeatures/Rating";
import Impact from "../features/homeFeatures/Impact";
import Growth from "../features/homeFeatures/Growth";
import Resources from "../features/homeFeatures/Resources";
import Testimonal from "../features/homeFeatures/Testimonal";
import Faqs from "../features/homeFeatures/Faqs";
import JoinUs from "../features/homeFeatures/JoinUs";

const HomePage = () => {
  const match = useMatch("/");
  return (
    <div>
      <NavBar />
      {match ? (
        <main className="">
          <HomeMain />
          <LogoMarque />
          <WhatWeDo />
          <Benefits />
          <Rating />
          <Impact />
          <Growth />
          <Resources />
          <Testimonal />
          <Faqs />
          <JoinUs heading="Join the Agricultural Revolution Today!" />
        </main>
      ) : (
        <Outlet />
      )}
      <Footer />
    </div>
  );
};

export default HomePage;
