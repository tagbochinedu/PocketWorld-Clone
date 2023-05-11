import { useState, useEffect } from "react";
import DottedMap from "dotted-map";
import { locations, cities } from "@/lib/data";
import Koalasvg from "./Svg/Koalasvg";
import Chickensvg from "./Svg/Chickensvg";
import Milkshakesvg from "./Svg/Milkshakesvg";
import Dogsvg from "./Svg/Dogsvg";

const map = new DottedMap({ height: 60, grid: "vertical" });




cities.map((city) => map.addPin(city));


const points = map.getPoints();
const pins = points.filter((point) => point.data);

// const pinsMap = pins.reduce((acc, point) => ({
//   ...acc,
//   [point.data]: point
// }),{} as Record<string, Point>);

const svgOptions = {
  backgroundColor: "transparent",
  color: "#0A1033",
  radius: 0.35,
  
};

const svgMap = map.getSVG({
  ...svgOptions,
  shape: "circle",
  
});

const size = {
  x: 135,
  y: 135,
};

const offset = {
  x: -9,
  y: 0,
};

export default function Map() {
  const [pin] = useState(pins[0]);
  const [whitepins] = useState(locations);

  useEffect(()=>{console.log(pins, points)},[])

  const viewBox = `${pin.x - size.x / 2 + offset.x} ${
    pin.y - size.y / 5 + offset.y
  } ${size.x} ${size.y}`;
  return (
    <div className="relative">
      <svg
        viewBox={viewBox}
        style={{ background: svgOptions.backgroundColor }}
        className="relative z-30"
      >
        {points.map((point) => (
          <circle
            cx={point.x}
            cy={point.y}
            r={svgOptions.radius}
            fill={whitepins.includes(point.data) ? "#ffffff" : svgOptions.color}
            style={{ opacity: 1 }}
          />
        ))}
      </svg>
      <div className="flex">
        <div className="w-3/12">
          <div className="relative z-20 h-[240px] flex flex-col justify-center rounded-[500px] w-11/12 mx-auto bg-primary font-gt text-[104px] font-bold leading-[126px] text-white">
            <Koalasvg />
            <p className="w-fit mx-auto">100</p>
            <p className="w-fit mx-auto text-lg leading-8">People</p>
          </div>
        </div>
        <div className="w-3/12">
          <div className="relative z-20 h-[240px] flex flex-col justify-center rounded-[500px] w-11/12 mx-auto bg-primary font-gt text-[104px] font-bold leading-[126px] text-white">
            <Chickensvg />
            <p className="w-fit mx-auto">9</p>
            <p className="w-fit mx-auto text-lg leading-8">Timezones</p>
          </div>
        </div>
        <div className="w-3/12">
          <div className="relative z-20 h-[240px] flex flex-col justify-center rounded-[500px] w-11/12 mx-auto bg-primary font-gt text-[104px] font-bold leading-[126px] text-white">
            <Milkshakesvg/>
            <p className="w-fit mx-auto">17</p>
            <p className="w-fit mx-auto text-lg leading-8">Countries</p>
          </div>
        </div>
        <div className="w-3/12">
          <div className="relative z-20 h-[240px] flex flex-col justify-center rounded-[500px] w-11/12 mx-auto bg-primary font-gt text-[104px] font-bold leading-[126px] text-white">
            <Dogsvg/>
            <p className="w-fit mx-auto">35</p>
            <p className="w-fit mx-auto text-lg leading-8">Dogs & Cats</p>
          </div>
        </div>
      </div>
    </div>
  );
}
