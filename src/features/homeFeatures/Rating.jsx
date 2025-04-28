import React from "react";

const Rating = () => {
return (
    <main className="bg-white border-b-1 border-gray-200 py-4 px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-2 gap-4 md:flex md:justify-between md:items-center w-11/12 mx-auto container">
            <div className="flex flex-col items-center">
                <h1 className="text-[24px] md:text-[40px] font-semibold text-blacklight">500k+</h1>
                <p className="text-[16px] md:text-[20px] text-gray">Reviews</p>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-[24px] md:text-[40px] font-semibold text-blacklight">300k+</h1>
                <p className="text-[16px] md:text-[20px] text-gray">Communities Served</p>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-[24px] md:text-[40px] font-semibold text-blacklight">125k+</h1>
                <p className="text-[16px] md:text-[20px] text-gray">Successful Claims</p>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-[24px] md:text-[40px] font-semibold text-blacklight">329k+</h1>
                <p className="text-[16px] md:text-[20px] text-gray">Satisfied customers</p>
            </div>
        </div>
    </main>
);
};

export default Rating;
