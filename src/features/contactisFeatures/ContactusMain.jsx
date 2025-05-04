import React from "react";

const ContactusMain = () => {
  return (
    <main className="bg-[url(/ContactUsImg.png)] bg-cover backdrop-brightness-100 text-white py-4 px-6 md:px-[90px] lg:px-[100px]">
      <div className="w-11/12 mx-auto container flex flex-col justify-end md:items-baseline items-baseline md:text-left text-center gap-5 h-screen pb-20">
        <h1 className="w-full text-[35px] md:w-[80%] md:text-[48px] lg:w-[70%] lg:text-[90px] font-bold">
          Contact Us
        </h1>
        <p className="text-[32px]">
          {" "}
          We’d love to hear from you! Whether you have questions about our
          services, need support, or just want to share your feedback — we’re
          here to help.
        </p>
      </div>
    </main>
  );
};

export default ContactusMain;
