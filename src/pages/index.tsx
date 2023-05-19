import { useEffect, useState } from "react";
import Image from "next/image";
import Mouthsvg from "../components/atoms/Svg/Mouthsvg";
import Header from "@/components/atoms/Header";
import HeroSection from "@/components/molecules/HeroSection";

import Characters from "@/components/molecules/Characters";
import Venture from "@/components/molecules/Venture";
import Jobs from "@/components/molecules/Jobs";
import OurWorld from "@/components/molecules/OurWorld";
import Stories from "@/components/molecules/Stories";
import JoinUs from "@/components/molecules/JoinUs";
import Footer from "@/components/atoms/Footer";
import SectionWrapper from "@/components/atoms/Reusable/SectionWrapper";
import HeroSectionFirstContent from "@/components/atoms/HeroSection/HeroSectionFirstContent";
import HeroSectionSecondContent from "@/components/atoms/HeroSection/HeroSectionSecondContent";
import Clouds from "@/components/atoms/Reusable/Clouds";

export default function Home() {
  const [scrolled, setScrolled] = useState(0);
  const [width, setWidth] = useState<number>(0);
  const handleResize = () => {
   if(width) {
     setWidth(window.innerWidth);
   }
  };

  const handleScroll = () => {
    setScrolled(window.scrollY);
  };

    useEffect(() => {
     setWidth(window.innerWidth);
    }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    console.log(width)
  }, [scrolled, width]);

  return (
    <div className=" overflow-hidden">
      <Clouds scrolled={scrolled} width={width} className={`overflow-hidden hidden lg:block`}/>
      <Mouthsvg size={scrolled} />
      <Header scrolled={scrolled} />
      <HeroSection scrolled={scrolled} />
      <SectionWrapper sectionClass="block lg:hidden bg-primary relative">
        <Clouds scrolled={scrolled} width={width} className='absolute h-32 w-full top-40 overflow-hidden ' />
        <HeroSectionFirstContent />
      </SectionWrapper>
      <SectionWrapper sectionClass="block lg:hidden bg-secondary">
        <HeroSectionSecondContent />
      </SectionWrapper>
      <Characters scrolled={scrolled} width={width} />
      <Venture scrolled={scrolled} width={width} />
      <Jobs scrolled={scrolled} width={width} />
      <OurWorld scrolled={scrolled} width={width} />
      <Stories scrolled={scrolled} width={width} />
      <JoinUs scrolled={scrolled} width={width} />
      <Footer />
      <div
        className={`h-[5000px] ${width && 
          scrolled < 1350 && width > 1024 ? "block" : "hidden"
        }`}
      />
    </div>
  );
}
