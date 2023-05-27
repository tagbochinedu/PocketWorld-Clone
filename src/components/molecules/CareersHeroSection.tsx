import React from "react";
import SectionWrapper from "../atoms/Reusable/SectionWrapper";
import H1 from "../atoms/Reusable/H1";
import head1 from "../../../public/head1.svg";
import head2 from "../../../public/head2.svg";
import dino from "../../../public/dino.svg";
import head3 from "../../../public/head3.svg";
import head4 from "../../../public/head4.svg";
import head5 from "../../../public/head5.svg";
import head6 from "../../../public/head6.svg";
import c1 from "../../../public/c1.png";
import c2 from "../../../public/c2.png";
import c3 from "../../../public/c3.png";
import c4 from "../../../public/c4.png";
import c5 from "../../../public/c5.png";
import c6 from "../../../public/c6.png";
import c7 from "../../../public/c7.png";
import Image from "next/image";

const CareersHeroSection = () => {
  return (
    <SectionWrapper sectionClass="bg-primary py-40 md:py-48 text-white min-h-[110vh] lg:min-h-[100vh] lg:rounded-b-[120px] overflow-hidden">
      <div className="lg:flex items-end justify-between h-[500px]">
        <div className="md:w-5/12 mx-auto relative lg:pl-[70px] mb-[30px] md:mb-0">
          <Image
            src={dino}
            alt=""
            className=" absolute -bottom-[350px] md:-bottom-[700px] lg:-bottom-20 md:-left-56 lg:-left-5 rotate-[15deg]"
          />
          <Image
            src={c1}
            alt=""
            className="absolute left-[-250px] lg:left-[-100px] top-[100px] opacity-95"
          />
          <Image
            src={c2}
            alt=""
            className="absolute left-[-150px] lg:left-24 top-[-60px] lg:top-[-40px] opacity-95"
          />
          <Image
            src={c3}
            alt=""
            className="absolute -right-80 lg:left-48 opacity-95"
          />
          <H1
            spanclassName1="bg-gradient-to-r from-[#3B405C] to-white bg-clip-text text-transparent inline-block ml-6 md:ml-[56px]"
            spanclassName2="block text-white block md:ml-[56px] lg:ml-0 "
            spanclassName3="bg-gradient-to-r from-[#3B405C] to-white bg-clip-text text-transparent inline-block"
            spancontent1="Join"
            spancontent2="Our"
            spancontent3="World."
          />
        </div>
        <div className="lg:w-6/12 flex justify-center items-end relative md:h-full">
          <Image
            src={head1}
            alt=""
            className="hidden md:block absolute top-36 lg:top-32 left-5 lg:-left-24 rotate-[10deg] w-16 lg:w-auto h-auto"
          />{" "}
          <Image
            src={head2}
            alt=""
            className="hidden md:block absolute top-[90px] lg:top-12 left-40 lg:left-16 -rotate-[10deg] w-16 lg:w-auto h-auto "
          />{" "}
          <Image
            src={c4}
            alt=""
            className="hidden lg:block absolute top-16 left-56 "
          />{" "}
          <Image
            src={head3}
            alt=""
            className="hidden md:block absolute top-16 lg:top-4  lg:left-60 rotate-[-10deg] w-16 lg:w-auto h-auto"
          />{" "}
          <Image
            src={head4}
            alt=""
            className="hidden md:block absolute top-[90px] lg:top-12 right-36 lg:right-32 -rotate-[10deg] w-16 lg:w-auto h-auto"
          />{" "}
          <Image
            src={c5}
            alt=""
            className="hidden lg:block absolute top-32 right-16 "
          />{" "}
          <Image
            src={head5}
            alt=""
            className="hidden md:block absolute top-36 lg:top-36 right-5 lg:-right-5 rotate-[-10deg] w-16 lg:w-auto h-auto"
          />{" "}
          <Image
            src={c4}
            alt=""
            className="hidden lg:block absolute top-10 right-5 "
          />{" "}
          <Image
            src={c6}
            alt=""
            className="hidden lg:block absolute top-20 -right-5 "
          />{" "}
          <Image
            src={c7}
            alt=""
            className="hidden lg:block absolute -top-10 -right-60 "
          />{" "}
          <Image
            src={c3}
            alt=""
            className="hidden lg:block absolute top-48 -right-60"
          />
          <Image
            src={c2}
            alt=""
            className="absolute -bottom-56 lg:-bottom-20 -right-2 opacity-95"
          />
          <Image
            src={head6}
            alt=""
            className="hidden md:block absolute -bottom-10 right-5 lg:-right-5 rotate-[10deg] w-16 lg:w-auto h-auto"
          />
          <h4 className="text-[30px] md:text-[48px] leading-10 leading-[56px] max-w-[570px] lg:max-w-[550px] font-gtb font-black">
            We believe in giving top talent the opportunity to do the best, most
            creative work of their lives with full autonomy and support.
          </h4>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CareersHeroSection;
