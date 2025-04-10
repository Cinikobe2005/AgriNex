import React from "react";
import NavBar from "../layout/NavBar";
import HeroSection from "./HeroSection";
import Footer from "../layout/Footer";
import LoginPage from "../pages/auth/LoginPage";
import SignUp from "../pages/auth/SignUp";

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
