import React from 'react';

const JoinUs = () => {
    return (
        <main className="py-13 px-6 md:px-10 text-center">
            <div className="flex flex-col justify-center items-center gap-5 bg-[url(src/assets/joinusImg.png)] bg-cover bg-center text-white rounded-[32px] md:rounded-[52px] w-full max-w-[1240px] h-[300px] md:h-[424px] mx-auto px-4 md:px-10 lg:px-20">
                <h1 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold w-full max-w-[90%] md:max-w-[631px]">
                    Join the Agricultural Revolution Today!
                </h1>
                <div className="flex flex-col  md:flex-row justify-center items-center gap-3 md:gap-0 w-full max-w-[90%] md:max-w-[631px]">
                    <input
                        type="email"
                        placeholder="Email address"
                        className="bg-white text-black outline-0 md:rounded-bl-[32px] md:rounded-tl-[32px]   px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 text-[16px] md:text-[20px] lg:text-[24px] w-full md:w-auto"
                    />
                    <button  className="bg-green text-white text-[16px] md:text-[20px] lg:text-[24px] px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-5   md:rounded-br-[32px] md:rounded-tr-[32px] w-full md:w-auto">
                        Subscribe
                    </button    >
                </div>
            </div>
        </main>
    );
};

export default JoinUs;