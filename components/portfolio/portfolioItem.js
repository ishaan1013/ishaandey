import Image from 'next/image'

import { IoLogoAppleAppstore } from 'react-icons/io5'
import { IoLogoGithub } from 'react-icons/io5'
import { HiOutlineExternalLink } from 'react-icons/hi'

import taDisplay1 from '../../assets/ta1.png'
import taDisplay2 from '../../assets/ta3.png'
import taDisplay3 from '../../assets/ta5.png'

import styles from '../../styles/Portfolio.module.scss'

function displays(props) {
    if (props.data.type === "app") {
        return (
            <div className={styles.displayContainer}>
                <div className={styles.taDisplay}>
                    <div className={`${styles.taDisplay1} ${styles.taDisplayItem}`}>
                        <Image
                            src={taDisplay1}
                            width={107}
                            height={225}
                            alt="teachassist app 1"
                            placeholder="blur"
                        />
                    </div>
                    <div className={`${styles.taDisplay2} ${styles.taDisplayItem}`}>
                        <Image
                            src={taDisplay2}
                            width={107}
                            height={225}
                            alt="teachassist app 1"
                            priority
                        />
                    </div>
                    <div className={`${styles.taDisplay3} ${styles.taDisplayItem}`}>
                        <Image
                            src={taDisplay3}
                            width={107}
                            height={225}
                            alt="teachassist app 1"
                            priority
                        />
                    </div>
                </div>
            </div>
        )
    }
}


export default function PortfolioItem(props) {  
    return(
        <div className={`${styles.gridItem} ${styles.gI1}`}>
            <div className={styles.displayContainer}>
                <div className={styles.taDisplay}>
                    <div className={`${styles.taDisplay1} ${styles.taDisplayItem}`}>
                        <Image
                            src={taDisplay1}
                            width={107}
                            height={225}
                            alt="teachassist app 1"
                            placeholder="blur"
                        />
                    </div>
                    <div className={`${styles.taDisplay2} ${styles.taDisplayItem}`}>
                        <Image
                            src={taDisplay2}
                            width={107}
                            height={225}
                            alt="teachassist app 1"
                            priority
                        />
                    </div>
                    <div className={`${styles.taDisplay3} ${styles.taDisplayItem}`}>
                        <Image
                            src={taDisplay3}
                            width={107}
                            height={225}
                            alt="teachassist app 1"
                            priority
                        />
                    </div>
                </div>
            </div>
            <div className={styles.lower}>
                <h3>TeachAssist App</h3>
                <p>Advanced tools for high school students to promote academic success.</p>
                <div className={styles.tools}>
                    <div className={styles.tool}>React Native</div>
                    <div className={styles.tool}>Expo</div>
                </div>
                <div className={styles.links}>
                    <a 
                    href="https://github.com/Teach-Assist-App/frontend2" 
                    target="_blank" 
                    rel="noreferrer"
                    className={styles.link}><IoLogoGithub/></a>
                    <a 
                    target="_blank" 
                    rel="noreferrer"
                    className={styles.link}><IoLogoAppleAppstore/></a>
                </div>
            </div>
        </div>
    )
}