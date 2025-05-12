import React from 'react'
import WomanHoldingCorn from '../../assets/WomanHoldingCorn.png'
import manHoldingPepper from '../../assets/manHoldingPepper.png'
import womanAtFarm from '../../assets/womanAtFarm.png'
import tomatoes from '../../assets/tomatoes.png'

const OurStory = () => {
return (
    <main className="bg-white">
        <div className="w-11/12 mx-auto container flex flex-col mt-10 mb-10">
            <div className="flex flex-col lg:flex-row justify-between w-full">
                <div className="mb-6 lg:mb-0">
                    <h2 className="text-gray-400 text-[16px] sm:text-[18px] lg:text-[20px]">
                        AGRICULTURE-THEMED
                    </h2>
                    <h1 className="text-[24px] sm:text-[28px] lg:text-[40px] font-bold">
                        Our Story
                    </h1>
                    <h1 className="text-[24px] sm:text-[28px] lg:text-[40px] font-bold lg:w-[588px]">
                        Innovation, Sustainability, Transparency & Empowerment
                    </h1>
                </div>
                <div>
                    <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-semibold lg:w-[464px]">
                        AgriNex was born from a simple yet powerful idea: to bridge the
                        gap between farmers and technology. We, inspired by the struggles
                        of small and large-scale farmers, saw the challenges of
                        unpredictable weather, limited market access, and outdated farming
                        practices. We knew the technology could be the key to transforming
                        agriculture.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-10 w-full">
                <img src={WomanHoldingCorn} alt="Woman Holding Corn" className="w-full h-auto object-cover" />
                <img src={manHoldingPepper} alt="Man Holding Pepper" className="w-full h-auto object-cover" />
                <img src={womanAtFarm} alt="Woman at Farm" className="w-full h-auto object-cover" />
                <img src={tomatoes} alt="Tomatoes" className="w-full h-auto object-cover" />
                <img src={WomanHoldingCorn} alt="Woman Holding Corn" className="w-full h-auto object-cover" />
            </div>
        </div>
    </main>
);
}

export default OurStory