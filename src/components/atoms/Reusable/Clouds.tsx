import React from 'react'
import Image from 'next/image';
import cloud1 from "../../../../public/cloud1.png";
import cloud2 from "../../../../public/cloud2.png";
import cloud3 from "../../../../public/cloud3.png";
import cloud5 from "../../../../public/cloud5.png";
import cloud4 from "../../../../public/cloud4.png";
import { useScrollAuth } from "@/context/ScrollContext";

interface Props {
  className: string
}


const Clouds = ({className}:Props) => {
const {cloudHidden} = useScrollAuth()

  return (
    <div className={className}>
      {" "}
      <Image
        src={cloud1}
        alt="floating cloud 1"
        className={`absolute lg:fixed top-[100px] w-[120px] h-20 left-[50%] opacity-90 animate-cloud1  ${
          cloudHidden ? "hidden" : ""
        }`}
      />
      <Image
        src={cloud2}
        width={100}
        height={70}
        alt="floating cloud2"
        className={`absolute lg:fixed top-[100px] w-[120px] h-20 left-[10%] opacity-90 animate-cloud2 z-10 ${
          cloudHidden ? "hidden" : ""
        }`}
      />{" "}
      <Image
        src={cloud3}
        width={200}
        height={140}
        alt="floating cloud 1"
        className={`absolute lg:fixed top-[200px] left-[300px] z-20 opacity-90 animate-cloud3 ${
          cloudHidden ? "hidden" : ""
        }`}
      />
      <Image
        src={cloud4}
        width={100}
        height={70}
        alt="floating cloud 1"
        className={`absolute lg:fixed top-20 left-20 z-20 opacity-90 animate-cloud4 ${
          cloudHidden ? "hidden" : ""
        }`}
      />{" "}
      <Image
        src={cloud5}
        width={100}
        height={70}
        alt="floating cloud 1"
        className={`absolute lg:fixed top-20 left-20 opacity-90 z-20  animate-cloud5  ${
          cloudHidden ? "hidden" : ""
        }`}
      />
    </div>
  );
}

export default Clouds