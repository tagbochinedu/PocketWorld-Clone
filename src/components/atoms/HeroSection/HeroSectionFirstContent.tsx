import React from 'react'
import Image from 'next/image';
import hero from "../../../../public/heroImage.png";

const HeroSectionFirstContent = () => {
  return (
    <div className="flex justify-between items-center min-h-[100vh] pt-5">
      <div className="max-w-max w-6/12 font-gtb text-[180px] h-fit">
        <div className="font-black relative">
          <span className="bg-gradient-to-r from-secondaryText to-white bg-clip-text text-transparent leading-[160px] block text-right">
            We
          </span>
          <span className="block text-white leading-[160px] ">build</span>
          <span className="absolute top-[280px] right-[-320px] bg-gradient-to-r from-secondaryText to-white bg-clip-text text-transparent leading-[160px] text-right block">
            worlds.
          </span>
        </div>
      </div>
      <div className="w-6/12 top-24 relative">
        <Image
          src={hero}
          alt="boy floating in clouds relative"
          className="w-full h-[750px] object-cover aspect-square relative "
        />
      </div>
    </div>
  );
}

export default HeroSectionFirstContent