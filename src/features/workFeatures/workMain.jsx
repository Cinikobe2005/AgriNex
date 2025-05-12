import React from 'react'

const WorkMain = () => {
  return (
    <main className=" bg-[url(/FarmerHoldingLaptop.png)] h-[636px] bg-cover backdrop-brightness-100 text-white py-4 px-3 md:px-[90px] xl:px-[100px]">
      <div className="w-11/12 mx-auto container flex flex-col md:justify-end md:items-baseline justify-center items-center md:text-left text-center gap-5 h-[636px] pb-20">
        <h1 className="w-full text-[25px] md:w-[80%] md:text-[48px] xl:w-[70%] xl:text-[56px] font-bold">
          Our Work
        </h1>
        <p className="md:text-[32px] text-[20px]">
          Empowering farmers, transforming agriculture, and building sustainable
          futures — because technology alone doesn’t change lives, people do.
          We’re here to support the hands that feed the world.
        </p>
      </div>
    </main>
  );
}

export default WorkMain