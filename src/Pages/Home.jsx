import React, { useState } from "react";
import backgroundImage from "../assets/Images/backgroundImage.png";
import dustOutLogo from "../../src/logo.png";
import Button from "../Reuseables/Button";
import Hero from "../components/Hero";
import About from "./About";
import OurServices from "../components/OurServices";
import BookUs from "../components/BookUs";
import CleanersCatergory from "../components/CleanersCategory";
import WhyChooseUs from "../components/WhyChooseUs";
import BookingProcedure from "../components/BookingProcedure";
import ClientReviews from "../components/ClientReviews";
import Footer from "../components/Footer";
import { Menu, X } from "lucide-react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat space-y-20 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="flex justify-between md:justify-between md:px-30 items-center  w-full px-6 pt-6 z-50 relative">
        <img src={dustOutLogo} alt="DustOut" className="w-48 h-auto" />
        <div className="hidden md:flex items-center gap-20">
          <nav>
            <ul className="text-[#171ADA] font-semibold flex items-center space-x-4 cursor-pointer hover:text-[#0f14a8]">
              <li>Contact</li>
              <li>About Us</li>
              <li>Book Us</li>
            </ul>
          </nav>
          <Button
            type="button"
            className="bg-[#171AD4] px-5 h-12 py-7 rounded-2xl text-white font-semibold hover:bg-[#0f14a8] transition duration-300"
          >
            Get Started
          </Button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-[50%] bg-white z-50 shadow-md transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="p-6 relative h-full flex flex-col">
          <div className="flex justify-end">
            <button onClick={() => setIsOpen(false)}>
              <X size={28} />
            </button>
          </div>

          <ul className="flex flex-col gap-6 text-[#171ADA] font-semibold text-lg mt-10">
            <li onClick={() => setIsOpen(false)}>Contact</li>
            <li onClick={() => setIsOpen(false)}>About Us</li>
            <li onClick={() => setIsOpen(false)}>Book Us</li>
          </ul>

          <Button
            type="button"
            className="mt-8 w-full bg-[#171AD4] py-3 rounded-xl text-white font-semibold hover:bg-[#0f14a8] transition duration-300"
          >
            Get Started
          </Button>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed h-screen inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <Hero />
      <About />
      <div className="flex flex-col">
        <OurServices  />
        <BookUs />
      </div>
      <CleanersCatergory />
      <div className="flex flex-col">
        <WhyChooseUs />
        <BookingProcedure />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl w-[300px] md:w-full font-bold text-center md:mb-4  mb-10 text-[#538FDF]">
          What our clients are saying
        </h2>
        <ClientReviews />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
