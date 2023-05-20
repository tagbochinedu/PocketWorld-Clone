import React, { useState, useEffect, useRef } from "react";
import { useCursorAuth } from "@/context/CursorContext";
import { useScrollAuth } from "@/context/ScrollContext";


const Cursor = () => {
   const { scrolled } = useScrollAuth();
  const [y, setY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { mouseHover } = useCursorAuth();

  useEffect(() => {
    const mousemovehandler = (event: any) => {
      const { x, y, pageY } = event;
      setY(pageY);
      setMousePosition({ x: x, y: y });
    };

    document.addEventListener("mousemove", mousemovehandler);
  }, []);

  return (
    <div
      className={`absolute rounded-full bg-primary z-20 ${
        scrolled < 1300 ? "hidden" : ""
      } ${y > 9000 ? "hidden" : ""} `}
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        transition: "all linear 0.3s",
        width: mouseHover ? "500px" : "80px",
        height: mouseHover ? "500px" : "80px",
        transform: mouseHover
          ? "translate(-250px, -250px)"
          : "translate(-40px, -40px)",
      }}
    />
  );
};

export default Cursor;
