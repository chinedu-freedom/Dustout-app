import React from "react";
import footerLogo from "../assets/Images/footerLogo.png";
import whatsAppIcon from "../assets/Icons/whatsAppIcon.svg";
import instagramIcon from "../assets/Icons/instagramIcon.svg";
import Button from "../Reuseables/Button";
const Footer = () => {
  return (
    <div className="flex h-[80%] justify-center  items-center  flex-col  p-10 md:p-8 rounded-lg md:justify-between md:space-x-20 md:flex-row md:rounded-xl m-5 bg-[#538FDF]">
      <img src={footerLogo} alt="Footer Logo" className="w-80 h-30" />
      <div className="flex flex-col items-center text-center  space-y-2 md:space-y-0 justify-center md:flex-row md:justify-end md:gap-20 md:items-start md:space-x-0 w-full mt-6">
        <div className="flex flex-col space-y-2 w-50">
          <h2 className="font-bold text-white text-2xl md:mb-2">Contact Us</h2>
          <p className="text-white font-semibold">44560299226</p>
          <p className="text-white font-semibold">contact@dustout.org</p>
          <p className="text-white font-semibold">
            42 Oakwood Drive Hampton, Middlesex TW12 3GH United Kingdom
          </p>
        </div>
        <div>
          <div className="hidden md:flex md:p-1 md:rounded-xl md:bg-white">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              className="bg-white rounded-xl p-2 focus:outline-none focus:ring-0 w-60"
              required
            />
            <Button
              type="submit"
              className="bg-[#171AD4] rounded-xl p-2 text-white font-bold"
            >
              Subscribe
            </Button>
          </div>
          <div className="flex justify-center gap-2 md:gap-0 mt-1 md:justify-end md:space-x-1">
            <img src={whatsAppIcon} alt="WhatsApp Icon" className="w-8 h-10" />
            <img
              src={instagramIcon}
              alt="Instagram Icon"
              className="w-9 h-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
