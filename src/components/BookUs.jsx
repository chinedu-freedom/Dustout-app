import React from "react";
import Button from "../Reuseables/Button";
import femaleWorkers from "../assets/Images/femaleWorkers.png";

const BookUs = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 bg-none h-[85%] md:bg-[#020223] md:h-[40%] md:top-1/2 z-0" />

      <div className="relative z-10 order-1 md:order-2 flex flex-col items-center justify-center pb-30 md:pb-25 md:px-8">
        <div className="md:bg-[#538FDF]  h-full md:flex justify-center items-center md:w-fit md:p-5 rounded-2xl">
          <h2 className="text-4xl block font-bold text-center mb-5  text-[#538FDF] md:hidden">
            Book Us
          </h2>

          <div className="relative h-100 w-100 hidden md:block">
            <h3 className="text-center font-bold text-white text-4xl">Get In</h3>
            <h2 className="text-center font-bold text-white text-7xl">TOUCH</h2>
            <img
              src={femaleWorkers}
              alt="Female workers"
              className="absolute z-2 top-12 w-100"
            />
          </div>

          <div className="md:bg-[#538FDF]  h-[80%]  p-5 md:w-1/2 md:px-0">
            <form className="py-4 md:py-2 flex flex-col space-y-1">
              <div className="flex items-center justify-center gap-3 md:gap-10">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="first-name"
                    className="text-[#538FDF] md:text-white font-semibold"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    className="w-full bg-[#538FDF] md:bg-white rounded-md md:rounded-xl py-3 px-2 focus:outline-none focus:ring-0"
                    required
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="last-name"
                    className="text-[#538FDF] md:text-white font-semibold"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    className="w-full bg-[#538FDF] md:bg-white rounded-md md:rounded-xl py-3 px-2 focus:outline-none focus:ring-0"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="email"
                  className="text-[#538FDF] md:text-white font-semibold"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-[#538FDF] md:bg-white rounded-md md:rounded-xl py-3 px-2 focus:outline-none focus:ring-0 w-full"
                  required
                />
              </div>
              <div className="flex items-center justify-center gap-10 w-full">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="tel"
                    className="text-[#538FDF] md:text-white font-semibold"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    className="bg-[#538FDF] md:bg-white rounded-md md:rounded-xl py-3 px-2 focus:outline-none focus:ring-0 w-full"
                    required
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="noOfRooms"
                    className="text-[#538FDF] md:text-white font-semibold"
                  >
                    No of Rooms
                  </label>
                  <input
                    type="text"
                    name="noOfRooms"
                    id="noOfRooms"
                    className="bg-[#538FDF] md:bg-white rounded-md md:rounded-xl py-3 px-2 focus:outline-none focus:ring-0 w-full"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center justify-center gap-10 w-full">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="noOfRestRooms"
                    className="text-[#538FDF] md:text-white font-semibold"
                  >
                    No of Rest Rooms
                  </label>
                  <input
                    type="text"
                    name="noOfRestRooms"
                    id="noOfRestRooms"
                    className="bg-[#538FDF] md:bg-white rounded-md md:rounded-xl py-3 px-2 focus:outline-none focus:ring-0 w-full"
                    required
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="noOfLandscape"
                    className="text-[#538FDF] md:text-white font-semibold"
                  >
                    No of Landscape
                  </label>
                  <input
                    type="text"
                    name="noOfLandscape"
                    id="noOfLandscape"
                    className="bg-[#538FDF] md:bg-white rounded-md md:rounded-xl py-3 px-2 focus:outline-none focus:ring-0 w-full"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="instruction"
                  className="text-[#538FDF] md:text-white font-semibold"
                >
                  Special Instruction
                </label>
                <textarea
                  name="instruction"
                  id="instruction"
                  className="focus:outline-none mt-0.5 h-20 resize-none p-2 w-full bg-[#538FDF] md:bg-white rounded-md md:rounded-xl"
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full py-3 font-semibold text-2xl text-white rounded-lg mt-3 bg-[#171AD4]"
              >
                Book Us
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookUs;
