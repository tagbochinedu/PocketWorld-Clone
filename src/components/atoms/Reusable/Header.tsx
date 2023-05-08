import React from "react";
import Logosvg from "../Svg/Logosvg";
import { navlinks } from "@/lib/data";
import Link from "next/link";

const Header = () => {
  return (
    <header className="max-w-[1340px] mx-auto pt-[34px] px-10 pb-6 flex justify-between absolute z-10 top-0 left-0 right-0">
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
    </header>
  );
};

export default Header;
