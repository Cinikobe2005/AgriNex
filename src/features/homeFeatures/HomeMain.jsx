import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router";

const HomeMain = () => {
  return (
    <main className=" bg-[url(/tractor.png)] h-[636px] bg-cover backdrop-brightness-100 text-white py-4 px-1 md:px-[90px] lg:px-[100px]">
      <div className="w-11/12 mx-auto container flex flex-col justify-center md:items-start items-center md:text-left text-center gap-5 h-[636px]">
        <h1 className="w-full text-[35px] md:w-[80%] md:text-[48px] lg:w-[65%] lg:text-[70px] font-bold">
          Utilization of Technology to Empower Farmers Across Africa Agriculture
        </h1>
        <Link to="/auth/signup">
          <Button className="bg-green text-white px-[20px] py-[12px] md:px-[25px] md:py-[14px] lg:px-[30px] lg:py-[16px] mt-2">
            Apply For Funding
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default HomeMain;
