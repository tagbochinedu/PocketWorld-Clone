import React, {useState, useEffect, useCallback} from 'react'
import Image from 'next/image'
import balloon from '../../../public/balloons.svg'
import Joblist from '../atoms/Joblist'
import Glassessvg from '../atoms/Svg/Glassessvg'
import Pizzasvg from '../atoms/Svg/Pizzasvg'
import Popup from '../atoms/Reusable/Popup'
import { useScrollAuth } from "@/context/ScrollContext";

const Jobs = <T extends DOMRect>() => {
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
      className={`bg-secondary relative ${
       char
          ? "block"
          : "hidden"
      }`}
    >
      <Glassessvg />
      <Pizzasvg className="right-0 top-[450px] w-[236px] h-auto" />

      <div className="flex pb-20 lg:pb-0">
        <div
          className="w-5/12 relative top-[-95px] z-20 text-white hidden lg:block"
          ref={setElement}
        >
          <Popup
            divclassName={`delay-[4500ms] ${
              animationState
                ? "top-[200px] left-[130px] opacity-100 animate-chat4"
                : "top-[310px] opacity-0"
            }`}
            nameText="squeezyy_bob"
            messageText="jeez... brah!! So many jobs 👾"
            ballclassName="bottom-[-7.5px] left-[27%] hidden"
          />{" "}
          <Popup
            divclassName={`delay-[900ms] ${
              animationState
                ? "top-[255px] left-[130px] opacity-100 animate-chat5"
                : "top-[310px] opacity-0"
            }`}
            nameText="squeezyy_bob
"
            messageText="r u going to apply??"
            ballclassName="bottom-[-7.5px] left-[75%]"
          />{" "}

          <Image
            src={balloon}
            alt="balloon monster"
            className="w-full h-auto"
          />
        </div>
        <Joblist />
      </div>
    </section>
  );}
   export default Jobs