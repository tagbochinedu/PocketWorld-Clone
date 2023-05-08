import React from 'react'

interface Props {
    sectionClass: string;
    divClass : string;
    children: React.ReactNode
}

const SectionWrapper = ({sectionClass, divClass, children}: Props) => {
  return (
    <section className={` ${sectionClass}`}>
      <div className={` ${divClass}`}>{children}</div>
    </section>
  );
}

export default SectionWrapper