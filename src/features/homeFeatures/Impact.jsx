import React from "react";
import impactImg from "../../assets/impactImg.svg";
import { ImpactDetails } from "../../utils/DropDown";

const Impact = () => {
  return (
    <main className="mt-20 py-4 px-1 md:px-[90px] xl:px-[100px]  ">
      <div className="w-11/12 container mx-auto ">
        <div className="text-center py-10">
          <p className="text-gray">PROOF IN PROGRESS</p>
          <h1 className="md:text-[40px] text-[30px] font-bold">
            Our Impact in Numbers
          </h1>
        </div>
        <div className=" flex flex-col xl:flex-row space-y-10 md:gap-[80px] justify-center items-center ">
          <img loading="lazy" src={impactImg} alt="" className={` `} />
          <div className=" grid  grid-cols-2 gap-10">
            {ImpactDetails?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col xl:flex-row justify-start place-items-baseline gap-4"
                >
                  <img loading="lazy" src={item.img} alt="" className="mt-2" />
                  <div className="flex flex-col  ">
                    <div className="text-[20px] xl:text-[30px] m-0">
                      {item.title}
                    </div>
                    <div className="p-0 text-gray text-[15px] xl:text-[16px]">
                      {item.content}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Impact;
