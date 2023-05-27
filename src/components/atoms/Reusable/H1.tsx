import React from 'react'

interface Props {
    spanclassName1: string,
    spancontent1: string,
    spanclassName2: string,
    spancontent2: string,
    spanclassName3: string,
    spancontent3: string,
}

const H1 = ({spanclassName1, spanclassName2, spanclassName3, spancontent1, spancontent2, spancontent3}: Props) => {
  return (
    <h1 className="font-black text-[80px] md:text-[120px] lg:text-[180px] leading-[78px] md:leading-[110px] lg:leading-[160px]  font-gtb">
      <span className={spanclassName1}>{spancontent1}</span>
      <span className={spanclassName2}>{spancontent2}</span>
      <span className={spanclassName3}>{spancontent3}</span>
    </h1>
  );
}

export default H1