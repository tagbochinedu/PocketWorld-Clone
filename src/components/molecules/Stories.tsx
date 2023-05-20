import React from 'react'
import Image from 'next/image';
import Koalasvg from "../atoms/Svg/Koalasvg";
import Chickensvg from "../atoms/Svg/Chickensvg";
import Milkshakesvg from "../atoms/Svg/Milkshakesvg";
import Dogsvg from "../atoms/Svg/Dogsvg";
import Cubesvg from '../atoms/Svg/Cubesvg';
import stor1 from '../../../public/stories1.png'
import stor2 from "../../../public/stories2.png";
import { useScrollAuth } from "@/context/ScrollContext";

const Stories = () => {
    const { char } = useScrollAuth();
  return (
    <section
      className={` relative ${
        char
          ? "block"
          : "hidden"
      }`}
    >
      <div className="bg-secondary pb-28">
        <div className="mx-auto max-w-[1340px] px-7 lg:px-10">
          <div className="flex flex-wrap justify-evenly">
            <div className="w-5/12 lg:w-3/12 mb-10">
              <div className="relative z-20 h-[240px] flex flex-col justify-center rounded-[500px] w-11/12 mx-auto bg-primary font-gt text-[104px] font-bold leading-[126px] text-white">
                <Koalasvg />
                <p className="w-fit mx-auto">100</p>
                <p className="w-fit mx-auto text-lg leading-8">People</p>
              </div>
            </div>
            <div className="w-5/12 lg:w-3/12">
              <div className="relative z-20 h-[240px] flex flex-col justify-center rounded-[500px] w-11/12 mx-auto bg-primary font-gt text-[104px] font-bold leading-[126px] text-white">
                <Chickensvg />
                <p className="w-fit mx-auto">9</p>
                <p className="w-fit mx-auto text-lg leading-8">Timezones</p>
              </div>
            </div>
            <div className="w-5/12 lg:w-3/12">
              <div className="relative z-20 h-[240px] flex flex-col justify-center rounded-[500px] w-11/12 mx-auto bg-primary font-gt text-[104px] font-bold leading-[126px] text-white">
                <Milkshakesvg />
                <p className="w-fit mx-auto">17</p>
                <p className="w-fit mx-auto text-lg leading-8">Countries</p>
              </div>
            </div>
            <div className="w-5/12 lg:w-3/12">
              <div className="relative z-20 h-[240px] flex flex-col justify-center rounded-[500px] w-11/12 mx-auto bg-primary font-gt text-[104px] font-bold leading-[126px] text-white">
                <Dogsvg />
                <p className="w-fit mx-auto">35</p>
                <p className="w-fit mx-auto text-lg leading-8">Dogs & Cats</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary pt-28 pb-10 relative z-20">
        <div className="mx-auto max-w-[1340px] px-10 text-white relative px-7 lg:px-0">
          <div className="relative mb-20 lg:mb-28">
            <Cubesvg />
            <h3 className="text-[120px] lg:text-[160px] font-normal leading-[100px] lg:leading-[140px] font-gt">
              Teammate <br />
              stories
            </h3>
          </div>
          <div className="lg:flex">
            <div className="w-10/12 lg:w-6/12 flex justify-between mx-auto lg:mr-5">
              <div className="w-4/12">
                <Image src={stor1} alt="" className="w-full" />
              </div>
              <div className="w-7/12">
                <p className="font-gt text-base font-normal leading-6 mb-7">
                  &quot;If I would need to pick two things that I’m grateful for
                  experiencing at Pocket Worlds, that would be ownership and
                  growth. Chance to take full ownership of the product feature
                  you are developing, freedom to make decisions that really
                  matter, and most importantly, encouragement and trust from
                  your fellow teammates to do so. This enables us to build the
                  product faster and achieve growth by entrusting each
                  individual to make meaningful decisions. By empowering our
                  users and our employees, both our team and user-base have
                  grown 5x since I joined and we don’t plan to stop!&quot;
                </p>
                <p className="text-lgg font-bold leading-8">Marko</p>
                <p className="font-gt text-base font-normal leading-6 opacity-70">
                  Backend Engineer
                </p>
              </div>
            </div>
            <div className="w-full lg:w-6/12 flex justify-between lg:ml-5 items-center lg:relative top-[-110px]">
              <div className="w-3/12 lg:w-4/12">
                <Image src={stor2} alt="" className="w-full" />
              </div>
              <div className="w-8/12 lg:w-7/12 h-fit">
                <p className="font-gt text-base font-normal leading-6 mb-7">
                  &quot;I love that we have a company culture where people
                  aren’t just *allowed* to share their ideas, we’re *encouraged*
                  to do so. Regardless of whether you’re an artist or an
                  engineer, junior or team lead, a fresh hire or a seasoned
                  veteran, your opinions matter.&quot;
                </p>
                <p className="text-lgg font-bold leading-8">Ryan</p>
                <p className="font-gt text-base font-normal leading-6 opacity-70">
                  Product Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stories