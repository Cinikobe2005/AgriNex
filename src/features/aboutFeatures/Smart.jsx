import React from "react";
import agriculturalProducts from "../../assets/agriculturalProducts.png";
import trustByClients from "../../assets/trustByClients.png";

const Smart = () => {
return (
    <main className="bg-white">
        <div className="w-11/12 mx-auto container flex flex-col md:flex-row justify-between py-5 md:py-15 gap-10">
            <div className="text-center md:text-left">
                <p className="md:w-[90%] lg:w-[464px] mx-auto md:mx-0 text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed">
                    <strong className="text-green">AgriNex</strong> is a smart
                    agriculture platform designed to connect farmers, agribusinesses,
                    and consumers through innovative digital solutions. We leverage
                    technology to enhance productivity, market access, and
                    sustainability in the agricultural sector.
                </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 md:gap-12 lg:gap-60 text-center">
                <div>
                    <img
                        loading="lazy"
                        src={agriculturalProducts}
                        alt="Agricultural Products"
                        className="mx-auto"
                    />
                    <p className="text-[20px] md:text-[24px] lg:text-[40px]">1,500k+</p>
                    <p className="text-[12px] md:text-[14px] lg:text-[22px] text-gray-500">
                        Agricultural products
                    </p>
                </div>
                <div>
                    <img
                        loading="lazy"
                        src={trustByClients}
                        alt="Trust by Clients"
                        className="mx-auto"
                    />
                    <p className="text-[20px] md:text-[24px] lg:text-[40px]">300k+</p>
                    <p className="text-[12px] md:text-[14px] lg:text-[22px] text-gray-500">
                        Trust by clients
                    </p>
                </div>
            </div>
        </div>
    </main>
);
};

export default Smart;
