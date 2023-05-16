import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import balloon from '../../../public/balloons.svg'
import Joblist from '../atoms/Joblist'
import Glassessvg from '../atoms/Svg/Glassessvg'
import Pizzasvg from '../atoms/Svg/Pizzasvg'
import Popup from '../atoms/Reusable/Popup'

interface Props {
    scrolled: number
}

const Jobs = <T extends DOMRect>({scrolled}: Props) => {

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
      className={`bg-secondary relative ${
        scrolled < 1350 ? "hidden" : "block"
      }`}
    >
      <Glassessvg />
      <Pizzasvg className="right-0 top-[450px] w-[236px] h-auto" />

      <div className="flex">
        <div
          className="w-5/12 relative top-[-95px] z-20 text-white"
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
          <span className="absolute"> hello</span>
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