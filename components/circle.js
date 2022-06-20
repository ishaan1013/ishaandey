import { useState, useEffect } from "react"

export default function Circle(props) {

    const [circleStyle, setCircleStyle] = useState({})


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