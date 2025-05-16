import React, { useState } from "react";
import CleanerCategory from "../Reuseables/CleanerCatergory";
import Button from "../Reuseables/Button";

const CleanersCategory = () => {
  const [activeTab, setActiveTab] = useState("residential");
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 bg-[#020223] md:h-1/2 md:top-1/2 z-0" />

      <div className="relative flex items-center flex-col z-10 px-4 py-10">
        <div className="flex mb-10 bg-[#C8DCF6] p-2 rounded-xl">
          <Button
            type="button"
            onClick={() => setActiveTab("residential")}
            className={`font-semibold px-8 py-3 rounded-xl transition-colors duration-300 ${
              activeTab === "residential"
                ? "bg-[#176FD4] text-white"
                : "text-[#538FDF]"
            }`}
          >
            Residential
          </Button>
          <Button
            type="button"
            onClick={() => setActiveTab("industrial")}
            className={`font-semibold px-8 py-3 rounded-xl transition-colors duration-300 ${
              activeTab === "industrial"
                ? "bg-[#176FD4] text-white"
                : "text-[#538FDF]"
            }`}
          >
            Industrial
          </Button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mt-2 gap-8">
          {activeTab === "residential" ? (
            <>
              <CleanerCategory title="BASIC CLEANING" price="39" />
              <CleanerCategory title="PROFESSIONAL" price="59" />
              <CleanerCategory title="PREMIUM" price="79" />
            </>
          ) : (
            <>
              <CleanerCategory title="FACTORY CLEANING" price="45" />
              <CleanerCategory title="HEAVY DUTY" price="14" />
              <CleanerCategory title="HAZMAT CLEANING" price="31" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CleanersCategory;
