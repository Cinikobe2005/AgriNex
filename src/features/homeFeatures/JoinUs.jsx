import React from 'react';

const JoinUs = () => {
    return (
        <main className="py-4 px-6 md:px-[90px] lg:px-[100px]  my-8">
            <div className="w-11/12 container mx-auto flex flex-col justify-center items-center gap-5 bg-[url(src/assets/joinusImg.png)] bg-cover bg-center text-white rounded-[32px] md:rounded-[52px]   h-[300px] md:h-[424px] ">
                <h1 className="text-[24px] md:text-[40px]  font-bold w-full max-w-[90%] md:max-w-[631px] text-center">
                    Join the Agricultural Revolution Today!
                </h1>
                <div className="flex flex-col  md:flex-row justify-center items-center gap-3 md:gap-0 w-full max-w-[90%] md:max-w-[631px]">
                    <input
                        type="email"
                        placeholder="Email address"
                        className="bg-white text-black outline-0 md:rounded-bl-[32px] md:rounded-tl-[32px]   px-4 py-3 md:px-6 md:py-4  text-[16px] md:text-[20px] w-full md:w-auto"
                    />
                    <button  className="bg-green text-white text-[16px] md:text-[20px]  px-4 py-3 md:px-6 md:py-4    md:rounded-br-[32px] md:rounded-tr-[32px] w-full md:w-auto cursor-pointer hover:bg-green-800 transition duration-300 ease-in-out">
                        Subscribe
                    </button    >
                </div>
            </div>
        </main>
    );
};

export default JoinUs;