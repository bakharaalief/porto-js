import React from "react";
import WorkItem from "./WorkItem";
import Work from "@/types/Work";

const Works = () => {
  const works: Work[] = [
    {
      jobdesk: "Beams",
      techStack: "Mobile - Android - Java",
      image:
        "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
    },
    {
      jobdesk: "kumparan",
      techStack: "Mobile - Android - Kotlin",
      image:
        "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
    },
    {
      jobdesk: "Bangkit",
      techStack: "Mobile - Android - kotlin",
      image:
        "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
    },
    {
      jobdesk: "Bakhdev",
      techStack: "Mobile - Android - Java",
      image:
        "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
    },
    {
      jobdesk: "Beams",
      techStack: "Mobile - Android - Java",
      image:
        "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
    },
    {
      jobdesk: "Beams",
      techStack: "Mobile - Android - Java",
      image:
        "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
    },
  ];

  return (
    <div className="w-10/12 lg:w-7/12 mx-auto">
      <h1 className="text-2xl sm:text-4xl md:text-3xl text-center text-customBlue font-bold">
        WORK
      </h1>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 sm:gap-3 md:gap-2 my-8">
        {works.map((work, index) => (
          <WorkItem work={work} delay={index} key={work.jobdesk} />
        ))}
      </div>
    </div>
  );
};

export default Works;
