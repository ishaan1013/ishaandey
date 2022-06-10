import Navbar from '../components/navbar'
import Circle from '../components/circle'
import styles from '../styles/Projects.module.scss'

import ProjectItem from '../components/projects/projectItem'
import Popup from '../components/projects/popup'
import data from '../components/projects/projectData'

import { useState } from 'react'


export default function Projects() {
    const [popup, setPopup] = useState(false)
    const [content, setContent] = useState("")

    function ShowPopup() {
        if (popup) {
            if (content == "TeachAssist App") {
                return (
                    <Popup
                        setPopup={setPopup}
                        data={data.taData}
                    />
                )
            }
            if (content == "OHSEA") {
                return (
                    <Popup
                        setPopup={setPopup}
                        data={data.ohseaData}
                    />
                )
            }
        }

        return null
    }
    
    return (
        <>
            <Navbar/>
            <div className="container">
                <main className={styles.main}>
                    <Circle/>
                    <div className={styles.gridContainer}>
                        <div className={`${styles.gridItem} ${styles.gI1}`}>
                            <ProjectItem 
                                data={data.taData} 
                                setPopup={setPopup}
                                setContent={setContent}
                            />
                        </div>
                        <div className={`${styles.gridItem} ${styles.gI2}`}>
                            <ProjectItem 
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
                            <ProjectItem data={data.taData}/>
                        </div>
                        <div className={`${styles.gridItem} ${styles.gI2}`}>
                            <ProjectItem data={data.ohseaData}/>
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