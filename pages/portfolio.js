import Navbar from '../components/navbar'
import Blob from '../components/blob'
import styles from '../styles/Portfolio.module.scss'

import PortfolioItem from '../components/portfolio/portfolioItem'
import Popup from '../components/portfolio/popup'
import data from '../components/portfolio/portfolioData'

import { useState } from 'react'


export default function Portfolio() {
    const [popup, setPopup] = useState(false)
    const [content, setContent] = useState("none")

    function ShowPopup() {
        if (popup) {
            return (
                <Popup
                    content={content}
                    setPopup={setPopup}
                />
            )
        }

        return null
    }
    
    return (
        <>
            <Navbar/>
            <div className="container">
                <main className={styles.main}>
                    <Blob/>
                    <div className={styles.gridContainer}>
                        <div className={`${styles.gridItem} ${styles.gI1}`}>
                            <PortfolioItem 
                                data={data.taData} 
                                setPopup={setPopup}
                                setContent={setContent}
                            />
                        </div>
                        <div className={`${styles.gridItem} ${styles.gI2}`}>
                            <PortfolioItem 
                                data={data.ohseaData} 
                                setPopup={setPopup}
                                setContent={setContent}
                            />
                        </div>
                        <div className={`${styles.gridItem} ${styles.gI3}`}>

                        </div>
                    </div>
                    {/* <div className={styles.gridContainer}>
                        <div className={`${styles.gridItem} ${styles.gI1}`}>
                            <PortfolioItem data={data.taData}/>
                        </div>
                        <div className={`${styles.gridItem} ${styles.gI2}`}>
                            <PortfolioItem data={data.ohseaData}/>
                        </div>
                        <div className={`${styles.gridItem} ${styles.gI3}`}>

                        </div>
                    </div> */}
                </main>
            </div>
            <ShowPopup/>
        </>
    )
}