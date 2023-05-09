import HeroSectionFirstContent from "../atoms/HeroSection/HeroSectionFirstContent";
import HeroSectionSecondContent from "../atoms/HeroSection/HeroSectionSecondContent";
import SectionWrapper from "../atoms/Reusable/SectionWrapper";

interface Props {
  scrolled: number;
}

const HeroSection = ({ scrolled }: Props) => {
  return (
    <SectionWrapper
      sectionClass={`${
        scrolled <= 1300
          ? "fixed bg-primary top-[0px] left-0 right-0"
          : scrolled > 1300 && scrolled < 1350
          ? "fixed bg-secondary top-0 left-0 right-0"
          : " pt-[1350px] bg-secondary overflow-hidden"
      }`}
      divClass="mx-auto max-w-[1340px] px-10"
    >
      {scrolled <= 1300 ? (
        <HeroSectionFirstContent />
      ) : (
        <HeroSectionSecondContent />
      )}
    </SectionWrapper>
  );
};

export default HeroSection;
