import React from "react";
import SectionWrapper from "../atoms/Reusable/SectionWrapper";
import H2 from "../atoms/Reusable/H2";
import img1 from "../../../public/col1img.jpeg";
import img2 from "../../../public/col1img2.png";
import img3 from "../../../public/col2.jpg";
import img4 from "../../../public/col3img1.jpg";
import img5 from "../../../public/col3img2.jpg";
import Image from "next/image";

const WhyPocketWorlds = () => {
  return (
    <SectionWrapper sectionClass="py-[140px] bg-primary text-white">
      <H2 spanText="Why Pocket Worlds" otherText="A Universe
        Apart"/>
      <p className="text-xl leading-8 mb-10 font-gt md:max-w-5xl mx-auto text-center">
        Pocket Worlds offers a unique blend of cutting-edge technology,
        boundless creativity, and a vibrant global community. As part of our
        crew, you&apos;ll redefine digital experiences and create lasting connections
        with users worldwide.
      </p>
      <div className="flex flex-col md:flex-row gap-x-5">
        <div className="md:w-[30%] flex flex-col gap-y-5 md:py-10 order-2 md:order-1 py-5 md:py-0">
          <Image src={img1} alt="" className="w-full h-auto border-4 border-white rounded-[16px]" />
          <Image src={img2} alt="" className="w-full h-auto border-4 border-white rounded-[16px]" />
        </div>
        <div className="md:w-[40%] md:h-12 order-1 md:order-2">
          <Image src={img3} alt="" className="w-full h-auto border-4 border-white rounded-[16px]" />
        </div>
        <div className="md:w-[30%] flex flex-col gap-y-5 md:py-10 order-3">
          <Image src={img4} alt="" className="w-full h-auto border-4 border-white rounded-[16px]" />
          <Image src={img5} alt="" className="w-full h-auto border-4 border-white rounded-[16px]" />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhyPocketWorlds;
