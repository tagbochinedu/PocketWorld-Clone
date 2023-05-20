import React, { useState, useEffect } from "react";
import Logosvg from "./Svg/Logosvg";
import hamburger from '../../../public/hamburger.svg'
import { navlinks } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { useScrollAuth } from "@/context/ScrollContext";


const Header = () => {
  
  const { navInView } = useScrollAuth();
  

  return (
    <header
      className={`fixed z-50 left-0 right-0 ransition-all ease-linear duration-[300ms] ${
        navInView ? "top-[0px] lg:top-[20px]" : "top-[-100px]"
      }`}
    >
      <div className="mx-0 lg:mx-10 bg-primary lg:rounded-l-full lg:rounded-r-full ">
        <div className="max-w-[1340px] mx-auto  px-7 lg:px-10 py-4 lg:py-6 flex justify-between items-center">
          <div className="w-fit">
            <Logosvg className="w-auto h-auto"/>
          </div>
          <nav className="w-3/12 text-white font-gtb font-semibold hidden lg:block">
            <ul className=" flex justify-between ">
              {navlinks.map((navlink, index) => (
                <li key={index} className="text-sm">
                  <Link href={`/${navlink.link}`}>{navlink.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="block lg:hidden"><Image src={hamburger} alt='hamburger icon'/></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
