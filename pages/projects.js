import Head from "next/head"
import { NextSeo } from "next-seo"
import Navbar from "../components/navbar"
import Circle from "../components/circle"
import styles from "../styles/Projects.module.scss"

import ProjectItem from "../components/projects/projectItem"
import Popup from "../components/projects/popup"
import data from "../components/projects/projectData"

import { useState, useEffect } from "react"

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
            if (content == "The Brain Scramble") { 
                return (
                    <Popup
                        setPopup={setPopup}
                        data={data.brainscrambleData}
                    />
                )
            }
            if (content == "Blockchain Exchange") { 
                return (
                    <Popup
                        setPopup={setPopup}
                        data={data.exchangeData}
                    />
                )
            }
        }

        return null
    }
    
    return (
        <>
            <NextSeo
                title="Projects - Ishaan Dey"
                description="Portfolio and projects."
            />

            <Head>
                <title>Projects</title>
                <meta name="description" content="Ishaan's projects." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
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
                        <div className={`${styles.gridItem} ${styles.gI2}`}>
                            <ProjectItem 
                                data={data.exchangeData} 
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
                        <div className={`${styles.gridItem} ${styles.gI4}`}>
                            <ProjectItem 
                                data={data.ohseaData} 
                                setPopup={setPopup}
                                setContent={setContent}
                            />
                        </div>
                        <div className={`${styles.gridItem} ${styles.gI5}`}>
                            <ProjectItem 
                                data={data.personalSiteData} 
                                setPopup={setPopup}
                                setContent={setContent}
                            />
                        </div>
                        <div className={`${styles.gridItem} ${styles.gI6}`}>
                            <ProjectItem 
                                data={data.brainscrambleData} 
                                setPopup={setPopup}
                                setContent={setContent}
                            />
                        </div>
                    </div>
                </main>
            </div>
            <ShowPopup/>
        </>
    )
}