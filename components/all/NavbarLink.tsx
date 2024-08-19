import React from "react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  link: string;
  delay: number;
}

const NavbarLink = ({ title, link, delay }: Props) => {
  const delayComa: number = delay / 10;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delayComa }}
      viewport={{ once: false }}
    >
      <a href={link}>
        <p className="text-3xl font-bold text-black text-center">{title}</p>
      </a>
    </motion.div>
  );
};

export default NavbarLink;
