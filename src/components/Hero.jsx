import React from "react";
import heroImage from "../assets/Images/heroImage.png";
import blueBar from "../assets/Images/blueBar.png";
import greenBar from "../assets/Images/greenBar.png";
import Button from "../Reuseables/Button";
import TrustedClients from "./TrustedClients";
const Hero = () => {
  return (
    <>
<div className="overflow-x-hidden justify-center gap-10 md:Items-start items-center flex flex-col md:flex-row text-center md:justify-evenly">
      <div className="flex flex-col px-10 justify-center md:w-[500px]  md:items-center">
          <h2 className="text-6xl font-bold text-[#12B368]">We Clean;</h2>
          <h2 className="text-5xl md:text-6xl font-bold text-[#171AD4]">
            So You Don't Have To
          </h2>
          <div className="  flex justify-center md:justify-start  space-x-3 mt-3">
            <Button
              type="button"
              className="bg-[#12B368] rounded-2xl text-white py-3.5 px-6 font-semibold"
            >
              Get Started
            </Button>
            <Button
              type="button"
              className="border-2 border-[#538FDF] text-[#12B368] px-8 rounded-2xl py-3 font-semibold"
            >
              Book US
            </Button>
          </div>
          <div className="hidden md:flex md:items-center md:justify-start w-[75%] mt-1"> 
          <TrustedClients />          </div> 
        </div>
        <img src={heroImage} alt="Hero image" className="h-100 w-100" />
      </div>
      <div className="relative w-full  overflow-x-hidden h-20 md:h-48  flex flex-col justify-center">
        <img
          src={greenBar}
          alt="Green Bar"
          className="w-full absolute top-4"
        />
        <img
          src={blueBar}
          alt="Blue Bar"
          className="absolute top-4 w-[calc(100%+200px)] transform scale-x-[1.01] md:translate-x-2"
        />
      </div>
    </>
  );
};

export default Hero;
