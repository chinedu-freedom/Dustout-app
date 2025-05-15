import React from "react";
import exceptionalExpertise from "../assets/Icons/exceptionalExpertise.svg";
import ecoFriendly from "../assets/Icons/ecoFriendly.svg";
import customerCare1 from "../assets/Icons/customerCare1.svg";
import customerCare2 from "../assets/Icons/customerCare2.svg";
import customerCare3 from "../assets/Icons/customerCare3.svg";
import exquisiteHome from "../assets/Icons/exquisiteHome.svg";
import ChooseUs from "../Reuseables/ChooseUS";
import ChooseUs2 from "../Reuseables/ChooseUS2";

const WhyChooseUs = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center order-2 md:order-1 mt-20 md:mt-0">
        <h2 className="text-4xl font-bold text-center mb-10 text-[#538FDF]">
          Why Choose Us
        </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
          <ChooseUs2
            image={exceptionalExpertise}
            title="Exceptional Expertise"
          />
          <ChooseUs
            image={ecoFriendly}
            title="Eco-friendly Cleaning Chemicals"
          />
          <ChooseUs2 image={customerCare1} title="Excellent Customer Care" />
          <ChooseUs image={customerCare2} title="Excellent Customer Care" />
          <ChooseUs2 image={exquisiteHome} title="Exquisite Home Handling" />
          <ChooseUs image={customerCare3} title="Excellent Customer Care" />
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
