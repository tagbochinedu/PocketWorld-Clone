import React from 'react'
import SectionWrapper from '../atoms/Reusable/SectionWrapper'
import Playstore from '../atoms/Playstore';


interface Props {
    scrolled: number
}

const Venture = ({scrolled}: Props) => {
  return (
    <SectionWrapper
      sectionClass={`bg-primary pb-56  relative  ${
        scrolled < 1350 ? "hidden" : "block"
      }`}
    >
      {" "}
      <div className="text-white pb-16 lg:pt-36 relative z-20">
        <p className="text-[64px] max-w-2xl lg:max-w-3xl mx-auto leading-[72px] font-gt text-center">
          Venture into{" "}
          <span className="font-black ">an immersive social experience.</span>
        </p>
      </div>
      <Playstore />
    </SectionWrapper>
  );
}

export default Venture