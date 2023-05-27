import React from "react";
import Image from "next/image";
import puzzle from "../../../public/puzzle.svg";

const Threestep = () => {
  return (
    <section className="bg-primary py-20 md:py-[140px] text-white overflow-hidden lg:mb-[100vh]">
      <div className="mx-auto max-w-[1340px] px-7 lg:px-10">
        <div className="lg:pl-[110px] relative pb-20">
          <Image src={puzzle} alt="" className="hidden md:block absolute right-0 -top-10 z-10 lg:z-20" />
          <p className="text-[26px] md:text-[32px] leading-9 md:leading-10 font-bold max-w-[790px] font-gt relative z-20 lg:z-10">
            Our team has a{" "}
            <span className="text-[#ffc5c5]">3-step hiring process</span> to
            keep things smooth and simple. We start with a screener call, then
            on to individual and full team interviews. This let’s us get to know
            one another and answer any questions along the way.
          </p>
        </div>
      </div>

      <div className="bg-secondary py-10 md:py-[70px] relative rounded-l-full left-[5%]">
        <div className="px-10 md:px-20 lg:px-[180px]">
          <h4 className="text-[32px] md:text-[64px] font-black mb-5 md:mb-10 font-gt leading-10 md:leading-[72px] max-w-4xl">
            Join us to build the future of virtual worlds
          </h4>{" "}
          <a
            href="https://pocketworlds.notion.site/Open-positions-ae368383a74e4d75a7cb751e4de7644b"
            target="_blank"
            className=""
          >
            <button className="w-56 rounded-full bg-primary py-3 text-base font-bold font-gt hover:shadow-joblist relative top-[0px] left-[0px] hover:shadow-joblist hover:top-[5px] hover:left-[5px] hover:text-secondary transition-all ease-linear duration-[250ms]">
              View open positions
            </button>{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Threestep;
