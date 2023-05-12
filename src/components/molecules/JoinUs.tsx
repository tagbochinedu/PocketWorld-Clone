import React from 'react'
import PlanetMansvg from '../atoms/Svg/PlanetMansvg';
import PlanetWomansvg from '../atoms/Svg/PlanetWomansvg';

interface Props {
  scrolled: number;
}

const JoinUs = ({scrolled}:Props) => {
  return (
    <section
      className={`bg-[#ea88ff] relative py-28 z-20 rounded-b-[120px] mb-[95vh]  ${
        scrolled < 1350 ? "hidden" : "block"
      }`}
    >
      <div className="mx-auto max-w-[1340px] px-10 text-white">
        <h2 className="text-[160px] font-normal leading-[140px] font-gt pb-20">
          Interested in working with us?
        </h2>
        <div className="flex">
          <div className="w-4/12">
            <PlanetMansvg />
          </div>
          <div className="w-4/12 flex flex-col justify-center">
            <h3 className="font-gtb font-black text-5xl leading-[56px] text-center mb-6">
              Create new <br />
              worlds with us.
            </h3>
            <div className='flex justify-center '>
            <a href="https://pocketworlds.notion.site/Open-positions-ae368383a74e4d75a7cb751e4de7644b" target='_blank' className='text-center'>
              <button className="rounded-full bg-primary py-3 w-36 text-base font-bold font-gt group-hover:shadow-joblist relative top-[0px] left-[0px] group-hover:shadow-joblist group-hover:top-[5px] group-hover:left-[5px] group-hover:text-secondary transition-all ease-linear duration-[250ms]">
                Apply
              </button>{" "}
            </a>
            </div>
          </div>
          <div className="w-4/12">
            <PlanetWomansvg />
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinUs