import React from 'react'

interface Details {
    divclassName: string;
    nameText: string;
    messageText: string;
    ballclassName: string
}

const Popup = ({divclassName, nameText, messageText, ballclassName}:Details) => {
  return (
    <div
      className={`px-3.5 py-2 bg-white rounded-2xl w-fit border-[2px] border-[#dbe1ed] absolute transition-all ease-in-out duration-[650ms] ${divclassName}`}
    >
        <div className='flex'>
      <span className="text-[#e75879] font-gt font-bold pr-2">{nameText}</span>
      <span className="font-gt text-base font-medium leading-6 text-[#0a1033] whitespace-nowrap">
        {messageText}
      </span></div>
      <div
        className={`border-b-[2px] border-b-[#dbe1ed] absolute rounded-b-full bg-white w-3 h-3 ${ballclassName}`}
      />
    </div>
  );
}

export default Popup