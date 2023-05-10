import React from 'react'
import Image from 'next/image'
import balloon from '../../../public/balloons.svg'
import Joblist from '../atoms/Joblist'

interface Props {
    scrolled: number
}

const Jobs = ({scrolled}: Props) => {
  return (
    <section
      className={`bg-secondary  ${scrolled < 1350 ? "hidden" : "block"}`}
    >
      <div className="flex">
        <div className="w-5/12 relative top-[-95px] z-20">
          <Image
            src={balloon}
            alt="balloon monster"
            className="w-full h-auto"
          />
        </div>
        <Joblist/>
      </div>
    </section>
  );}
   export default Jobs