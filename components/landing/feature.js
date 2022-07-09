import styles from "../../styles/Home.module.scss"
import { MdInsertChartOutlined, MdOutlinePeopleAlt, MdCode } from "react-icons/md"
import TAGraphic from "../../assets/tagraphic.png"
import Link from "next/link"
import Image from "next/image"


export default function Feature() {
    return (
        <div className={styles.featured}>
            <div className={styles.content}>
                <h1>Featured Project</h1>
                <h3 className={styles.featureTitle}>TeachAssist App</h3>

                <div className={styles.featureDetailWrapper}>
                    <div className={styles.featureDetail}>
                        <MdInsertChartOutlined className={styles.featureIcon} />
                        <p>Top 100 education app on Apple App Store official charts. 500+ downloads.</p>
                    </div>
                    <div className={styles.featureDetail}>
                        <MdCode className={styles.featureIcon} />
                        <p>Built with React Native for both iOS &amp; Android. Backend &amp; APIs written in Python.</p>
                    </div>
                </div>
                <Link 
                href="/projects"
                >
                    Go To Projects
                </Link>
            </div>

            <div className={styles.graphic}>
                <Image src={TAGraphic} alt="Feature Image"/>
            </div>
            <div className={styles.glow}/>
        </div>
    )
}