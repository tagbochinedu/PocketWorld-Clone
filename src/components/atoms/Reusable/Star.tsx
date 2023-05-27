import React from 'react'

interface Props {
    text: string
    className: string
}

const Star = ({text, className}: Props) => {
  return (
    <div
      className={`bg-[url('https://assets.website-files.com/616d6bd0f145779c3a8a92eb/6463df24f667cf705d5a52fb_Shape%20(1).svg')] bg-contain bg-no-repeat bg-center text-xl font-bold font-gt w-24 h-24 flex justify-center items-center absolute ${className}`}
    >
      ${text}
    </div>
  );
}

export default Star