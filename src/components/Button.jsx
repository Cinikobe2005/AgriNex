import React from "react";

const Button = ({ children, className, onClick, type, size = "md", color }) => {
  const sizeMap = {
    sm: "px-[16px] py-[10px] text-sm",
    md: "px-4 py-2 text-md",
    xl: "px-[10px] py-[12px] w-100 ",
  };

  const sizeClass = sizeMap[size] || sizeMap.md;
  return (
    <button
      className={`${className} ${sizeClass} rounded-[56px]  font-manrope hover:bg-green-800 cursor-pointer transition duration-300 ease-in-out`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
