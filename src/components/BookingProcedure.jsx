import React from "react";
import cleaningMachine from "../assets/Icons/cleaningMachine.svg";
import BookUsProcess from "../Reuseables/BookUsProcess";
import smileEmoji from "../assets/Icons/smileEmoji.svg";
import form from "../assets/Icons/form.svg";
import femaleWorker from "../assets/Images/bookUs.png";

const BookingProcedure = () => {
  return (
    <div className="w-full order-1 md:order-2 md:mt-10">
      <div className="flex flex-col w-full md:flex-row items-center justify-center gap-10 px-4">
        <div className="flex flex-col justify-center md:items-start items-center w-full max-w-xl gap-6">
        <h2 className="text-4xl font-bold mb-8 md:mb-2 text-[#538FDF]">
          How to Book Us
        </h2>
          <BookUsProcess
            image={cleaningMachine}
            text="Fill the form and tell us your cleaning needs."
          />
          <BookUsProcess
            image={smileEmoji}
            text="Relax and we come do the cleaning."
          />
          <BookUsProcess
            image={form}
            text="You are satisfied and recommend us to others while we await your call again."
          />
        </div>
        <div className="md:-ml-60">
          <img
            src={femaleWorker}
            alt="Book us now"
            className="w-[400px] h-[400px]  md:h-[500px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default BookingProcedure;
