import React, { useState, useContext } from "react";

interface Cursor {
mouseHover: boolean;
  enterElement: (enter: boolean) => void;
}

interface Children {
     children:React.ReactNode ;
}

const CursorContext = React.createContext<Cursor>({mouseHover: false, enterElement:()=>{}});

export function useCursorAuth() {
  return useContext(CursorContext);
}

export const CursorProvider= ({ children }:Children)=> {
 const [mouseHover, setMouseHover] = useState(false);

const enterElement= (mouse: boolean) => {
  if (mouse) {
    setMouseHover(true);
  } else {
    setMouseHover(false);
  }
};

  const value = { mouseHover, enterElement};
  return (
    <CursorContext.Provider value={value}>{children}</CursorContext.Provider>
  );
}
