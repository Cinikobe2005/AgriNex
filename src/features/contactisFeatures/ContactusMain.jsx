import React from "react";

const ContactusMain = () => {
  return (
    <main className=" bg-[url(/ContactUsImg.png)] h-[636px] bg-cover backdrop-brightness-100 text-white py-4 px-3 md:px-[90px] xl:px-[100px]">
      <div className="w-11/12 mx-auto container flex flex-col md:justify-end md:items-baseline justify-center items-center md:text-left text-center gap-5 h-[636px] pb-20">
        <h1 className="w-full text-[25px] md:w-[80%] md:text-[48px] xl:w-[70%] xl:text-[56px] font-bold">
          Contact Us
        </h1>
        <p className="md:text-[32px] text-[20px]">
          We’d love to hear from you! Whether you have questions about our 
          services, need support, or just want to share your feedback — we’re 
          here to help.
        </p>
      </div>
    </main>
  );
};

export default ContactusMain;
