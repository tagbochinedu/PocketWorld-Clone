import React, { useState } from "react";
import Flagsvg from "../Svg/Flagsvg";
import Facesvg from "../Svg/Facesvg";
import { useCursorAuth } from "@/context/CursorContext";

const HeroSectionSecondContent = () => {
  const { enterElement } = useCursorAuth();

  return (
    <div className="lg:min-h-[100vh] pt-28 lg:pt-48 pb-10 relative">
      <div className="lg:flex items-center mb-5 relative">
        <div className="text-[14vw] lg:text-[160px] font-gt text-white lg:w-9/12 h-fit">
          <h2
            className="leading-[100px] lg:leading-[140px] font-normal  relative z-20"
            onMouseOver={() => enterElement(true)}
            onMouseOut={() => enterElement(false)}
          >
            Your second home in your pocket
          </h2>
        </div>
        <div className="lg:grow w-fit ml-12 absolute lg:relative z-40 right-28 lg:right-0  top-32 lg:top-0">
          <Flagsvg />
        </div>
      </div>
      <div className="flex">
        <div className="w-3/12 lg:w-6/12 justify-end flex lg:pr-10 relative z-30">
          <Facesvg />
        </div>
        <div className="w-9/12 lg:w-6/12 text-white relative z-30">
          <h5 className="text-5xl font-gtb  font-black leading-[56px] mb-6">
            Our mission is to empower creativity and connection in a digital
            world.
          </h5>
          <p className="text-xl leading-[32px] font-normal font-gt">
            We are a metaverse company that brings people together through play.
            Our intricate, rich worlds are social by design and built to last
            for decades.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionSecondContent;
