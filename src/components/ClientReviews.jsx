import React from "react";
import clientAvatar from "../assets/Icons/clientAvatar.svg";

const ClientReviews = () => {
  const reviewData = [
    "They are the best firm in the UK and they clean proficiently",
    "They are the best firm in the UK and they clean proficiently",
    "They are the best firm in the UK and they clean proficiently",
    "They are the best firm in the UK and they clean proficiently",
    "They are the best firm in the UK and they clean proficiently",
    "They are the best firm in the UK and they clean proficiently",
  ]
  return (
    <div className="flex flex-col md:flex-row justify-center p-5 md:justify-between items-center gap-12 md:gap-10 px-4 md:px-20 w-full">
      {
        reviewData?.slice(0,3)?.map((review,index) => (
          <div key={index} className="relative flex justify-center space-y-6">
            <div className="pt-15 w-60 bg-[#D7E8FF] rounded-2xl py-8 px-6 flex flex-row lg:flex-row items-center md:pl-20  text-center lg:text-left">
              <h2 className="font-semibold text-lg text-[#171AD4]">
                {review}
              </h2>
            </div>
            <div className="w-[75px] h-[70px] md:w-[90px] md:h-[82px] absolute top-0 lg:top-1/2 -translate-y-1/2 lg:-left-8 bg-[#171AD4] rounded-2xl flex justify-center items-center p-4 z-10 shadow-lg">
              <img src={clientAvatar} alt="Client" />
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default ClientReviews;
