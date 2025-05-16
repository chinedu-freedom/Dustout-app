import React from "react";
import euro from "../assets/Icons/Euro.svg";
import checkBox from "../assets/Icons/checkBox.svg";
import Button from "./Button";

const CleanerCategory = ({ title = "BASIC CLEANING", price = "39" }) => {
  return (
    <div className="w-full text-center flex flex-col justify-center bg-[#176FD4] rounded-lg py-5 px-5">
      <h2 className="font-semibold text-lg text-center text-white">{title}</h2>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-3 my-1">
          <img src={euro} alt="Euro currency" />
          <h2 className="font-bold text-6xl text-white">{price}</h2>
          <p className="text-white font-bold text-3xl">.99</p>
        </div>
        <h3 className="text-center text-white font-semibold -ml-5">Monthly</h3>
      </div>

      <div className="flex flex-col gap-2 mt-2 text-left">
        <div className="flex items-center gap-2">
          <img src={checkBox} alt="Check box" />
          <p className="text-white font-semibold">Professional Cleaning</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={checkBox} alt="Check box" />
          <p className="text-white font-semibold">3 Bedrooms, 3 toilets</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={checkBox} alt="Check box" />
          <p className="text-white font-semibold">Rug and Carpet</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={checkBox} alt="Check box" />
          <p className="text-white font-semibold">Landscaping 200sqm</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={checkBox} alt="Check box" />
          <p className="text-white font-semibold">Mapping and Cleaning</p>
        </div>
      </div>

      <Button
        type="submit"
        className="bg-[#12B368] font-bold text-white py-3 w-full mt-5 rounded-lg"
      >
        Choose
      </Button>
    </div>
  );
};

export default CleanerCategory;
