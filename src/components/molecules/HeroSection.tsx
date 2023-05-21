import HeroSectionFirstContent from "../atoms/HeroSection/HeroSectionFirstContent";
import HeroSectionSecondContent from "../atoms/HeroSection/HeroSectionSecondContent";
import SectionWrapper from "../atoms/Reusable/SectionWrapper";
import { useScrollAuth } from "@/context/ScrollContext";


const HeroSection = () => {
  const { hero } = useScrollAuth();
  return (
    <SectionWrapper
      sectionClass={`hidden lg:block ${
        hero === '1'
          ? "fixed bg-primary top-[0px] left-0 right-0"
          : hero === 'fixed2'
          ? "fixed bg-secondary top-0 left-0 right-0 "
          : " pt-[1350px] relative bg-secondary overflow-hidden "
      }`}
     
    >
      {hero === '1' ? (
        <HeroSectionFirstContent />
      ) : (
        <HeroSectionSecondContent />
      )}
    </SectionWrapper>
  );
};

export default HeroSection;
