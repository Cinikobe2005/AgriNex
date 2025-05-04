import React from 'react'


const AboutMain = () => {
  return (
    <main className=" bg-[url(/People.png)] bg-cover backdrop-brightness-100 text-white py-4 px-6 md:px-[90px] lg:px-[100px]">
      <div className="w-11/12 mx-auto container flex flex-col justify-end md:items-baseline items-baseline md:text-left text-center gap-5 h-screen pb-20">
        <h1 className="w-full text-[35px] md:w-[80%] md:text-[48px] lg:w-[70%] lg:text-[56px] font-bold">
          About Us
        </h1>
        <p className="md:text-[32px] text-[20px]">
          We blend technology with farming to create smart, sustainable
          solutions for modern agriculture. Our mission is to help farmers grow
          efficiently and impactfully.
        </p>
      </div>
    </main>
  );
}

export default AboutMain