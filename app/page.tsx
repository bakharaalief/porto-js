"use client";

import Footer from "@/components/all/Footer";
import Section from "@/components/home/Section";
import Works from "@/components/home/Works";
import NavbarWrapper from "@/components/all/NavbarWrapper";

const Home = () => {
  return (
    <NavbarWrapper>
      <Section />
      <Works />
    </NavbarWrapper>
  );
};

export default Home;
