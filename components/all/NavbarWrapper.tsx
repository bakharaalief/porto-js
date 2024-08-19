"use client";

import useGlobalState from "@/hooks/useGlobalState";
import { isMenuHiddenKey } from "@/libs/constant";
import React from "react";
import Footer from "./Footer";
import Menu from "../home/Menu";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

const NavbarWrapper = ({ children }: Props) => {
  const [isHidden, setHidden] = useGlobalState(isMenuHiddenKey, true);

  const onMenuClick = () => {
    setHidden(!isHidden);
  };

  const screen = isHidden ? "min-h-screen" : "h-screen overflow-hidden";

  return (
    <div className="relative">
      <Menu isHidden={isHidden} onClick={onMenuClick} />
      <div className={`${screen}`}>
        <Navbar isClose={!isHidden} onClick={onMenuClick} />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default NavbarWrapper;
