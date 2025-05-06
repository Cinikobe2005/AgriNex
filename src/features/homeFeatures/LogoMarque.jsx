import React from "react";
import logo1 from "../../assets/logo1.svg";
import logo2 from "../../assets/logo2.svg";
import logo3 from "../../assets/logo3.svg";
import logo4 from "../../assets/logo4.svg";

const LogoMarque = () => {
  return (
    <marquee className=" bg-white border-b-1 border-gray-200 py-6">
      <div className="flex justify-center items-center gap-[111px]">
        <img loading="lazy" src={logo1} alt="" />
        <img loading="lazy" src={logo2} alt="" />
        <img loading="lazy" src={logo3} alt="" />
        <img loading="lazy" src={logo4} alt="" />
      </div>
    </marquee>
  );
};

export default LogoMarque;
