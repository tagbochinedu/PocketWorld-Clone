import React, {useState} from 'react'
import Flagsvg from '../Svg/Flagsvg'
import Facesvg from '../Svg/Facesvg'
import { useCursorAuth } from '@/context/CursorContext'

const HeroSectionSecondContent = () => {
const {enterElement} = useCursorAuth()



  return (
    <div className="min-h-[100vh] pt-36">
      
      <div className=" flex items-center mb-5">
        <div
          className="text-[160px] font-gt text-white w-9/12 h-fit"
          onMouseOver={() => enterElement(true)}
          onMouseOut={() => enterElement(false)}
        >
          <h2 className="leading-[140px] font-normal relative z-20">
            Your second home in your pocket
          </h2>
        </div>
        <div className="grow ml-12 relative z-20">
          <Flagsvg />
        </div>
      </div>
      <div className="flex">
        <div className="w-6/12 justify-end flex pr-10 relative z-20">
          <Facesvg />
        </div>
        <div className="w-6/12 text-white relative z-20">
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
}

export default HeroSectionSecondContent