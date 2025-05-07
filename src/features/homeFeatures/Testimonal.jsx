import React from "react";
import { TestimonalDetails } from "../../utils/DropDown";

const Testimonal = () => {
  return (
    <main className="py-4 px-1 md:px-[90px] lg:px-[100px]">
      <div className="w-11/12 mx-auto container">
        <div className="text-center py-10">
          <p className="text-gray">WHAT THEY SAY</p>
          <h1 className="md:text-[40px] text-[30px] font-bold">Testimonial</h1>
        </div>
          <div className="carousel carousel-center   rounded-box max-w-full space-x-4">
            {TestimonalDetails?.map((item) => {
              return (
                  <div className="carousel-item rounded-lg p-6  border border-gray-200 bg-white md:w-[400px] w-[300px] flex-col " key={item.id}>
                    <h1 className="text-left text-[18px] font-bold mb-4">
                      {item.title}
                    </h1>
                    <p className="text-left mb-6 text-[14px] text-gray-600">
                      {item.content}
                    </p>
                    <div className="flex justify-between items-center gap-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={item.icon}
                          alt=""
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h1 className="text-[16px] font-bold">{item.name}</h1>
                          <p className="text-[14px] text-gray-500">{item.job}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <img loading="lazy" src={item.start} alt="" className="w-5 h-5" />
                        <p className="text-[16px] font-semibold">{item.rating}</p>
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
