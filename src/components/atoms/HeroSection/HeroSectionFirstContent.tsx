import React from "react";
import Image from "next/image";
import hero from "../../../../public/heroImage.png";

const HeroSectionFirstContent = () => {
  return (
    <div className="flex justify-between items-center min-h-[50vw] lg:min-h-[100vh] py-28 lg:py-0 ">
      <div className="max-w-max w-6/12 font-gtb text-[120px] lg:text-[180px] h-max">
        <div className="font-black relative ">
          <span className="bg-gradient-to-r from-secondaryText to-white bg-clip-text text-transparent leading-[110px] lg:leading-[160px] block text-right">
            We
          </span>
          <span className="block text-white leading-[110px] lg:leading-[160px] ">
            build
          </span>
          <span className="absolute top-[190px] lg:top-[280px] right-[-240px] lg:right-[-320px] bg-gradient-to-r from-secondaryText to-white bg-clip-text text-transparent leading-[110px] lg:leading-[160px] text-right block">
            worlds.
          </span>
        </div>
      </div>
      <div className="w-6/12 top-20 lg:top-28 relative ">
        <Image
          src={hero}
          alt="boy floating in clouds relative"
          className="w-full h-[500px] lg:h-[750px] object-cover aspect-square relative z-30 "
        />
      </div>
    </div>
  );
};

export default HeroSectionFirstContent;
