import React, { useState } from "react";
import howItWorksImg from "../../assets/howItWorkImg.svg";
import { WeDo } from "../../utils/DropDown";

const WhatWeDo = () => {
    const [selectedItem, setSelectedItem] = useState(null); // Track the selected item

    return (
        <main className="mt-20">
            <div className="text-center">
                <p className="text-gray">WHAT WE DO </p>
                <h1 className="md:text-[40px] text-[30px] font-bold">How AgriNex Works</h1>
            </div>
            <div className="py-4 px-6 md:px-10 lg:px-20 flex flex-col lg:flex-row justify-center items-center gap-10">
                <img
                    src={selectedItem?.img || howItWorksImg} // Show the selected item's image or the default image
                    alt=""
                    className={`rounded-[18px] w-full max-w-[675px] h-auto lg:w-[675px] lg:h-[632px] ${
                        selectedItem ? " transition-opacity duration-500 " : ""
                    }`}
                />
                <div className="w-full lg:w-auto">
                    {WeDo?.map((item)=>(
                            <div
                                key={item.id}
                                className="collapse collapse-arrow border-gray-100 border-b-2 rounded-b-none space-y-4 hover:text-green"
                            >
                                <input
                                    type="radio"
                                    name="my-accordion-2"
                                    onClick={() => setSelectedItem(item)} // Update the selected item on click
                                />
                                <div className="collapse-title text-[24px] lg:text-[32px] m-0">
                                    {item.title}
                                </div>
                                <div className="collapse-content p-0 text-gray text-[16px] lg:text-[20px]">
                                    {item.content}
                                </div>
                            </div>
                        )
                    )}
                </div>
                
            </div>
        </main>
    );
};

export default WhatWeDo;
