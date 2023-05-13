import React, { useState, useContext } from "react";

interface Cursor {
  mouseHover: boolean;
  enterElement: (enter: boolean) => void;
  viewMouse: (e:any, enter: boolean) => void;
  mouseView: boolean;
  localName: string;
}

interface Children {
     children:React.ReactNode ;
}

const CursorContext = React.createContext<Cursor>({
  mouseHover: false,
  enterElement: () => {},
  mouseView: true,
  viewMouse: () => {},
  localName:''
});

export function useCursorAuth() {
  return useContext(CursorContext);
}

export const CursorProvider= ({ children }:Children)=> {
 const [mouseHover, setMouseHover] = useState(false);
  const [mouseView, setMouseView] = useState(true);
  const [localName, setLocalName] = useState('')

const enterElement= (mouse: boolean) => {
  if (mouse) {
    setMouseHover(true);
  } else {
    setMouseHover(false);
  }
};


const viewMouse = (event:any,  mouse: boolean) => {
  if (mouse) {
    setMouseView(false);
    setLocalName(event.target.localName)
 
  } else {
    setMouseView(true);
    setLocalName('')
  }
};

  const value = { mouseHover, enterElement, mouseView, viewMouse, localName};
  return (
    <CursorContext.Provider value={value}>{children}</CursorContext.Provider>
  );
}
