"use client";

import Footer from "@/components/Footer";
import Menu from "@/components/home/Menu";
import Section from "@/components/home/Section";
import Works from "@/components/home/Works";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Home() {
  const [isHidden, setHidden] = useState<boolean>(true);

  const onMenuClick = () => {
    setHidden(!isHidden);
  };

  const screen = isHidden ? "min-h-screen" : "h-screen overflow-hidden";

  return (
    <div className="relative">
      <Menu isHidden={isHidden} onClick={onMenuClick} />
      <div className={`${screen}`}>
        <Navbar isClose={!isHidden} onClick={onMenuClick} />
        <Section />
        <Works />
        <Footer />
      </div>
    </div>
  );
}
