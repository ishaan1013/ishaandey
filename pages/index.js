import Head from "next/head"
import { NextSeo } from "next-seo"
import Image from "next/image"
import { useState, useEffect } from "react"

import styles from "../styles/Home.module.scss"

import Navbar from "../components/navbar"
// import Blob from "../components/blob"
// import Circle from "../components/circle"
import About from "../components/landing/about"

// import UseAnimations from "react-useanimations"
// import arrowDown from "react-useanimations/lib/arrowDown"

import { MdInsertChartOutlined, MdOutlinePeopleAlt, MdCode } from "react-icons/md"


// import BgEffect1 from "../assets/bgEffect.svg"
// import BgEffect3 from "../assets/bgEffect3.svg"
// import BgEffect4 from "../assets/bgEffect4.svg"

export default function Home() {

  // const [contOpacity, setContOpacity] = useState(0.8)
  // const [contBlur, setContBlur] = useState(0)

  // useEffect(() => {
  //     window.addEventListener("scroll", changeStyle)
  // }, [])
  
  // function changeStyle() {
  //     setContOpacity(0.8/((window.scrollY/200)+0.001))
  //     setContBlur(window.scrollY/500)
  // }

  // const contStyle = {
  //     opacity: contOpacity,
  //     filter: "blur("+contBlur+"px)",
  // }

  return (
    <>
      <NextSeo
        title="Home - Ishaan Dey"
        description="Home page - about me."
      />

      <Head>
        <title>Ishaan Dey</title>
        <meta name="description" content="Hey, I'm Ishaan. Learn more about me here!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

        
      <div className="container">
        
        <main className={styles.main}>
          {/* <Blob className={styles.blobLanding} landing /> */}

          {/* <section className={styles.landingContainer} style={contStyle}> */}
          <section className={styles.landingSection}>

            {/* <div className="bg-effect1">
              <Image src={BgEffect1} width={700} height={272} />
            </div> */}

            {/* <div className="landing-blobs-wrapper">
              <div className="bg-effect3">
                <Image src={BgEffect3} width={1000} height={1000} alt="" />
              </div>
              <div className="bg-effect4">
                <Image src={BgEffect4} width={1000} height={1000} alt="" />
              </div>
            </div> */}

            {/* <Circle/> */}


            <h1 className={styles.title}>
              <span className={styles.name1}>ISHAAN</span>
              &nbsp;
              <span className={styles.name2}>DEY</span>
            </h1>
            <h3 className={styles.subtitle}>Full-Stack Developer &amp; High School Student</h3>

            {/* <SwitchSubtitle/> */}

            {/* <div className={styles.learnmore}>
              <p>About Me</p>
              <div className={styles.arrow}>
                <UseAnimations
                  animation={arrowDown}
                  size={24}
                  strokeColor="white"
                />
              </div>
            </div> */}

            <div className={styles.featured}>
              <div className={styles.content}>
                <h1>Featured Project</h1>
                <h3 className={styles.featureTitle}>TeachAssist App</h3>

                <div className={styles.featureDetailWrapper}>
                  <div className={styles.featureDetail}>
                    <MdInsertChartOutlined className={styles.featureIcon} />
                    <p>Top 100 education app on Apple App Store official charts.</p>
                  </div>
                  <div className={styles.featureDetail}>
                    <MdOutlinePeopleAlt className={styles.featureIcon} />
                    <p>400+ downloads. 3000+ reached.</p>
                  </div>
                  <div className={styles.featureDetail}>
                    <MdCode className={styles.featureIcon} />
                    <p>Built with JavaScript React Native for both iOS and Android.</p>
                  </div>
                </div>

              </div>
            </div>

          </section>
        </main>
        <About/>
        
      </div>
    </>
  )
}
