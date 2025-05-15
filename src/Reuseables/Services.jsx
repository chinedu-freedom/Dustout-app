import React from "react";
import landScaping from "../assets/Icons/landScaping.svg";

const Services = ({ image = landScaping, title = "Default title" }) => {
  return (
    <div className="bg-[#538FDF] text-center w-fit p-2 rounded-2xl">
      <div className="flex flex-col justify-center gap-2 items-center border-white border-dashed rounded-lg  border-2 w-50 h-45 p-2 ">
        <img src={image} alt={title} className="w-20 h-20" />
        <h2 className="w-40 text-xl font-bold text-white">{title}</h2>
      </div>
    </div>
  );
};

export default Services;
