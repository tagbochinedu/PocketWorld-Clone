import React, { useState, useEffect, useRef } from "react";
import { useCursorAuth } from "@/context/CursorContext";


interface Props {
  scrolled: number
}

const Cursor = ({scrolled}: Props) => {
   const [width, setWidth] = useState({ x: 0, y: 0 });
   const [y, setY] = useState(0)
   const {mouseHover} = useCursorAuth()

     const cursor = useRef<HTMLDivElement | null>(null!)
     const endX = useRef(width.x)
     const endY = useRef(width.y)
    
    
 const handleResize = () => {
      setWidth({x:window.innerWidth/2, y:window.innerWidth/2});
    };

useEffect(() => {
  const mousemovehandler =(event: any) => {
    endX.current = event.x;
    endY.current = event.y
  window.addEventListener("resize", handleResize);
    const {pageY } = event;
    setY(pageY)  
  }

 document.addEventListener("mousemove", mousemovehandler );

  return () => {
    document.removeEventListener("mousemove", mousemovehandler);
  };
}, [scrolled,width]);




  return (
    <div
      className={`absolute rounded-full bg-primary z-20 ${
        scrolled < 1300 ? "hidden" : ""
      } ${y>9000 ? "hidden" : ""} `}
      style={{
        left: `${endX.current}px`,
        top: `${endY.current}px`,
        transition: "all linear 0.3s",
        width: mouseHover ? "500px" : "80px",
        height: mouseHover ? "500px" : "80px",
        transform: mouseHover
          ? "translate(-250px, -250px)"
          : "translate(-40px, -40px)",
      }}
     ref={cursor}
    />
  );
}

export default Cursor