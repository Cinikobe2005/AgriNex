import React from "react";
import farmerUsingRobotic from "../../assets/farmerUsingRobotic.png";
import blog from "../../assets/blog.png";

const Inspirational = () => {
return (
    <div className="w-11/12 mx-auto container text-center py-8">
        <h2 className="text-gray-400 text-[20px] mb-8 tracking-widest">
            INSPIRATIONAL
        </h2>

        <div className="flex flex-col xl:flex-row gap-10 w-full">
            {/* Mission */}
            <div className="rounded-2xl overflow-hidden bg-green-700 text-white flex flex-col h-auto md:h-[645px] w-full xl:w-[48%]">
                <div className="p-6 flex flex-col justify-center flex-grow">
                    <h3 className="text-2xl font-semibold w-full text-[24px] md:text-[43.65px] mb-4">
                        “Our Mission”
                    </h3>
                    <p className="text-base leading-relaxed text-[16px] md:text-[24.55px]">
                        Our mission is to make farming more efficient, profitable, and
                        environmentally friendly and revolutionize agriculture by
                        providing farmers with the tools, resources, and market access
                        they need to thrive in a digital world.
                    </p>
                </div>
                <img
                    src={farmerUsingRobotic}
                    alt="Mission"
                    className="w-full h-[150px] md:h-[50%] object-cover"
                />
            </div>

            {/* Vision */}
            <div className="rounded-2xl overflow-hidden bg-green-700 text-white flex flex-col h-auto md:h-[645px] w-full xl:w-[48%]">
                <div className="p-6 flex flex-col justify-center flex-grow">
                    <h3 className="text-2xl font-semibold w-full text-[24px] md:text-[43.65px] mb-4">
                        “Our Vision”
                    </h3>
                    <p className="text-base leading-relaxed text-[16px] md:text-[25px]">
                        We envision a future where agriculture is tech-driven,
                        sustainable, and accessible to everyone. By bridging between
                        technology and farming, we thrive to create a thriving
                        agricultural ecosystem.
                    </p>
                </div>
                <img
                    src={blog}
                    alt="Vision"
                    className="w-full h-[150px] md:h-[50%] object-cover"
                />
            </div>
        </div>
    </div>
);
};

export default Inspirational;
