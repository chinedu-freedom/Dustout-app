import React from "react";
import form from "../assets/Icons/form.svg";
const BookUsProcess = ({ image = form, text = "default text", className }) => {
  return (
    <>
      <div
        className={`flex items-center text-center md:text-start flex-col gap-5 md:gap-0 w-[80%] md:flex-row space-x-2 md:w-full bg-[#DBE7F8] rounded-xl md:rounded-2xl py-5 md:px-3 md:py-1 ${className}`}
      >
        <img src={image} alt={text} className="w-30 h-20" />
<h2 className="w-50 md:w-80 font-semibold text-[#171AD4] whitespace-normal">{text}</h2>
      </div>
    </>
  );
};

export default BookUsProcess;