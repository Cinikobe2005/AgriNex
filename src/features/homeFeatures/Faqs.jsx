import React from "react";
import { FaqsDetails } from "../../utils/DropDown";

const Faqs = () => {
  return (
    <main className="py-4 px-1 md:px-[90px] xl:px-[100px]">
      <div className="w-11/12 mx-auto container">
        <div className="py-10">
          <h1 className="text-center text-gray">NEED HELP?</h1>
          <p className="text-center text-[40px] font-bold ">FAQs</p>
        </div>
        <div className="w-full xl:w-auto">
          {FaqsDetails?.map((item, index) => {
            return (
              <div
                key={index}
                className="collapse collapse-arrow border-gray-100 border-b-2 rounded-b-none space-y-4 hover:text-green"
                defaultChecked={index === 0} // Set the first item as checked by default
              >
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-[20px] xl:text-[24px] m-0">
                  {item.title}
                </div>
                <div className="collapse-content  text-gray text-[16px] xl:text-[18px]">
                  {item.content}
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-center my-3 text-gray">
          If your question has not been answered, please send it to us at
          info@agrinex.com
        </p>
      </div>
    </main>
  );
};

export default Faqs;
