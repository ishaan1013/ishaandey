import Image from 'next/image'
import Navbar from '../components/navbar'
import Blob from '../components/blob'
import styles from '../styles/Portfolio.module.scss'

import taDisplay1 from '../assets/ta1.png'
import taDisplay2 from '../assets/ta3.png'
import taDisplay3 from '../assets/ta5.png'
import ohseaDisplay1 from '../assets/ohsea1.png'
import ohseaDisplay2 from '../assets/ohsea3.png'

import { IoLogoAppleAppstore } from 'react-icons/io5'
import { IoLogoGithub } from 'react-icons/io5'
import { HiOutlineExternalLink } from 'react-icons/hi'

export default function Portfolio() {
    return (
        <>
            <Navbar/>
            <div className="container">
                <main className="main">
                    <Blob/>
                    <div className={styles.gridContainer}>
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
                                <p>Advanced tools for high school students in Ontario to promote academic success.</p>
                                <div className={styles.tools}>
                                    <div className={styles.tool}>React Native</div>
                                    <div className={styles.tool}>Expo</div>
                                </div>
                                <div className={styles.links}>
                                    <a href="https://github.com/Teach-Assist-App/frontend2" target="_blank" className={styles.link}><IoLogoGithub/></a>
                                    <a target="_blank" className={styles.link}><IoLogoAppleAppstore/></a>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.gridItem} ${styles.gI2}`}>
                            <div className={styles.displayContainer}>
                                <div className={styles.ohseaDisplay}>
                                    <div className={`${styles.ohseaDisplay1} ${styles.ohseaDisplayItem}`}>
                                        <Image
                                            src={ohseaDisplay1}
                                            width={205}
                                            height={140}
                                            alt="teachassist app 1"
                                            placeholder="blur"
                                        />
                                    </div>
                                    <div className={`${styles.ohseaDisplay2} ${styles.ohseaDisplayItem}`}>
                                        <Image
                                            src={ohseaDisplay2}
                                            width={205}
                                            height={140}
                                            alt="teachassist app 1"
                                            placeholder="blur"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.lower}>
                                <h3>OHSEA</h3>
                                <p>The Ontario High School Esports Association leads in high school esports opportunities.</p>
                                <div className={styles.tools}>
                                    <div className={styles.tool}>React</div>
                                    <div className={styles.tool}>Gatsby</div>
                                    <div className={styles.tool}>SCSS</div>
                                </div>
                                <div className={styles.links}>
                                    <a href="https://github.com/ohseagg/ohsea.gg" target="_blank" className={styles.link}><IoLogoGithub/></a>
                                    <a href="https://ohsea.gg/" target="_blank" className={styles.link}><HiOutlineExternalLink/></a>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.gridItem} ${styles.gI3}`}>

                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}