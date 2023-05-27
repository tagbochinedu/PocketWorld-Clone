import React from "react";
import SectionWrapper from "../atoms/Reusable/SectionWrapper";
import Image from "next/image";
import anton from "../../../public/anton.jpeg";
import jimmy from "../../../public/jimmy.jpeg";

const PioneeringFounders = () => {
  return (
    <SectionWrapper sectionClass="bg-primary py-[140px] text-white">
      <h2 className="text-[60px] md:text-[14vw] lg:text-[160px] font-normal leading-[50px] md:leading-[100px] lg:leading-[140px] font-gt text-center mb-10">
        Meet our ‍<br />
        <span className="font-bold">Pioneering Founders</span>
      </h2>
      <p className="text-xl font-normal leading-8 md:max-w-[80%] mx-auto md:text-center font-gt mb-11">
        Anton and Jimmy, our visionary founders, embarked on their mission to
        revolutionize online connections, play, and interaction in 2013. Their
        passion and entrepreneurial spirit continue to guide Pocket Worlds as we
        reach for the stars.
      </p>
      <div className="md:w-10/12 lg:w-6/12 md:flex gap-x-5 mx-auto">
        <div className="md:w-6/12 mb-20 md:mb-0">
          <div className=" rounded-t-full ">
            <Image
              src={anton}
              alt="Anton Co-founder & CEO"
              className="rounded-t-full"
            />
          </div>
          <div className="h-4 bg-secondary mb-8" />
          <div className="">
            <h6 className="font-gtb font-black text-[28px] leading-10 text-center mb-2">
              Anton Bernstein
            </h6>
            <h6 className="font-gt  text-base leading-6 text-center">
              Co-founder & CEO
            </h6>
          </div>{" "}
        </div>
        <div className="md:w-6/12">
          <div className=" rounded-t-full ">
            <Image
              src={jimmy}
              alt="Jimmy Co-founder & CTO"
              className="rounded-t-full"
            />
          </div>
          <div className="h-4 bg-secondary mb-8" />
          <div className="">
            <h6 className="font-gtb font-black text-[28px] leading-10 text-center mb-2">
              Jimmy Xu
            </h6>
            <h6 className="font-gt  text-base leading-6 text-center">
              Co-founder & CTO
            </h6>
          </div>{" "}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PioneeringFounders;
