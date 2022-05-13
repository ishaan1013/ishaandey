import Image from 'next/image'

import AboutImg from "./aboutImg"
import styles from '../../styles/Home.module.scss'
import { useState } from 'react'
import BgEffect from "../../assets/bgEffect2.svg"


function useHover() {
  const [hovering, setHovering] = useState(false)
  const onHoverProps = {
    onMouseEnter: () => setHovering(true),
    onMouseLeave: () => setHovering(false),
  }
  return [hovering, onHoverProps]
}

export default function About() {
    const [textIsHovering, textHoverProps] = useHover()
    const [copy, setCopy] = useState(false)

    function copyHandler() {
        setCopy(true)
        setTimeout(() => {
            setCopy(false)
         }, 3000)
    }

    function CopyText() {
        if (copy) {
            return "Copied!"
        }
        else {
            if (textIsHovering) {
                return "Click To Copy"
            }
        }
        return ""
    }

    return (
        <section className={styles.about}>
            <div className={styles.abtFlex}>
                <div className={styles.left}>
                    <div className="bg-effect2">
                        <Image src={BgEffect} width={700} height={272} />
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </div>
                    <div className={styles.socials}>
                        <a href="https://github.com/ishaan1013"
                        target="_blank"
                        rel="noreferrer"
                        >
                            GITHUB
                        </a>
                        <a href="https://www.linkedin.com/in/ishaan-d/"
                        target="_blank"
                        rel="noreferrer"
                        >
                            LINKEDIN
                        </a>
                        <div>
                            <div 
                            {...textHoverProps}
                            onClick={() => {
                                navigator.clipboard.writeText("Aero#9241");
                                copyHandler()
                            }}
                            >{textIsHovering ? "Aero#9241" : "DISCORD"}</div>
                            <div className={styles.copyText}>
                                <CopyText/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <AboutImg />
                    {/* <div className={styles.trackRotate}>
                        <div className={styles.track}>
                            <div>
                                &nbsp;About Me  -  About Me  -  About Me  -  About Me  -  About Me  -  About Me  -  About Me  -  About Me  -  About Me  -  About Me  -  About Me  -  About Me  -  About Me  -  About Me  -  About Me  -  About Me  -  About Me  -  About Me  -  About Me  -  About Me  -  About Me  -  About Me  -  About Me  -  About Me  -  About Me  -  About Me  -  About Me  -  About Me  -  About Me
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}