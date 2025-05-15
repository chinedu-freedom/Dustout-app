import React from "react";
import modernImage from "../assets/Images/beatifulModernHouse.png";
import workerOnWhite from "../assets/Images/workerOnWhite.png";
import worker from "../assets/Images/worker.png";
import cleaningTools from "../assets/Images/cleaningTools.png";
import Qualities from "../Reuseables/Qualities";

const About = () => {
  return (
      <div className="space-y-10 md:space-y-0  gap-10 w-full items-center md:items-end mt-10 p-5 h-full  flex flex-col md:flex-row   justify-center">
        <div className="order-2 md:order-1 flex flex-col gap-2 justify-center">
          <div className="flex items-end  gap-2 justify-end">
            <div className=" flex flex-col h-full gap-2 justify-center items-center">
              <img
                src={modernImage}
                alt="Modern background image"
                className="w-52"
              />
              <img
                src={workerOnWhite}
                alt="Two workers on duty"
                className="w-52"
              />
            </div>
            <div>
              <img src={worker} alt="Single worker on duty" className="w-52" />
            </div>
          </div>
          <div className=" flex items-center justify-center  rounded-[18px] bg-[#538FDF]">
            <img src={cleaningTools} alt="Working tools" className="w-full" />
          </div>
        </div>
        <div className="order-1 md:order-2 md:w-[32%]">
          <div>
            <h4 className="text-4xl font-bold text-[#12B368] text-center  md:text-start">
              <span className="text-3xl md:text-2xl font-bold ">A</span>bout Us
            </h4>
            <h2 className="text-5xl md:text-4xl mt-2 mb-5  text-center  md:text-start md:mb-3 md:mt-0  font-bold text-[#538FDF] whitespace-normal md:whitespace-nowrap">
              Best Cleaning in The UK
            </h2>
            <div className=" flex flex-col">
            <div className="order-2 md:order-1">
              <p className="mb-4 text-sm text-[#777777]">
                At DustOut, we are the UK’s top cleaning agency, specializing in
                industrial cleaning, residential cleaning, fumigation, and
                landscaping.
              </p>
              <p className="text-sm text-[#777777]">
                Our expert team delivers reliable, eco-friendly services that
                meet the highest standards, transforming spaces with precision
                and care. Whether it’s deep cleaning, pest control, or outdoor
                makeovers, DustOut ensures cleaner, healthier, and more
                beautiful environments across the UK.
              </p>
            </div>
          <div className="grid grid-cols-2 gap-4 md:gap-2  mb-6 md:mb-0 mt-6 order-1 md:order-2">
            <Qualities title="Reliable" className="text-[#538FDF]" />
            <Qualities title="Fast" className="text-[#538FDF]" />
            <Qualities title="Thorough" className="text-[#538FDF]" />
            <Qualities title="Affordable" className="text-[#538FDF]" />
          </div>
          </div>
          </div>
        </div>
      </div>
  );
};

export default About;
