import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import LoginPage from "./LoginPage";
import SignUp from "./SignUp";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <LoginPage />
      <SignUp />
      <Footer />
    </div>
  );
};

export default Layout;
