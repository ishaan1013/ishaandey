import Image from 'next/image'

import styles from '../../styles/Home.module.scss'
import { useState, useEffect } from 'react'
import personalPhoto from '../../assets/personalPhoto3.jpg'

export default function AboutImg() {
    const [imgTranslate, setImgTranslate] = useState(100)

    useEffect(() => {
        window.addEventListener("scroll", changeStyle);
    }, []);
    
    function changeStyle() {
        setImgTranslate((-130) + window.scrollY/8)
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
                width={475}
                height={450}
                placeholder="blur"
            />
        </div>
    )
}