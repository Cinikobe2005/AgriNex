import React from "react";

const OurServices = () => {
return (
    <main className="bg-green">
        <div className="w-11/12 mx-auto container flex flex-col lg:flex-row text-white h-auto md:h-auto justify-between items-center py-6 gap-4">
            <div className="text-center md:text-left">
                <h1 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[70px] font-bold">
                    Our Services:
                </h1>
            </div>
            <div className="text-center lg:text-left">
                <p className="text-[14px] sm:text-[16px] md:text-[18px] w-full sm:w-[80%] md:w-[464px]">
                    At AgriNex, we connect farmers with technology to improve
                    productivity and market access. We offer: Smart Farm Tools,
                    Real-time Market Updates, Training & Support and Direct Linkage to
                    Buyers.
                </p>
            </div>
        </div>
    </main>
);
};

export default OurServices;
