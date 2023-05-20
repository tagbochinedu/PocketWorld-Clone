import React, { useEffect, useState, useCallback } from "react";
import PlanetMansvg from "../atoms/Svg/PlanetMansvg";
import PlanetWomansvg from "../atoms/Svg/PlanetWomansvg";
import Popup from "../atoms/Reusable/Popup";
import { useScrollAuth } from "@/context/ScrollContext";

const JoinUs = <T extends DOMRect>() => {
  const { char, scrolled } = useScrollAuth();
  const [element, setElement] = useState<HTMLDivElement | null>(null);
  const [rect, setRect] = useState<T | null>(null);
  const [animationState, setAnimationState] = useState(false);

  useEffect(() => {
   if (element) {
     const container = element.getBoundingClientRect();
     setRect(container as T);
     if (rect && rect.y < 700 && rect.y > 0) {
       setAnimationState(true);
     }
   }
  }, [scrolled]);

  return (
    <section
      className={`bg-[#ea88ff] relative py-28 z-20 lg:rounded-b-[120px] lg:mb-[95vh]  ${
        char ? "block" : "hidden"
      }`}
    >
      <div className="mx-auto max-w-[1340px] px-7 lg:px-10 text-white">
        <h2 className="text-[120px] lg:text-[160px] font-normal leading-[100px] lg:leading-[140px] font-gt pb-64">
          Interested in working with us?
        </h2>
        <div className="lg:flex" ref={setElement}>
          <div className="w-full lg:w-4/12 relative">
            <Popup
              divclassName={`left-[20%] lg:left-0 mx-auto ${
                animationState
                  ? "top-[-76px] opacity-100"
                  : " top-[-5px] opacity-0"
              }`}
              nameText="pocket_magic
"
              messageText={
                <span>
                  We&apos;re building the future of social experiences 🚀
                </span>
              }
              ballclassName="bottom-[-7.5px] left-[45%]"
            />
            <PlanetMansvg className="mx-auto" />
          </div>
          <div className="w-full lg:w-4/12 flex flex-col justify-center pt-16 pb-44 lg:py-0">
            <h3 className="font-gtb font-black text-5xl leading-[56px] text-center mb-6">
              Create new <br className="hidden lg:block" />
              worlds with us.
            </h3>
            <div className="flex justify-center ">
              <a
                href="https://pocketworlds.notion.site/Open-positions-ae368383a74e4d75a7cb751e4de7644b"
                target="_blank"
                className="text-center"
              >
                <button className="rounded-full bg-primary py-3 w-36 text-base font-bold font-gt group-hover:shadow-joblist relative top-[0px] left-[0px] group-hover:shadow-joblist group-hover:top-[5px] group-hover:left-[5px] group-hover:text-secondary transition-all ease-linear duration-[250ms]">
                  Apply
                </button>{" "}
              </a>
            </div>
          </div>
          <div className="w-full lg:w-4/12 relative">
            <Popup
              divclassName={` delay-[900ms] ${
                animationState
                  ? "top-[-115px] left-[35%] lg:left-[30px] opacity-100 animate-chat6"
                  : "top-[8px] opacity-0"
              }`}
              nameText="barb_stacy78
"
              messageText="Join us!"
              ballclassName="bottom-[-7.5px] left-[27%] hidden"
            />{" "}
            <Popup
              divclassName={`delay-[1800ms] ${
                animationState
                  ? "top-[-60px] left-[35%] lg:left-[30px] opacity-100 animate-chat7"
                  : "top-[-5px] opacity-0"
              }`}
              nameText="barb_stacy78
"
              messageText="Wild child or more subdude, you'll find your place."
              ballclassName="bottom-[-7.5px] left-[27%]"
            />
            <PlanetWomansvg className="mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
