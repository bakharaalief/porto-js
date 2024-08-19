"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";

const Section = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 5 }, [
    AutoPlay(),
  ]);
  const images = [
    "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
    "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
    "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
    "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
    "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
    "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
    "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
    "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
  ];

  return (
    <div className="py-10 lg:py-20 lg:w-7/12 lg:mx-auto">
      {/* title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center text-customPink font-bold">
        Hi! I&apos;m Alief
      </h1>

      {/* desc */}
      <p className="w-9/12 md:w-9/12 lg:w-10/12 xl:7/12 text-sm md:text-lg lg:text-xl text-center font-light text-black my-9 lg:my-16 mx-10 mx-auto">
        A Front-End Engineer who loves coding, diving into books, capturing
        moments through photography, and spending time with cats. I&apos;m
        passionate about crafting seamless user experiences and constantly
        learning new things in the tech world
      </p>

      <div className="embla overflow-hidden cursor-pointer" ref={emblaRef}>
        <div className="embla__container flex">
          {images.map((image) => (
            <div
              className="embla__slide mx-2 flex-none rounded-lg overflow-hidden"
              key={image}
            >
              <img className="w-[15rem] lg:w-50" src={image} alt="Pizza" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
