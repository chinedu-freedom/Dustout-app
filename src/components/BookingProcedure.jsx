import React from "react";
import cleaningMachine from "../assets/Icons/cleaningMachine.svg";
import BookUsProcess from "../Reuseables/BookUsProcess";
import smileEmoji from "../assets/Icons/smileEmoji.svg";
import form from "../assets/Icons/form.svg";
import femaleWorker from "../assets/Images/bookUs.png";

const BookingProcedure = () => {
  return (
    <div className="w-full py-6">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#538FDF]">
        How to Book Us
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-4">
        <div className="flex flex-col w-full max-w-xl gap-6">
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
        <div className="md:-ml-20">
          <img
            src={femaleWorker}
            alt="Book us now"
            className="w-[300px] h-[300px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default BookingProcedure;
