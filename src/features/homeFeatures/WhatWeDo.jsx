import React, { useState } from "react";
import howItWorksImg from "../../assets/howItWorkImg.svg";
import { WeDo } from "../../utils/DropDown";

const WhatWeDo = () => {
    const [selectedItem, setSelectedItem] = useState(null); // Track the selected item

    return (
        <main className="mt-20 py-4 px-1 md:px-[90px] xl:px-[100px]">
            <div className="w-11/12 container mx-auto">

            <div className="text-center py-10">
                <p className="text-gray">WHAT WE DO </p>
                <h1 className="md:text-[40px] text-[30px] font-bold">How AgriNex Works</h1>
            </div>
            <div className="flex flex-col xl:flex-row justify-center items-center gap-[80px]">
                <img
                    src={selectedItem?.img || howItWorksImg} // Show the selected item's image or the default image
                    alt=""
                    className={`rounded-[18px] w-full max-w-[550px] h-auto xl:w-[550px] xl:h-[520px] ${
                        selectedItem ? " transition-opacity duration-500 " : ""
                    }`}
                />
                <div className="w-full xl:w-auto">
                    {WeDo?.map((item)=>(
                            <div
                                key={item.id}
                                className="collapse collapse-arrow border-gray-100 border-b-2 rounded-b-none space-y-6 hover:text-green"
                            >
                                <input
                                    type="radio"
                                    name="my-accordion-2"
                                    onClick={() => setSelectedItem(item)} // Update the selected item on click
                                />
                                <div className="collapse-title text-[24px] xl:text-[25px] m-0">
                                    {item.title}
                                </div>
                                <div className="collapse-content  text-gray text-[16px] xl:text-[20px]">
                                    {item.content}
                                </div>
                            </div>
                        )
                    )}
                </div>
                
            </div>
            </div>
        </main>
    );
};

export default WhatWeDo;
