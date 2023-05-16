import React, { useState, useEffect } from "react";
import Logosvg from "./Svg/Logosvg";
import { navlinks } from "@/lib/data";
import Link from "next/link";

interface Props {
  scrolled: number;
}

const Header = ({ scrolled }: Props) => {
  const [navInView, setNavInView] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  

  useEffect(() => {
  
    // only trigger if scrolled more than delta
    if (Math.abs(lastScrollY - scrolled)) {
      // scroll down -> hide nav bar
      if (scrolled > lastScrollY) {
        setNavInView(false);
      }
      // scroll up -> show nav bar
      else if (scrolled < lastScrollY) {
        setNavInView(true);
      }
      setLastScrollY(scrolled);
   
  }
  }, [scrolled, lastScrollY]);

  return (
    <header
      className={`fixed z-50 left-0 right-0 ransition-all ease-linear duration-[300ms] ${
        navInView ? "top-[20px]" : "top-[-100px]"
      }`}
    >
      <div className="mx-10 bg-primary rounded-l-full rounded-r-full ">
        <div className="max-w-[1340px] mx-auto pt-[34px] px-10 pb-6 flex justify-between">
          <div className="w-fit">
            <Logosvg />
          </div>
          <nav className="w-3/12 text-white font-gtb font-semibold">
            <ul className=" flex justify-between">
              {navlinks.map((navlink, index) => (
                <li key={index} className="text-sm">
                  <Link href={`/${navlink.link}`}>{navlink.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
