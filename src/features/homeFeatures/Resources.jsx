import React from "react";
import { ResourcesDetails } from "../../utils/DropDown";
import Button from "../../components/Button";

const Resources = () => {
  return (
    <main className="py-4 px-6 md:px-[90px] lg:px-[100px]">
      <div className="w-11/12 mx-auto container">
        <div className="text-center">
          <p className="text-gray">GROW SMARTER</p>
          <h1 className="md:text-[40px] text-[30px] font-bold">
            Our Resources
          </h1>
        </div>
        <div className="flex gap-5 rounded-lg overflow-auto">
          {ResourcesDetails?.map((item, index) => {
            return (
              <div
                key={index}
                className="rounded-lg border-1 border-gray-200 w-[100%]"
              >
                <div className="w-80">
                  <img
                    src={item.img}
                    alt=""
                    className="rounded-tr-lg rounded-tl-lg mb-4"
                  />
                  <div className="px-2 pb-4">
                    <h1 className="text-left text-[16px] font-bold mb-2">
                      {item.title}
                    </h1>
                    <p className="text-left mb-4 text-[16px] text-gray">
                      {item.content}
                    </p>
                    <Button className="text-yellow-500 border-1 text-[16px] border-yellow-500 text-left px-[30px] py-[12px]">
                      Details
                    </Button>
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

export default Resources;
