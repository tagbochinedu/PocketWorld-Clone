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
import { useScrollAuth } from "@/context/ScrollContext";

export default function Home() {
  const { blank } = useScrollAuth();
 
  return (
    <div className=" overflow-hidden">
      <Clouds className='overflow-hidden hidden lg:block'/>
      <Mouthsvg  />
      
      <HeroSection />
      <SectionWrapper sectionClass="block lg:hidden bg-primary relative">
        <Clouds className='absolute h-32 w-full top-40 overflow-hidden ' />
        <HeroSectionFirstContent />
      </SectionWrapper>
      <SectionWrapper sectionClass="block lg:hidden bg-secondary">
        <HeroSectionSecondContent />
      </SectionWrapper>
      <Characters/>
      <Venture />
      <Jobs  />
      <OurWorld/>
      <Stories  />
      <JoinUs  />
     
      <div
        className={`h-[5000px] ${blank? "block" : "hidden"
        }`}
      />
    </div>
  );
}
