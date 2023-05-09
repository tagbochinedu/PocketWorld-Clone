import React from 'react'
import SectionWrapper from '../atoms/Reusable/SectionWrapper'
import Onesvg from '../atoms/Svg/Onesvg';
import Twosvg from '../atoms/Svg/Twosvg';
import Threesvg from '../atoms/Svg/Threesvg';
import Foursvg from '../atoms/Svg/Foursvg';
import Fivesvg from '../atoms/Svg/Fivesvg';


interface Props {
  scrolled: number;
}

const Characters = ({scrolled}: Props) => {
  return (
    <SectionWrapper
      sectionClass={`bg-secondary pt-[390px] text-center bg-[url('https://assets.website-files.com/616d6bd0f145779c3a8a92eb/618bbdca291add0fb9ea77ff_pocket.svg')] bg-cover bg-top text-white text-5xl font-black ${scrolled<1350? 'hidden':'block'}`}
      divClass="mx-auto max-w-[1340px] px-10"
    >
        <div className='flex justify-between relative'>
      <Onesvg/>
      <Twosvg/>
      <Threesvg/>
      <Foursvg/>
      <Fivesvg/></div>
      <div className='h-[600px]'/>
    </SectionWrapper>
  );
}

export default Characters