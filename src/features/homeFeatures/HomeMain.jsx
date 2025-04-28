import React from "react";
import Button from "../../components/Button";

const HomeMain = () => {
  return (
    <main className="flex flex-col justify-center md:items-start items-center md:text-left text-center gap-5 h-screen bg-[url(public/tractor.png)] bg-cover backdrop-brightness-100 text-white py-4 px-6 md:px-10 lg:px-20">
      <div className="w-11/12 mx-auto container">

      <h1 className="w-full text-[32px] md:w-[80%] md:text-[48px] lg:w-[70%] lg:text-[56px] font-bold">
        Utilization of Technology to Empower Farmers Across Africa Agriculture
      </h1>
      <Button className="bg-green text-white px-[20px] py-[12px] md:px-[25px] md:py-[14px] lg:px-[30px] lg:py-[16px]">
        Apply For Funding
      </Button>
      </div>
    </main>
  );
};

export default HomeMain;
