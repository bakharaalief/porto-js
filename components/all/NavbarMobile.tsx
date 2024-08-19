"use client";

import React from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

interface Props {
  isClose: boolean;
  onClick: () => void;
}

const NavbarMobile = ({ isClose, onClick }: Props) => {
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

      {/* humberger */}
      <div className="flex cursor-pointer" onClick={onClick}>
        {icon}
      </div>
    </div>
  );
};

export default NavbarMobile;
