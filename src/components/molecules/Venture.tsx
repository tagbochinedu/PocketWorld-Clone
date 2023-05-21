import React from 'react'
import SectionWrapper from '../atoms/Reusable/SectionWrapper'
import Playstore from '../atoms/Playstore';
import { useScrollAuth } from "@/context/ScrollContext";

const Venture = () => {
    const { char } = useScrollAuth();
  return (
    <SectionWrapper
      sectionClass={`bg-primary pb-20 md:pb-56  relative  ${
        char
          ? "block"
          : "hidden"
      }`}
    >
      {" "}
      <div className="text-white pb-16 lg:pt-36 relative z-20">
        <p className="text-[32px] md:text-[64px] max-w-2xl lg:max-w-3xl mx-auto leading-[40px] md:leading-[72px] font-gt text-center">
          Venture into{" "}
          <span className="font-black ">an immersive social experience.</span>
        </p>
      </div>
      <Playstore />
    </SectionWrapper>
  );
}

export default Venture