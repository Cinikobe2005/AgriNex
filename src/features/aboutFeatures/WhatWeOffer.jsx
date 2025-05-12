import React from "react";
import { offer } from "../../utils/DropDown";

const WhatWeOffer = () => {
  return (


    <main className="py-4 px-1 md:px-[90px] lg:px-[100px]">
      <div className="w-11/12 mx-auto container">
        <div className="text-center py-10">
          <p className="text-gray">AGRICULTURE-FOCUSED</p>
          <h1 className="md:text-[40px] text-[30px] font-bold">
            What We Offer
          </h1>
        </div>
        <div className="carousel carousel-center   rounded-box max-w-full py-4 space-x-10 px-5">
          {offer?.map((item) => {
            return (
              <div
                className="carousel-item space-y-5 flex-col rounded-2xl outline-green outline-2 items-center justify-center p-3 w-full sm:w-[300px] md:w-[367px] h-auto"
                key={item.id}
              >
                <img src={item.img} alt="" className="w-10 mx-auto" />
                <h1 className="font-bold text-center text-[16px] sm:text-[18px] md:text-[20px]">
                  {item.title}
                </h1>
                <p className="text-center mx-auto text-[14px] sm:text-[16px] md:text-[18px] font-semibold">
                  {item.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default WhatWeOffer;
