import Image from 'next/image'
import Navbar from '../components/navbar'
import Blob from '../components/blob'
import styles from '../styles/Portfolio.module.scss'

import taDisplay1 from '../assets/ta1.png'
import taDisplay2 from '../assets/ta3.png'
import taDisplay3 from '../assets/ta5.png'
import ohseaDisplay1 from '../assets/ohsea1.png'
import ohseaDisplay2 from '../assets/ohsea3.png'

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
                                            width={110}
                                            height={235}
                                            alt="teachassist app 1"
                                            placeholder="blur"
                                        />
                                    </div>
                                    <div className={`${styles.taDisplay2} ${styles.taDisplayItem}`}>
                                        <Image
                                            src={taDisplay2}
                                            width={110}
                                            height={235}
                                            alt="teachassist app 1"
                                            placeholder="blur"
                                        />
                                    </div>
                                    <div className={`${styles.taDisplay3} ${styles.taDisplayItem}`}>
                                        <Image
                                            src={taDisplay3}
                                            width={110}
                                            height={235}
                                            alt="teachassist app 1"
                                            placeholder="blur"
                                        />
                                    </div>
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
                        </div>
                        <div className={`${styles.gridItem} ${styles.gI3}`}>

                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}