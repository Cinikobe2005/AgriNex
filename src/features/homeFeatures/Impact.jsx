import React from "react";
import impactImg from "../../assets/impactImg.svg";
import { ImpactDetails } from "../../utils/DropDown";

const Impact = () => {
  return (
    <main className="mt-20 w-11/12 container mx-auto">
      <div className="text-center mb-10">
        <p className="text-gray">PROOF IN PROGRESS</p>
        <h1 className="md:text-[40px] text-[30px] font-bold">
          Our Impact in Numbers
        </h1>
      </div>
      <div className="py-4 px-6 md:px-10 lg:px-20  flex flex-col lg:flex-row space-y-10 justify-between items-center ">
        <img src={impactImg} alt="" className={` `} />
        <div className="w-full lg:w-auto grid lg:grid-cols-2 grid-cols-3 gap-10">
          {ImpactDetails?.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col lg:flex-row justify-start place-items-baseline gap-4"
              >
                <img src={item.img} alt="" className="mt-2" />
                <div className="flex flex-col w-1/2 lg:w-auto">
                  <div className="text-[20px] lg:text-[32px] m-0">
                    {item.title}
                  </div>
                  <div className="p-0 text-gray text-[15px] lg:text-[16px]">
                    {item.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Impact;
