import React, { useState, useEffect, useCallback } from "react";
import SectionWrapper from "../atoms/Reusable/SectionWrapper";
import Onesvg from "../atoms/Svg/Onesvg";
import Twosvg from "../atoms/Svg/Twosvg";
import Threesvg from "../atoms/Svg/Threesvg";
import Foursvg from "../atoms/Svg/Foursvg";
import Fivesvg from "../atoms/Svg/Fivesvg";
import { Props } from "@/lib/data";

const Characters = <T extends DOMRect>({ scrolled, width }: Props) => {
  const [element, setElement] = useState<HTMLDivElement | null>(null);
  const [rect, setRect] = useState<T | null>(null);
  const [animationState, setAnimationState] = useState(false);

  const animate = useCallback(() => {
    if (element) {
      const container = element.getBoundingClientRect();
      setRect(container as T);
      if (rect && rect.y < 700 && rect.y > 0) {
        setAnimationState(true);
      }
    }
  }, [rect, scrolled, element]);

  useEffect(() => {animate()}, [scrolled]);

  return (
    <SectionWrapper
      sectionClass={`text-white bg-secondary pt-[100px] lg:pt-[180px] bg-[url('https://assets.website-files.com/616d6bd0f145779c3a8a92eb/618bbdca291add0fb9ea77ff_pocket.svg')] bg-cover bg-top relative ${
        scrolled < 1350 && width > 1024 ? "hidden" : "block"
      }`}
    >
      <div className="flex justify-evenly relative" ref={setElement}>
        <Onesvg state={animationState} />
        <Twosvg state={animationState} />
        <Threesvg state={animationState} />
        <Foursvg state={animationState} />
        <Fivesvg state={animationState} />
      </div>
    </SectionWrapper>
  );
};

export default Characters;
