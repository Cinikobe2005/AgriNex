import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router";

const HomeMain = () => {
  return (
    <main className=" bg-[url(/tractorImage.png)] bg-cover backdrop-brightness-100 text-white py-4 px-6 md:px-[90px] xl:px-[100px]">
      <div className="w-11/12 mx-auto container flex flex-col justify-center md:items-start items-center md:text-left text-center gap-5 h-screen">
        <h1 className="w-full text-[35px] md:w-[80%] md:text-[48px] xl:w-[70%] xl:text-[56px] font-bold">
          Utilization of Technology to Empower Farmers Across Africa Agriculture
        </h1>
        <Button className="bg-green text-white px-[20px] py-[12px] md:px-[25px] md:py-[14px] xl:px-[30px] xl:py-[16px]">
          Apply For Funding
        </Button>
      </div>
    </main>
  );
};

export default HomeMain;
