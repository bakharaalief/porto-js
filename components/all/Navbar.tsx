"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

interface Props {
  isClose: boolean;
  onClick: () => void;
}

const Navbar = ({ isClose, onClick }: Props) => {
  const pathname = usePathname();
  const icon =
    isClose === true ? (
      <IoCloseSharp className="w-10 h-10 text-black" />
    ) : (
      <IoMdMenu className="w-10 h-10 text-black" />
    );

  return (
    <div className="navbar py-5 px-6 sm:px-10 lg:px-0 lg:w-7/12 lg:mx-auto">
      {/* title */}
      <div className="flex-1">
        <a
          className="text-xl sm:text-2xl lg:text-3xl font-bold text-customBlue cursor-pointer"
          href="/"
        >
          Bakhara Alief
        </a>
      </div>

      {/* link normal */}
      <div className="hidden sm:flex flex-none">
        <ul className="flex sm:space-x-5 lg:space-x-8 text-lg md:text-xl text-black font-normal">
          <li>
            <a
              className={`hover:text-customPink cursor-pointer ${
                pathname === "/" ? "text-customPink" : ""
              }`}
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={`hover:text-customPink cursor-pointer ${
                pathname === "/about" ? "text-customPink" : ""
              }`}
              href="/about"
            >
              About
            </a>
          </li>
          <li>
            <a className="hover:text-customPink cursor-pointer" href="/">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* humberger */}
      <div className="flex sm:hidden cursor-pointer" onClick={onClick}>
        {icon}
      </div>
    </div>
  );
};

export default Navbar;
