import React from "react";
import SubscribeForm from "../../components/SubscribeForm";

const JoinUs = () => {
  return (
    <main className="py-4 px-6 md:px-[90px] lg:px-[100px] my-8">
      <div className="w-11/12 container mx-auto flex flex-col justify-center items-center gap-5 bg-[url(/joinusImg.png)] bg-cover bg-center text-white rounded-[32px] md:rounded-[52px] h-[300px] md:h-[424px]">
        <h1 className="text-[24px] md:text-[40px] font-bold w-full max-w-[90%] md:max-w-[631px] text-center">
          Join the Agricultural Revolution Today!
        </h1>
        <SubscribeForm />
      </div>
    </main>
  );
};

export default JoinUs;