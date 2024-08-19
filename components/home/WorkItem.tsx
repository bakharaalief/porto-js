"use client";

import Work from "@/types/Work";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  work: Work;
  delay: number;
}

const WorkItem = ({ work, delay }: Props) => {
  const delayComa: number = delay / 10;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delayComa }}
      viewport={{ once: true }}
    >
      <div className="card w-full bg-customPink cursor-pointer border-4 border-white hover:border-customBlue">
        <h1 className="text-3xl font-bold text-white text-center pt-10">
          {work.jobdesk}
        </h1>
        <p className="text-lg font-light text-white text-center py-5">
          {work.techStack}
        </p>
        <div className="w-6/12 sm:w-8/12 mx-auto mt-6 overflow-hidden rounded-t-lg border-r-4 border-l-4 border-t-4">
          <img
            className="object-cover object-center w-full h-full"
            src={work.image}
            alt="Pizza"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default WorkItem;
