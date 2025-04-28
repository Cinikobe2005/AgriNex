import React from "react";
import { TestimonalDetails } from "../../utils/DropDown";

const Testimonal = () => {
  return (
    <main className="md:p-20 p-6 my-[44px] flex flex-col gap-10">
      <div className="w-11/12 mx-auto container">

      <div className="text-center">
        <p className="text-gray">WHAT THEY SAY</p>
        <h1 className="md:text-[40px] text-[30px] font-bold">Testimonial</h1>
      </div>
      <div className="lg:flex justify-center items-center space-y-[10rem] lg:space-y-0 gap-[22rem] overflow-auto">
        {TestimonalDetails?.map((item, index) => {
          return (
            <div key={index} className="relative ">
              <img
                src={item.img}
                alt=""
                className=" lg:min-w-[300%] lg:max-w-[300%] "
              />
              <div className="rounded-lg p-4  border-1 border-gray-200 bg-white lg:w-[27rem] absolute top-[50%] m-auto lg:left-5 right-0">
                <h1 className="text-left text-[16px] font-bold mb-2">
                  {item.title}
                </h1>
                <p className="text-left mb-4 text-[13px] text-gray">
                  {item.content}
                </p>
                <div className="flex justify-between items-center gap-2">
                  <div className="flex items-center gap-2">
                    <img src={item.icon} alt="" />
                    <div>
                      <h1 className="text-[16px] font-bold">{item.name}</h1>
                      <p className="text-[13px]">{item.job}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <img src={item.start} alt="" />
                    <p className="text-[16px]">{item.rating}</p>
                  </div>
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

export default Testimonal;
