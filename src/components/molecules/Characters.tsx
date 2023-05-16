import React, {useState, useEffect} from 'react'
import SectionWrapper from '../atoms/Reusable/SectionWrapper'
import Onesvg from '../atoms/Svg/Onesvg';
import Twosvg from '../atoms/Svg/Twosvg';
import Threesvg from '../atoms/Svg/Threesvg';
import Foursvg from '../atoms/Svg/Foursvg';
import Fivesvg from '../atoms/Svg/Fivesvg';
import { Props } from '@/lib/data';


const Characters = <T extends DOMRect>({scrolled}: Props) => {
const [element, setElement] = useState<HTMLDivElement|null>(null);
const [rect, setRect] = useState<T|null>(null)
const [animationState, setAnimationState] = useState(false)

   useEffect(() => {
     if (element) {
       const container = element.getBoundingClientRect();
       setRect(container as T)
       console.log(element, rect);
       if(rect&& rect.y< 700 && rect.y>0) {
setAnimationState(true)
       }

     }
   }, [scrolled, element, rect]);


  return (
    <SectionWrapper
      sectionClass={`text-white bg-secondary pt-[180px] bg-[url('https://assets.website-files.com/616d6bd0f145779c3a8a92eb/618bbdca291add0fb9ea77ff_pocket.svg')] bg-cover bg-top relative ${
        scrolled < 1350 ? "hidden" : "block"
      }`}
    >
      <div className="flex justify-between relative" ref={setElement}>
        <Onesvg
          state={animationState}
        />
        <Twosvg state={animationState} />
        <Threesvg state={animationState} />
        <Foursvg state={animationState} />
        <Fivesvg state={animationState} />
      </div>
    </SectionWrapper>
  );
}

export default Characters