import React from "react";
import { services } from "../../utils/DropDown";


const WhatWeDoMain = () => {
return (
<section className="py-4 px-1 md:px-[90px] lg:px-[100px] flex justify-center items-center">
        <div className="w-11/12 container mx-auto text-center">
            <div className="text-center mb-10 pt-8">
                <p className="text-gray-500 uppercase tracking-wide text-sm">
                    How we make it happen
                </p>
                <h2 className="text-3xl font-bold mt-2 mb-12">What We Do</h2>
            </div>
            <div className="grid md:grid-cols-3 items-center justify-center gap-12">
                {services?.map((service, index) => (
                    <div key={index} className="space-y-4">
                        <div className="text-4xl flex justify-center">
                            <img loading="lazy" src={service.icon} alt="" className="w-[50px]" />
                        </div>
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                        <p className="text-gray-500 max-w-xs mx-auto text-[20px]">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
};

export default WhatWeDoMain;