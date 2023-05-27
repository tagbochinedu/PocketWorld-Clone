import React from "react";
import SectionWrapper from "../atoms/Reusable/SectionWrapper";
import { ethos } from "@/lib/data";
import polygon from "../../../public/polygon.svg";
import earphones from "../../../public/earphones.svg";
import Image from "next/image";

const Ethos = () => {
  return (
    <SectionWrapper sectionClass="bg-secondary pt-20 md:pt-[290px] text-white min-h-[100vh] pb-[70px] md:pb-[140px]">
      <div className="relative">
        {" "}
        <Image
          src={polygon}
          alt=""
          className="hidden md:block absolute -top-32 right-28"
        />
        <h2 className="text-[60px] md:text-[14vw] lg:text-[160px] font-normal leading-[50px] md:leading-[100px] lg:leading-[140px] font-gt pb-[30px] pb-[100px] lg:pb-[130px] relative">
          <Image
            src={earphones}
            alt=""
            className="absolute -top-2 md:-top-5 lg:-top-7 lg:-left-1.5 w-12 md:w-24 lg:w-auto"
          />
          <span className="font-bold">Our Ethos:</span> A Galaxy of Values
        </h2>
        <h4 className="text-[48px] font-black leading-[56px] font-gtb mb-6">
          Welcome to Pocket Worlds, where we build immersive virtual spaces that
          inspire connections, creativity, and innovation.
        </h4>
        <p className="text-xl font-normal leading-8">
          We are a global community of trailblazers, dreamers, and game-changers
          committed to transforming the digital landscape. Are you ready to make
          your mark?
        </p>
      </div>
      <div className="pt-[240px] pb-20 mb-8 md:flex flex-wrap border-b border-b-white">
        {ethos.map((etho) => (
          <div
            key={etho.id}
            className="md:w-6/12 even:mb-36 odd:mb-36 md:first:mb-36 md:second:mb-36 md:even:pl-5 md:odd:pr-5 "
          >
            <div className="relative h-full">
              <div className="top-[-100px] absolute">
                <Image
                  src={etho.img}
                  alt="ethos visual"
                  className="rotate-[-10deg]"
                />
              </div>
              <div className="md:w-11/12 ml-auto p-5 md:p-10 bg-primary relative z-20 rounded-2xl">
                <h5 className="font-bold text-[32px] leading-10 mb-3.5 font-gtb">
                  {etho.title}
                </h5>
                <p className="text-xl leading-8 font-gt">{etho.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="">
        <div className="">
          <h5 className="text-white text-2xl font-bold leading-10 font-gt w-fit ml-auto">
            Ready to join us?{" "}
            <a
              href="https://pocketworlds.notion.site/Open-positions-ae368383a74e4d75a7cb751e4de7644b"
              target="_blank"
              className="text-primary underline font-bold hover:text-inherit transition-all ease-in-out duration-300"
            >
              Join now
            </a>
          </h5>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Ethos;
