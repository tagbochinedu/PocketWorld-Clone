import { useState} from "react";
import DottedMap from "dotted-map";
import { locations} from "@/lib/data";


const map = new DottedMap({ height: 60, grid: "vertical" });


map.addPin( { lng: -122.4194, lat: 37.7749, data: "San Francisco, CA" });
map.addPin({
  lng: -82.9988,
  lat: 39.9612,
  data: "Columbus, OH",
});
map.addPin({
  lng: -78.6382,
  lat: 35.7796,
  data: "Raleigh, NC",
});
map.addPin({
  lng: -81.9498,
  lat: 28.0395,
  data: "Lakeland, FL",
});
map.addPin({
  lng: -87.6298,
  lat: 41.8781,
  data: "Chicago, IL",
});
map.addPin({
  lng: -79.9959,
  lat: 40.4406,
  data: "Pittsburgh, PA",
});
map.addPin({
  lng: -99.1332,
  lat: 19.4326,
  data: "Mexico City, MX",
});
map.addPin({
  lng: -97.7431,
  lat: 30.2672,
  data: "Austin, TX",
});
map.addPin({
  lng: -115.1391,
  lat: 36.1716,
  data: "Las Vegas, NV",
});
map.addPin({
  lat: 43.65107,
  lng: -79.347015,
  data: "Toronto, Canada",
});
map.addPin({
  lat: 55.6761,
  lng: 12.5683,
  data: "Copenhagen, Denmark",
});
map.addPin({
  lat: 40.7128,
  lng: -74.006,
  data: "New York, NY",
});
map.addPin({
  lat: 51.5072,
  lng: -0.1276,
  data: "London, England",
});
map.addPin({
  lat: 52.3676,
  lng: -4.9041,
  data: "Amsterdam, Netherlands",
});
map.addPin({
  lat: 59.437,
  lng: 24.7536,
  data: "Talinn, Estonia",
});
map.addPin({
    lat: 52.2297,
    lng: 21.0122,
    data: "Warsaw, Poland",
  })
map.addPin({
  lat: 50.4501,
  lng: 30.5234,
  data: "Kyiv, Ukraine",
});
map.addPin({
  lat: 14.5995,
  lng: 120.9842,
  data: "Manilla, PH",
});
map.addPin({
  lng: 15.9819,
  lat: 45.815,
  data: "Zagreb, Croatia",
});
 map.addPin({
    lng: -58.3816,
    lat: -34.6037,
    data: "Buenos Aires, Argentina",
  })





const points = map.getPoints();
const pins = points.filter((point) => point.data);

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


  const viewBox = `${pin.x - size.x / 2 + offset.x} ${
    pin.y - size.y / 5 + offset.y
  } ${size.x} ${size.y}`;
  return (
    <div className="relative max-h-[500px]  lg:max-h-[800px] overflow-hidden">
      <svg
        viewBox={viewBox}
        style={{ background: svgOptions.backgroundColor }}
        className="relative z-30"
      >
        {points.map((point) => (
          <circle
          key={point.x}
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
