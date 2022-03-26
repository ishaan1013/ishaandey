import Navbar from '../components/navbar'
import Blob from '../components/blob'
import styles from '../styles/Portfolio.module.scss'

import PortfolioItem from '../components/portfolio/portfolioItem'
import data from '../components/portfolio/portfolioData'

export default function Portfolio() {
    return (
        <>
            <Navbar/>
            <div className="container">
                <main className="main">
                    <Blob/>
                    <div className={styles.gridContainer}>
                        <div className={`${styles.gridItem} ${styles.gI1}`}>
                            <PortfolioItem data={data.taData}/>
                        </div>
                        <div className={`${styles.gridItem} ${styles.gI2}`}>
                            <PortfolioItem data={data.ohseaData}/>
                        </div>
                        <div className={`${styles.gridItem} ${styles.gI3}`}>

                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}