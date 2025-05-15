import React from "react";

const Button = ({ children, className = "", type = "button", ...props }) => {
  return (
    <button
      type={type}
      className={`flex justify-center items-center px-4 py-2 cursor-pointer transition duration-300 hover:scale-105 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
