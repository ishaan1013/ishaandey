import Navbar from '../components/navbar'
import Circle from '../components/circle'
import styles from '../styles/Projects.module.scss'

import ProjectItem from '../components/projects/projectItem'
import Popup from '../components/projects/popup'
import data from '../components/projects/projectData'

import { useState, useEffect } from 'react'


export default function Projects() {
    const [popup, setPopup] = useState(false)
    const [content, setContent] = useState("")
    const [mainClass, setMainClass] = useState(styles.main)
    const [gridClass, setGridClass] = useState(styles.gridContainer)

    useEffect(() => {
        if (popup) {
            setMainClass(styles.mainNoScroll)
            setGridClass(styles.gridContainerNoScroll)
        }
        else {
            setMainClass(styles.main)
            setGridClass(styles.gridContainer)
        }
    }, [popup])

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
            if (content == "Personal Site") {
                return (
                    <Popup
                        setPopup={setPopup}
                        data={data.personalSiteData}
                    />
                )
            }
            if (content == "Nutrition App") { 
                return (
                    <Popup
                        setPopup={setPopup}
                        data={data.nutritionData}
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
                <main className={mainClass}>
                    <Circle/>
                    <div className={gridClass}>
                        <div className={`${styles.gridItem} ${styles.gI1}`}>
                            <ProjectItem 
                                data={data.taData} 
                                setPopup={setPopup}
                                setContent={setContent}
                            />
                        </div>
                        <div className={`${styles.gridItem} ${styles.gI3}`}>
                            <ProjectItem 
                                data={data.nutritionData} 
                                // data={data.personalSiteData} 
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