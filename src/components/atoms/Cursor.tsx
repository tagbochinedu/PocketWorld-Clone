import React, { useState, useEffect, MouseEvent } from "react";
import { useCursorAuth } from "@/context/CursorContext";

interface Props {
  scrolled: number
}

const Cursor = ({scrolled}: Props) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const {mouseHover} = useCursorAuth()
    
 useEffect(() => {
   const mousemovehandler =(event: any) => {
     const { x, y } = event;
     console.log(event.x, event.y)
     setMousePosition({ x: x, y:y });
   }

   document.addEventListener("mousemove", mousemovehandler );

   return () => {
     document.removeEventListener("mousemove", mousemovehandler);
   };
 }, []);




  return (
    <>
      <div
        className={`pointer-events-none absolute rounded-full  bg-primary z-10 ${scrolled<1300? 'hidden':''}`}
        style={{
          left: mouseHover ? `${mousePosition.x}px` : `${mousePosition.x}px`,
          top: mouseHover ? `${mousePosition.y}px` : `${mousePosition.y}px`,
          transition: "all ease-out 0.3s",
          width: mouseHover ? "500px" : "80px",
          height: mouseHover ? "500px" : "80px",
          transform: mouseHover
            ? "translate(-250px, -250px)"
            : "translate(-40px, -40px)",
        }}
      />
    </>
  );
}

export default Cursor