import Image from "next/image"
import { useState, useEffect } from "react"
import { useMediaPredicate } from "react-media-hook"

import styles from "../../styles/Home.module.scss"
import personalPhoto from "../../assets/personalPhoto3.jpg"

export default function AboutImg() {
    const [imgTranslate, setImgTranslate] = useState(100)
    const threshold = useMediaPredicate("(max-width: 768px)")

    useEffect(() => {
        window.addEventListener("scroll", changeStyle)
    }, [])

    useEffect(() => {
        if (threshold) {
            setImgTranslate(-10)
            window.removeEventListener("scroll", changeStyle)
        } else {
            window.addEventListener("scroll", changeStyle)
        }
    }, [threshold])
    
    function changeStyle() {
        setImgTranslate((-130) + window.scrollY/10)
    }

    const translateStyle = {
        transform: "translate(0px,"+imgTranslate+"px)",
    }

    return (
        <div 
        className={styles.imgContainer}
        style={translateStyle}
        >
            <Image
                src={personalPhoto}
                placeholder="blur"
                alt="Photo of me!"
            />
        </div>
    )
}