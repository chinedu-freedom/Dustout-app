import React from "react";
import Services from "../Reuseables/Services";
import residentialCleanining from "../assets/Icons/residentialCleaning.svg";
import landScaping from "../assets/Icons/landScaping.svg";
import industrialCleaning from "../assets/Icons/industrialCleaning.svg";
import fumigation from "../assets/Icons/fumigation.svg";
import refuseDisposal from "../assets/Icons/refuseDisposal.svg";
import deepCleaning from "../assets/Icons/deepCleaning.svg";

const OurServices = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-fit">
        <h2 className="text-[#538FDF] font-bold mb-8 text-center text-4xl">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
          <Services image={landScaping} title="Land Scaping" />
          <Services
            image={residentialCleanining}
            title="Residential Cleaning"
          />
          <Services image={industrialCleaning} title="Industrial Cleaning" />
          <Services image={fumigation} title="Fumigation" />
          <Services image={refuseDisposal} title="Refuse Disposal" />
          <Services image={deepCleaning} title="Deep Cleaning" />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
