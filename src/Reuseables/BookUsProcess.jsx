import React from "react";
import form from "../assets/Icons/form.svg";
const BookUsProcess = ({ image = form, text = "default text", className }) => {
  return (
    <>
      <div
        className={`flex items-center space-x-2 w-full bg-[#DBE7F8] rounded-xl px-2 py-1 ${className}`}
      >
        <img src={image} alt={text} className="w-20 h-20" />
        <h2 className="w-75 font-semibold text-[#171AD4]">{text}</h2>
      </div>
    </>
  );
};

export default BookUsProcess;
