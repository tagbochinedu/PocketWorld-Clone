import { useState, useEffect } from "react";
import DottedMap from "dotted-map";
import { locations, cities } from "@/lib/data";


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
    <div className="relative max-h-[800px] overflow-hidden">
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
            className=""
          />
        ))}
      </svg>
      
    </div>
  );
}
