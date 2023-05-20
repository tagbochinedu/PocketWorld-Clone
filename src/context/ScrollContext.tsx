import React, { useState, useContext, useEffect } from "react";

interface Scroll {
  scrolled: number;
  cloudHidden: boolean;
  hero: string;
  char: boolean;
  blank: boolean;
  navInView: boolean
}

interface Children {
  children: React.ReactNode;
}

const ScrollContext = React.createContext<Scroll>({
  scrolled: 0,
  cloudHidden: false,
  hero: "1",
  char: false,
  blank: false,
  navInView: false,
});

export function useScrollAuth() {
  return useContext(ScrollContext);
}

export const ScrollProvider = ({ children }: Children) => {
  const [scrolled, setScrolled] = useState(0);
  const [width, setWidth] = useState(0);
  const [cloudHidden, setCloudHidden] = useState(false);
  const [hero, setHero] = useState("1");
  const [char, setChar] = useState(false);
  const [blank, setBlank] = useState(false);
  const [navInView, setNavInView] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0)

  const handleScroll = () => {
    setScrolled(window.scrollY);
  };
  const handleResize = () => {
    if (width) {
      setWidth(window.innerWidth);
    }
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    if (scrolled > 300 && width && width > 1024) {
      setCloudHidden(true);
      console.log(cloudHidden);
    } else if (scrolled < 300 || (width && width < 1024)) {
      setCloudHidden(false);
    }

    if (scrolled <= 1300) {
      setHero("1");
    } else if (scrolled > 1300 && scrolled < 1350) {
      setHero("fixed2");
    } else {
      setHero("2");
    }

    if (
      (scrolled > 1350 && width && width > 1024) ||
      (scrolled >= 0 && width && width < 1024)
    ) {
      setChar(true);
    } else {
      setChar(false);
    }

    if (scrolled < 1350 && width&& width > 1024) {
      setBlank(true);
    } else {
      setBlank(false);
    }

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
  }, [scrolled, width]);


  const value = { cloudHidden, scrolled, hero, char, blank, navInView };
  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
};
