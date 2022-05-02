import Image from 'next/image'

import styles from '../../styles/PortfolioPopup.module.scss'

import { IoClose } from "react-icons/io5";
// import { IoLogoAppleAppstore } from 'react-icons/io5'
import { IoLogoGithub } from 'react-icons/io5'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { IoLogoAppleAppstore } from 'react-icons/io5'

import ohsea1 from '../../assets/ohsea1.png'
import ohsea2 from '../../assets/ohsea2.png'
import ohsea3 from '../../assets/ohsea3.png'

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
                <div className={styles.imageWrapper}>
                    <div className={styles.image}>
                        <Image
                            src={ohsea1}
                            layout="fill"
                            objectFit="contain"
                            alt={"alt"}
                            priority
                        />
                    </div>
                    <div className={styles.image}>
                        <Image
                            src={ohsea2}
                            layout="fill"
                            objectFit="contain"
                            alt={"alt"}
                            priority
                        />
                    </div>
                    <div className={styles.image}>
                        <Image
                            src={ohsea3}
                            layout="fill"
                            objectFit="contain"
                            alt={"alt"}
                            priority
                        />
                    </div>
                </div>
                <div className={styles.info}>
                    <h1>{props.data.longTitle}</h1>
                    <p>
                        {props.data.desc}
                    </p>

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