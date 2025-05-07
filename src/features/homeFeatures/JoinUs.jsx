import React from "react";
import { useLocation } from "react-router-dom";
import SubscribeForm from "../../components/SubscribeForm";

const JoinUs = () => {
  const location = useLocation();

  // Determine the heading text based on the current route
  const getHeadingText = () => {
    switch (location.pathname) {
      case "/our-work":
        return "Patner with us or support the change.";

      default:
        return "Join the Agricultural Revolution Today!";
    }
  };

  return (
    <main className="py-4 px-1 md:px-[90px] lg:px-[100px] my-8">
      <div className="w-11/12 container mx-auto flex flex-col justify-center items-center gap-5 bg-[url(/joinUs.png)]  bg-cover bg-center text-white rounded-[32px] md:rounded-[52px] h-[300px] md:h-[424px]">
        <h1 className="text-[24px] md:text-[40px] font-bold w-full max-w-[90%] md:max-w-[631px] text-center">
          {getHeadingText()}
        </h1>
        <SubscribeForm />
      </div>
    </main>
  );
};

export default JoinUs;
