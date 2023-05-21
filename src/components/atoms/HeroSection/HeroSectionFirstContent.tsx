import React from "react";
import Image from "next/image";
import hero from "../../../../public/heroImage.png";
import hero2 from "../../../../public/hero2.png";

const HeroSectionFirstContent = () => {
  return (
    <div className="md:flex justify-between items-center min-h-[100vh] md:min-h-[50vw] lg:min-h-[100vh] py-28 lg:py-0 ">
      <div className="max-w-max w-6/12 font-gtb text-[80px] md:text-[120px] lg:text-[180px] h-max">
        <div className="font-black relative ">
          <span className="bg-gradient-to-r from-secondaryText to-white bg-clip-text text-transparent leading-[78px] md:leading-[110px] lg:leading-[160px] block text-right">
            We
          </span>
          <span className="block text-white leading-[78px] md:leading-[110px] lg:leading-[160px] ">
            build
          </span>
          <span className="absolute top-[140px] md:top-[190px] lg:top-[280px] right-[-150px] md:right-[-240px] lg:right-[-320px] bg-gradient-to-r from-secondaryText to-white bg-clip-text text-transparent leading-[78px] md:leading-[110px] lg:leading-[160px] text-right block">
            worlds.
          </span>
        </div>
      </div>
      <div className="hidden md:block md:w-6/12 top-10 lg:top-28 relative ">
        <Image
          src={hero}
          alt="boy floating in clouds relative"
          className="w-full h-[500px] lg:h-[750px] object-cover aspect-square relative z-30 "
        />
      </div>
      <div className="block md:hidden top-10 lg:top-28 relative ">
        <Image
          src={hero2}
          alt="boy floating in clouds relative"
          className="w-full mx-auto h-auto object-contain aspect-square relative z-30 "
        />
      </div>
    </div>
  );
};

export default HeroSectionFirstContent;
