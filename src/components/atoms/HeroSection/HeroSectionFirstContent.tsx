import React from "react";
import Image from "next/image";
import hero from "../../../../public/heroImage.png";
import hero2 from "../../../../public/hero2.png";
import H1 from "../Reusable/H1";

const HeroSectionFirstContent = () => {
  return (
    <div className="md:flex justify-between items-center min-h-[100vh] md:min-h-[50vw] lg:min-h-[100vh] py-28 lg:py-0 ">
      <div className="max-w-max w-6/12 font-gtb  h-max">
        <div className=" relative ">
          <H1
            spanclassName1="bg-gradient-to-r from-secondaryText to-white bg-clip-text text-transparent  text-right inline-block ml-[170px]"
            spanclassName2="block text-white block"
            spanclassName3="absolute top-[140px] md:top-[190px] lg:top-[280px] right-[-150px] md:right-[-240px] lg:right-[-320px] bg-gradient-to-r from-secondaryText to-white bg-clip-text text-transparent  text-right inline-block"
            spancontent1=" We"
            spancontent2=" build"
            spancontent3="  worlds."
          />
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
