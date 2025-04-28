import React from "react";
import { BenefitsDetails } from "../../utils/DropDown";
import BenefitsImg from "../../assets/benefitsImg.svg";
import greenTick from "../../assets/greenTick.svg";

const Benefits = () => {
    return (
        <main className="mt-20 py-13 px-6 md:px-10 lg:px-20 bg-graylight">
            <div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-10">
                <img
                    src={BenefitsImg}
                    alt=""
                    className="w-full lg:w-auto max-w-[400px] lg:max-w-none"
                />
                <div className="flex flex-col gap-[40px] lg:w-[50%] w-full">
                    <div className="text-left">
                        <p className="text-gray text-sm md:text-base">BENEFITS</p>
                        <h1 className="text-[24px] md:text-[30px] lg:text-[40px] font-bold">
                            What Makes Us Different
                        </h1>
                    </div>
                    <div>
                        {BenefitsDetails?.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col md:flex-row justify-left items-start md:items-center gap-4 mb-10"
                                >
                                    <img
                                        src={greenTick}
                                        alt=""
                                        className="w-6 h-6 md:w-auto md:h-auto"
                                    />
                                    <div className="flex flex-col space-y-[10px]">
                                        <h1 className="font-semibold text-[20px] md:text-[25px]">
                                            {item.title}
                                        </h1>
                                        <p className="text-[16px] md:text-[18px]">{item.content}</p>
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

export default Benefits;
