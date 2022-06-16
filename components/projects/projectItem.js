import Image from "next/image"

import { IoLogoAppleAppstore } from "react-icons/io5"
import { IoLogoGithub } from "react-icons/io5"
import { HiOutlineExternalLink } from "react-icons/hi"

import styles from "../../styles/Projects.module.scss"

function Displays(props) {
    if (props.data.type === "app") {
        return (
            <div className={styles.displayContainer}>
                <div className={`${props.data.class} ${styles.appDisplay}`}>
                    <div className={styles.appDisplayItem}>
                        <Image
                            src={props.data.img1}
                            width={100}
                            height={210}
                            alt={props.data.alt1}
                            priority
                        />
                    </div>
                    <div className={styles.appDisplayItem}>
                        <Image
                            src={props.data.img2}
                            width={100}
                            height={210}
                            alt={props.data.alt2}
                            priority
                        />
                    </div>
                    <div className={styles.appDisplayItem}>
                        <Image
                            src={props.data.img3}
                            width={100}
                            height={210}
                            alt={props.data.alt3}
                            priority
                        />
                    </div>
                </div>
            </div>
        )
    }
    else if (props.data.type === "site") {
        return (
            <div className={styles.displayContainer}>
                <div className={`${props.data.class} ${styles.siteDisplay}`}>
                    <div className={styles.siteDisplayItem}>
                        <Image
                            src={props.data.img1}
                            width={205}
                            height={140}
                            alt={props.data.alt1}
                            placeholder="blur"
                        />
                    </div>
                    <div className={styles.siteDisplayItem}>
                        <Image
                            src={props.data.img2}
                            width={205}
                            height={140}
                            alt={props.data.alt2}
                            placeholder="blur"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

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
            className={styles.link}><IoLogoGithub/></a>
        )
    }
    if (props.icon === "Link") {
        return (
            <a 
            href={props.link} 
            target="_blank" 
            rel="noreferrer"
            className={styles.link}><HiOutlineExternalLink/></a>
        )
    }
    if (props.icon === "Appstore") {
        return (
            <a 
            href={props.link} 
            target="_blank" 
            rel="noreferrer"
            className={styles.link}><IoLogoAppleAppstore/></a>
        )
    }
    else {
        return null
    }
}


export default function ProjectItem(props) {  

    function SeeMoreFunc() {
        props.setPopup(true)
        props.setContent(props.data.title)
    }

    return(
        <>
            <div className={styles.displayContainer}>
                <Displays data={props.data}/>
            </div>
            <div className={styles.lower}>
                <h3>{props.data.title}</h3>
                {/* <p>{props.data.desc}</p> */}
                <div className={styles.tools}>
                    <Tool data={props.data.tool1}/>
                    <Tool data={props.data.tool2}/>
                    <Tool data={props.data.tool3}/>
                    <Tool data={props.data.tool4}/>
                </div>
                <div className={styles.links}>
                    <LinkBtn icon={props.data.icon1} link={props.data.link1}/>
                    <LinkBtn icon={props.data.icon2} link={props.data.link2}/>
                    <LinkBtn icon={props.data.icon3} link={props.data.link3}/>
                </div>
            </div>
            <div 
                className={styles.seeMore}
                onClick={() => SeeMoreFunc()}
            >
                <p>See More</p>
                <div className={styles.underline}/>
            </div>
        </>
    )
}