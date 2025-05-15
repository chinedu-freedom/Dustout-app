import React from "react";
import modernImage from "../assets/Images/beatifulModernHouse.png";
import workerOnWhite from "../assets/Images/workerOnWhite.png";
import worker from "../assets/Images/worker.png";
import workingTools1 from "../assets/Images/workingTools1.png";
import Qualities from "../Reuseables/Qualities";

const About = () => {
  return (
    <>
      <div className="gap-10 w-full items-center mt-10 p-5 h-full text-center flex flex-col md:flex-row md:items-center  justify-center">
        <div className=" flex flex-col gap-2 justify-center items-center w-full">
          <div className="flex gap-2 items-center justify-center">
            <div className="flex flex-col justify-center items-center gap-2">
              <img
                src={modernImage}
                alt="Modern background image"
                className="w-50"
              />
              <img
                src={workerOnWhite}
                alt="Two workers on duty"
                className="w-50"
              />
            </div>
            <div>
              <img
                src={worker}
                alt="Single worker on duty"
                className="h-full w-50"
              />
            </div>
          </div>
          <div className="flex items-center justify-center bg-[#538FDF] w-fit rounded-2xl">
            <img
              src={workingTools1}
              alt="Working tools"
              className="transform scale-x-[-1] w-48 md:50"
            />
            <img src={workingTools1} alt="Working tools" className="w-48 md:50" />
          </div>
        </div>
        <div className=" w-full md:w-1/2 p-12">
          <div>
            <h4 className="text-3xl font-bold text-[#12B368]">
              <span className="text-2xl font-bold ">A</span>bout Us
            </h4>
            <h2 className="text-lg md:text-3xl text-center font-bold space-x-4 text-[#538FDF] mb-3">
              <span>Best</span>
              <span>Cleaning</span>
              <span>in</span>
              <span>The</span>
              <span>UK</span>
            </h2>
            <div>
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
          </div>
          <div className="grid grid-cols-2 gap-2 mt-6">
            <Qualities title="Reliable" className="text-[#538FDF]" />
            <Qualities title="Fast" className="text-[#538FDF]" />
            <Qualities title="Thorough" className="text-[#538FDF]" />
            <Qualities title="Affordable" className="text-[#538FDF]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
