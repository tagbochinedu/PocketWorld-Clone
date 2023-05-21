import React from 'react'

interface Details {
    divclassName: string;
    nameText: string;
    messageText: string | React.ReactNode;
    ballclassName: string
}

const Popup = ({divclassName, nameText, messageText, ballclassName}:Details) => {
  return (
    <div
      className={`px-2 lg:px-3.5 py-0.5 lg:py-2 bg-white rounded-2xl w-fit border-[2px] border-[#dbe1ed] absolute transition-all ease-in-out duration-[650ms] ${divclassName}`}
    >
        <div className='flex'>
      <span className="text-[#e75879] font-gt font-bold pr-1 lg:pr-2">{nameText}</span>
      <span className="font-gt text-sm lg:text-base font-medium leading-6 text-[#0a1033] whitespace-nowrap">
        {messageText}
      </span></div>
      <div
        className={`border-b-[2px] border-b-[#dbe1ed] absolute rounded-b-full bg-white w-3 h-3 ${ballclassName}`}
      />
    </div>
  );
}

export default Popup