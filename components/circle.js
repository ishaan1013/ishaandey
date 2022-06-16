import { useState, useEffect } from 'react'

export default function Circle() {

    const [circleOpacity, setCircleOpacity] = useState(0.8)
    const [circleBlur, setCircleBlur] = useState(0)

    useEffect(() => {
        window.addEventListener("scroll", changeStyle);
    }, []);
    
    function changeStyle() {
        setCircleOpacity(0.8/((window.scrollY/30)+0.001))
        setCircleBlur(window.scrollY/400)
    }

    const circleStyle = {
        // opacity: circleOpacity,
        filter: "blur("+circleBlur+"px)",
    }

    return(
        <>
            <div className="circle" style={circleStyle}/>
        </>
    )
}