import Image from 'next/image'

import styles from '../../styles/ProjectsPopup.module.scss'

import { IoClose } from "react-icons/io5";
// import { IoLogoAppleAppstore } from 'react-icons/io5'
import { IoLogoGithub } from 'react-icons/io5'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { IoLogoAppleAppstore } from 'react-icons/io5'

import ohsea1 from '../../assets/ohsea1.png'
import ohsea2 from '../../assets/ohsea2.png'
import ohsea3 from '../../assets/ohsea3.png'
import ta1 from '../../assets/ta1.png'
import ta2 from '../../assets/ta2.png'
import ta3 from '../../assets/ta3.png'
import ta4 from '../../assets/ta4.png'

function Tool(props) {
    if (props.data !== "None") {
        return (
            <div className={styles.tool}>{props.data}</div>
        )
    }
    else {
        return null
    }
}

function LinkBtn(props) {
    if (props.icon === "Github") {
        return (
            <a 
            href={props.link} 
            target="_blank" 
            rel="noreferrer"
            className={styles.link}>
                <IoLogoGithub/>
                <h3>Github</h3>
            </a>
        )
    }
    if (props.icon === "Link") {
        return (
            <a 
            href={props.link} 
            target="_blank" 
            rel="noreferrer"
            className={styles.link}>
                <HiOutlineExternalLink/>
                <h3>Site</h3>
            </a>
        )
    }
    if (props.icon === "Appstore") {
        return (
            <a 
            href={props.link} 
            target="_blank" 
            rel="noreferrer"
            className={styles.link}>
                <IoLogoAppleAppstore/>
                <h3>App Store</h3>
            </a>
        )
    }
    else {
        return null
    }
}

function ImgDisplay(props) {
    if (props.data.type === "site") {    
        return (
            <div className={styles.imageWrapper}>
                <div className={styles.image}>
                    <Image
                        src={props.data.img1}
                        layout="fill"
                        objectFit="contain"
                        alt={"alt"}
                        priority
                    />
                </div>
                <div className={styles.image}>
                    <Image
                        src={props.data.img2}
                        layout="fill"
                        objectFit="contain"
                        alt={"alt"}
                        priority
                    />
                </div>
                <div className={styles.image}>
                    <Image
                        src={props.data.img3}
                        layout="fill"
                        objectFit="contain"
                        alt={"alt"}
                        priority
                    />
                </div>
            </div>
        )
    }

    if (props.data.type === "app") {    
        return (
            <div className={styles.imageWrapper}>
                <div className={styles.appWrapper}>
                    <div className={styles.image}>
                        <Image
                            src={props.data.img1}
                            layout="fill"
                            objectFit="contain"
                            alt={"alt"}
                            priority
                        />
                    </div>
                    <div className={styles.image}>
                        <Image
                            src={props.data.img2}
                            layout="fill"
                            objectFit="contain"
                            alt={"alt"}
                            priority
                        />
                    </div>
                    <div className={styles.image}>
                        <Image
                            src={props.data.img3}
                            layout="fill"
                            objectFit="contain"
                            alt={"alt"}
                            priority
                        />
                    </div>
                    <div className={styles.image}>
                        <Image
                            src={props.data.img4}
                            layout="fill"
                            objectFit="contain"
                            alt={"alt"}
                            priority
                        />
                    </div>
                    <div className={styles.image}>
                        <Image
                            src={props.data.img5}
                            layout="fill"
                            objectFit="contain"
                            alt={"alt"}
                            priority
                        />
                    </div>
                </div>
            </div>
        )
    }

    return null
}

export default function Popup(props) { 

    return(
        <>
            <div 
                className={styles.dark}
                onClick={() => props.setPopup(false)}
            />
            <section className={styles.container}>
                <div onClick={() => props.setPopup(false)}>
                    <IoClose className={styles.close} />
                </div>
                <ImgDisplay data={props.data}/>
                <div className={styles.info}>
                    <h1>{props.data.longTitle}</h1>
                    <p>
                        {props.data.desc1}
                    </p>
                    { props.data.desc2 !== "None" &&
                    <p>
                        {props.data.desc2}
                    </p>
                    }
                    { props.data.desc3 !== "None" &&
                    <p>
                        {props.data.desc3}
                    </p>
                    }
                    <div className={styles.tools}>
                        <Tool data={props.data.tool1} />
                        <Tool data={props.data.tool2} />
                        <Tool data={props.data.tool3} />
                        <Tool data={props.data.tool4} />
                        <Tool data={props.data.tool5} />
                    </div>
                    <div className={styles.links}>
                        <LinkBtn icon={props.data.icon1} link={props.data.link1}/>
                        <LinkBtn icon={props.data.icon2} link={props.data.link2}/>
                        <LinkBtn icon={props.data.icon3} link={props.data.link3}/>
                    </div>
                </div>
            </section>
        </>
    )
}