
import React from "react";
import clientAvatar from "../assets/Icons/clientAvatar.svg";

const ClientReviews = () => {
  const reviewData = [
    "They are the best firm in the UK and they clean proficiently",
    "They are the best firm in the UK and they clean proficiently",
    "They are the best firm in the UK and they clean proficiently",
  ]
  return (
    <div className="flex mt-8 md:mt-0 flex-col md:flex-row justify-center p-5 md:justify-between items-center gap-12 md:gap-10 px-4 md:px-20 w-full">
      {
        reviewData?.map((review,index) => (
          <div key={index} className=" pt-15 h-32 pb-6 md:pt-0 md:pb-0 md:py-10 rounded-xl relative bg-[#D7E8FF] flex justify-center items-center">
            <div className=" w-60 justify-center rounded-2xl md:w-full  px-6  flex flex-row md:flex-row items-center md:pl-20  text-center md:text-left">
              <h2 className="font-semibold text-md text-[#171AD4]">
                {review}
              </h2>
            </div>
            <div className="w-[75px] h-[70px] md:w-[90px] md:h-[82px] absolute top-0 md:top-1/2 -translate-y-1/2 md:-left-8 bg-[#171AD4] rounded-2xl flex justify-center items-center p-4 z-10 shadow-md">
              <img src={clientAvatar} alt="Client" />
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default ClientReviews;

