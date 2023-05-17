import React, {useEffect, useState} from 'react'
import PlanetMansvg from '../atoms/Svg/PlanetMansvg';
import PlanetWomansvg from '../atoms/Svg/PlanetWomansvg';
import Popup from '../atoms/Reusable/Popup';

interface Props {
  scrolled: number;
}

const JoinUs = <T extends DOMRect>({scrolled}:Props) => {

  const [element, setElement] = useState<HTMLDivElement | null>(null);
  const [rect, setRect] = useState<T | null>(null);
  const [animationState, setAnimationState] = useState(false);

  useEffect(() => {
    if (element) {
      const container = element.getBoundingClientRect();
      setRect(container as T);
      console.log(element, rect);
      if (rect && rect.y < 700 && rect.y > 0) {
        setAnimationState(true);
      }
    }
  }, [scrolled, element, rect]);


  return (
    <section
      className={`bg-[#ea88ff] relative py-28 z-20 rounded-b-[120px] mb-[95vh]  ${
        scrolled < 1350 ? "hidden" : "block"
      }`}
    >
      <div className="mx-auto max-w-[1340px] px-10 text-white">
        <h2 className="text-[160px] font-normal leading-[140px] font-gt pb-64">
          Interested in working with us?
        </h2>
        <div className="flex" ref={setElement}>
          <div className="w-4/12 relative">
            <Popup
              divclassName={`${
                animationState
                  ? "top-[-76px] opacity-100"
                  : "top-[-5px] opacity-0"
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
            <PlanetMansvg />
          </div>
          <div className="w-4/12 flex flex-col justify-center">
            <h3 className="font-gtb font-black text-5xl leading-[56px] text-center mb-6">
              Create new <br />
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
          <div className="w-4/12 relative">
            <Popup
              divclassName={`delay-[900ms] ${
                animationState
                  ? "top-[-115px] left-[30px] opacity-100 animate-chat6"
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
                  ? "top-[-60px] left-[30px] opacity-100 animate-chat7"
                  : "top-[-5px] opacity-0"
              }`}
              nameText="barb_stacy78
"
              messageText="Wild child or more subdude, you'll find your place."
              ballclassName="bottom-[-7.5px] left-[27%]"
            />
            <PlanetWomansvg />
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinUs