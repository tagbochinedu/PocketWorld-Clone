import React from 'react'

interface Props {
    spanText: string
    otherText: string
}

const H2 = ({spanText, otherText}: Props) => {
  return (
    <h2 className="text-[14vw] md:text-[90px] lg:text-[100px] font-gt leading-[14vw] md:leading-[100px] mb-10 md:mb-[74px]">
      <span className="block font-bold ">{spanText}:‍</span>{otherText}
    </h2>
  );
}

export default H2