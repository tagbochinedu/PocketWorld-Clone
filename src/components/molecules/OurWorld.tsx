import React from 'react'
import SectionWrapper from '../atoms/Reusable/SectionWrapper'
import Pizzasvg from "../atoms/Svg/Pizzasvg";
import { useCursorAuth } from "@/context/CursorContext";
import Map from '../atoms/Map';
import { Props } from '@/lib/data';



const OurWorld = ({scrolled, width}: Props) => {
const { enterElement } = useCursorAuth();

  return (
    <SectionWrapper
      sectionClass={`bg-secondary relative pb-10 pt-10 lg:pt-0 ${
        scrolled < 1350 && width > 1024 ? "hidden" : "block"
      }`}
    >
      <Pizzasvg className="right-[260px] rotate-[230deg] top-[-100px] w-[180px] h-auto hidden lg:block" />
      <div className="lg:flex justify-center items-end">
        <div className="lg:w-5/12 pb-5 lg:pb-0">
          <h2
            className="lg:max-w-lg text-[14vw] lg:text-[160px] font-normal leading-[100px] lg:leading-[140px] font-gt text-white relative z-20"
            onMouseOver={() => enterElement(true)}
            onMouseOut={() => enterElement(false)}
          >
            Our world people
          </h2>
        </div>
        <div className="lg:w-5/12">
          <h2 className="lg:max-w-md ml-auto text-5xl font-black leading-[56px] font-gtb text-white relative z-20">
            Our superpower is <br className="hidden lg:block" />
            the cultural
            <br /> diversity of a global
            <br className="hidden lg:block" /> team.
          </h2>
        </div>
      </div>
      <Map />
    </SectionWrapper>
  );
}

export default OurWorld