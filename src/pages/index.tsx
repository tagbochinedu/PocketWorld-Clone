import { useEffect, useState } from "react";
import Image from "next/image";
import Mouthsvg from "../components/atoms/Svg/Mouthsvg";
import Header from "@/components/atoms/Reusable/Header";
import HeroSection from "@/components/molecules/HeroSection";
import cloud1 from "../../public/cloud1.png";
import cloud2 from "../../public/cloud2.png";
import cloud3 from "../../public/cloud3.png";
import cloud5 from "../../public/cloud5.png";
import cloud4 from "../../public/cloud4.png";
import Characters from "@/components/molecules/Characters";
import Venture from "@/components/molecules/Venture";
import Jobs from "@/components/molecules/Jobs";
import OurWorld from "@/components/molecules/OurWorld";

export default function Home() {
  const [scrolled, setScrolled] = useState(0);

  const handleScroll = () => {
    setScrolled(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <>
      <Mouthsvg size={scrolled} />
      <Header />
      <HeroSection scrolled={scrolled} />
      <Characters scrolled={scrolled} />
      <Venture scrolled={scrolled} />
      <Jobs scrolled={scrolled} />
      <OurWorld scrolled={scrolled} />
      <div className={`h-[5000px] ${scrolled < 1350 ? "block" : "hidden"}`} />
    </>
  );
}

/*<Image
        src={cloud1}
        alt="floating cloud 1"
        className="absolute top-[100px] w-[120px] h-20 left-[50%] opacity-90 animate-cloud1"
      />
      <Image
        src={cloud2}
        width={100}
        height={70}
        alt="floating cloud2"
        className="absolute top-[130px] left-[120px] opacity-90 hidden "
      />{" "}
      <Image
        src={cloud3}
        width={200}
        height={140}
        alt="floating cloud 1"
        className="absolute top-[200px] left-[300px] z-20 opacity-90 hidden"
      />{" "}
      <Image
        src={cloud4}
        width={100}
        height={70}
        alt="floating cloud 1"
        className="absolute top-20 left-20 opacity-90 hidden "
      />{" "}
      <Image
        src={cloud5}
        width={100}
        height={70}
        alt="floating cloud 1"
        className="absolute top-20 left-20 opacity-90 hidden "
      />
      */
