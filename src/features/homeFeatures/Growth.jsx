import React from "react";
import Button from "../../components/Button";
import greenTick from "../../assets/greenTick.svg";
import growthImg from "../../assets/Mask group.svg";

const Growth = () => {
  return (
    <main className="py-4 px-6 md:px-[90px] lg:px-[100px] bg-graylight">
      <div className="w-11/12 container mx-auto flex flex-col lg:flex-row-reverse items-center md:gap-[80px] gap-[0] justify-center my-10">
        <img
          src={growthImg}
          alt=""
          className="w-full md:w-[500px] md:h-[700] h-auto mb-10 lg:mb-0"
        />
        <div className="space-y-10 lg:w-1/2">
          <div>
            <h1 className="text-gray text-sm md:text-base mb-5 text-center lg:text-left">
              FUND YOUR GROWTH
            </h1>
            <p className="text-[24px] md:text-[30px] lg:text-[30px] font-bold text-center lg:text-left">
              Grow your Farm with Our Financial Support
            </p>
          </div>
          <div>
            <div className="flex  lg:flex-row  md:items-center md:justify-start gap-4 mb-5">
              <img src={greenTick} alt="" />
              <p className="text-[20px] md:text-[24px] lg:text-[24px]">
                Low-Interest Agri-Loans
              </p>
            </div>
            <div className="flex  md:flex-row   md:items-center md:justify-start gap-4 mb-5">
              <img src={greenTick} alt="" />
              <p className="text-[20px] md:text-[24px] lg:text-[24px]">
                Government Grant Assistance
              </p>
            </div>
            <div className="flex  md:flex-row  items-center md:items-center md:justify-start gap-4 mb-5">
              <img src={greenTick} alt="" />
              <p className="text-[20px] md:text-[24px] lg:text-[24px]">
                Equipment Leasing Options
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start">
            <Button className="bg-green text-white py-[12px] px-[16px] md:py-[16px] md:px-[20px]">
              Check Eligibility
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Growth;
