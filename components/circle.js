import { useState, useEffect } from "react"

export default function Circle(props) {

    // const [circleOpacity, setCircleOpacity] = useState(0.8)
    // const [circleBlur, setCircleBlur] = useState(0)
    const [circleStyle, setCircleStyle] = useState({})

    // useEffect(() => {
    //     window.addEventListener("scroll", changeStyle);
    // }, []);
    
    // function changeStyle() {
    //     setCircleOpacity(0.8/((window.scrollY/30)+0.001))
    //     setCircleBlur(window.scrollY/400)
    // }


    useEffect(() => {
        if (props.contact) {
            setCircleStyle({opacity: 0.2})
        }
        else {
            setCircleStyle({})      
        }
    }, [])

    return(
        <>
            <div className="circle" style={circleStyle}/>
        </>
    )
}