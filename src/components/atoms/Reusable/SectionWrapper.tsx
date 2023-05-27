import React from 'react'

interface Props {
    sectionClass: string;
    children: React.ReactNode
}

const SectionWrapper = ({sectionClass,children}: Props) => {
  return (
    <section className={`${sectionClass}`}>
      <div className="mx-auto max-w-[1340px] px-7 lg:px-10">{children}</div>
    </section>
  );
}

export default SectionWrapper