import React from "react";
import CleanerCategory from "../Reuseables/CleanerCatergory";
import Button from "../Reuseables/Button";

const CleanersCategory = () => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 bg-[#020223] md:h-1/2 md:top-1/2 z-0" />
      
      <div className="relative flex items-center flex-col z-10 px-4 py-10">
        <div className="flex mb-10 bg-[#C8DCF6] p-1 rounded-xl">
          <Button
            type="button"
            className="bg-[#176FD4] text-white font-semibold px-8 py-3 rounded-xl z-10 -mr-2 relative"
          >
            Residential
          </Button>
          <Button
            type="button"
            className="text-[#538FDF] font-semibold px-8 py-3 rounded-r-xl"
          >
            Industrial
          </Button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mt-2 gap-8">
          <CleanerCategory title="BASIC CLEANING" price="39" />
          <CleanerCategory title="PROFESIONAL" price="59" />
          <CleanerCategory title="PREMIUM" price="79" />
        </div>
      </div>
    </div>
  );
};

export default CleanersCategory;
