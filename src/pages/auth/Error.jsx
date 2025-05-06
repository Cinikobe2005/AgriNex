import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="flex flex-col justify-between items-center text-center">
        {/* Error Code */}
        <span className="text-green-600 font-extrabold text-[120px] md:text-[200px] lg:text-[400px]">
          404
        </span>

        {/* Error Messages */}
        <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold mt-4">
          Ooops!
        </h2>
        <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold mt-2">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-[16px] md:text-[20px] lg:text-[24px] font-light mt-5 max-w-lg">
          This page doesn’t exist or has been removed. We suggest you go back.
        </p>

        {/* Go Back Button */}
        <Link to="/" className="flex justify-center items-center">
          <button className="bg-green-600 text-white px-6 py-3 rounded-full mt-5 font-bold text-sm md:text-base lg:text-lg">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
