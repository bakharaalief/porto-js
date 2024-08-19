import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="lg:w-7/12 lg:mx-auto">
      <div className="w-full h-[0.12rem] bg-gray-300" />
      <h1 className="text-lg sm:text-2xl font-bold text-black text-center mt-4">
        Let's Connect
      </h1>
      <p className="text-sm sm:text-lg font-light text-black text-center mt-2">
        Feel free to reach out for collaborations or just a friendly hello 
      </p>
      <div className="mt-4 pb-4 flex w-[15rem] mx-auto justify-between">
        <a className="cursor-pointer">
          <FaTwitter className="w-7 h-7 sm:w-8 sm:h-8 text-black" />
        </a>
        <a className="cursor-pointer">
          <FaLinkedin className="w-7 h-7 sm:w-8 sm:h-8 text-black" />
        </a>
        <a className="cursor-pointer">
          <FaInstagram className="w-7 h-7 sm:w-8 sm:h-8 text-black" />
        </a>
        <a className="cursor-pointer">
          <FaGithub className="w-7 h-7 sm:w-8 sm:h-8 text-black" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
