import React, {useRef} from 'react'

const Cursor = () => {
  const delay = 18
  const cursorVisible = useRef(true)
    const cursorEnlarged = useRef(true)
    const endX = useRef(window.innerWidth/2)
    const endY = useRef(window.innerHeight/2)
    const _x = useRef(0)
    const _y = useRef(0)
    const requestRef = useRef(null)

    const dot = useRef<HTMLInputElement>(null)
    const dotOutline = useRef(null)

    

    const toggleCursorVisibility =() =>{
      if(cursorVisible.current) {
        dot.current.style.opacity = 1
      }
    }

  return (
    <>
        <div 
  
        className='pointer-events-none absolute top-[50%] left-[50%] -translate-x-[50%] -translate-[50%] rounded-full transition-all ease-in-out duration-300 w-10 h-10 bg-primary'/>
    </>
  )
}

export default Cursor