import Image from 'next/image'
import Navbar from '../components/navbar'
import Blob from '../components/blob'
import styles from '../styles/Portfolio.module.scss'

import taDisplay1 from '../assets/ta1.png'
import taDisplay2 from '../assets/ta3.png'
import taDisplay3 from '../assets/ta5.png'
import ohseaDisplay1 from '../assets/ohsea1.png'
import ohseaDisplay2 from '../assets/ohsea2.png'

export default function Portfolio() {
    return (
        <>
            <Navbar/>
            <div className="container">
                <main className="main">
                    <Blob/>
                    <div className={styles.gridContainer}>
                        <div className={`${styles.gridItem} ${styles.gI1}`}>
                            <div className={styles.taDisplay}>
                                <div className={`${styles.taDisplay1} ${styles.taDisplayItem}`}>
                                    <Image
                                        src={taDisplay1}
                                        width={127}
                                        height={273}
                                        alt="teachassist app 1"
                                        placeholder="blur"
                                    />
                                </div>
                                <div className={`${styles.taDisplay2} ${styles.taDisplayItem}`}>
                                    <Image
                                        src={taDisplay2}
                                        width={127}
                                        height={273}
                                        alt="teachassist app 1"
                                        placeholder="blur"
                                    />
                                </div>
                                <div className={`${styles.taDisplay3} ${styles.taDisplayItem}`}>
                                    <Image
                                        src={taDisplay3}
                                        width={127}
                                        height={273}
                                        alt="teachassist app 1"
                                        placeholder="blur"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.gridItem} ${styles.gI2}`}>test</div>
                        <div className={`${styles.gridItem} ${styles.gI3}`}>test</div>
                    </div>
                </main>
            </div>
        </>
    )
}