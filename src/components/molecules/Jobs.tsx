import React from 'react'
import Image from 'next/image'
import balloon from '../../../public/balloons.svg'
import Joblist from '../atoms/Joblist'
import Glassessvg from '../atoms/Svg/Glassessvg'
import Pizzasvg from '../atoms/Svg/Pizzasvg'

interface Props {
    scrolled: number
}

const Jobs = ({scrolled}: Props) => {
  return (
    <section
      className={`bg-secondary relative ${
        scrolled < 1350 ? "hidden" : "block"
      }`}
    >
      <Glassessvg />
      <Pizzasvg className="right-0 top-[450px] w-[236px] h-auto" />

      <div className="flex">
        <div className="w-5/12 relative top-[-95px] z-20">
          <Image
            src={balloon}
            alt="balloon monster"
            className="w-full h-auto"
          />
        </div>
        <Joblist />
      </div>
    </section>
  );}
   export default Jobs