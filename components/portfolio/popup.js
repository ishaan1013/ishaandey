import Image from 'next/image'

import styles from '../../styles/PortfolioPopup.module.scss'

import { IoClose } from "react-icons/io5";
// import { IoLogoAppleAppstore } from 'react-icons/io5'
import { IoLogoGithub } from 'react-icons/io5'
import { HiOutlineExternalLink } from 'react-icons/hi'

import ohsea1 from '../../assets/ohsea1.png'
import ohsea2 from '../../assets/ohsea2.png'
import ohsea3 from '../../assets/ohsea3.png'

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
                    <h1>Ontario High School Esports Association</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <div className={styles.tools}>
                        <div className={styles.tool}>React</div>
                        <div className={styles.tool}>Gatsby</div>
                        <div className={styles.tool}>SCSS</div>
                        <div className={styles.tool}>Netlify</div>
                        <div className={styles.tool}>Figma</div>
                    </div>
                    <div className={styles.links}>
                        <div className={styles.link}><IoLogoGithub/>
                            <h3>GitHub</h3>
                        </div>
                        <div className={styles.link}><HiOutlineExternalLink/>
                            <h3>Site</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}