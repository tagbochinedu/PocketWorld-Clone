import React from 'react'
import SectionWrapper from '../atoms/Reusable/SectionWrapper'
import Pizzasvg from "../atoms/Svg/Pizzasvg";
import { useCursorAuth } from "@/context/CursorContext";
import Map from '../atoms/Map';

interface Props {
  scrolled: number;
}


const OurWorld = ({scrolled}: Props) => {
const { enterElement } = useCursorAuth();

  return (
    <SectionWrapper sectionClass={`bg-secondary relative z-20 pb-10 ${
        scrolled < 1350 ? "hidden" : "block"
      }`}>
      <Pizzasvg className="right-[260px] rotate-[230deg] top-[-100px] w-[180px] h-auto" />
      <div className="flex justify-center items-end">
        <div className="w-5/12">
          <h2
            className="max-w-lg text-[160px] font-normal leading-[140px] font-gt text-white relative z-20"
            onMouseOver={() => enterElement(true)}
            onMouseOut={() => enterElement(false)}
          >
            Our world people
          </h2>
        </div>
        <div className="w-5/12">
          <h2
            className="max-w-md ml-auto text-5xl font-black leading-[56px] font-gtb text-white relative z-20"
          >
            Our superpower is <br/>the cultural<br/> diversity of a global<br/> team.
          </h2>
        </div>
      </div>
      <Map/>
    </SectionWrapper>
  );
}

export default OurWorld