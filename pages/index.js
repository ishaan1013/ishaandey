import Head from "next/head"
import { NextSeo } from "next-seo"

import styles from "../styles/Home.module.scss"

import Navbar from "../components/navbar"
import Feature from "../components/landing/feature"
import About from "../components/landing/about"

// import UseAnimations from "react-useanimations"
// import arrowDown from "react-useanimations/lib/arrowDown"

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

      {/* duplicate for more grain */}
      <div className="bg-grain"/>
      <div className="bg-grain"/>

      <div className="bg-gradient"/>
      <div className="container">
        <main className={styles.main}>

          <section className={styles.landingSection}>


            <h1 className={styles.title}>
              <span className={styles.name1}>
                <span style={{"letterSpacing": "-0.02em"}}>I</span><span style={{"letterSpacing": "-0.02em"}}>S</span>H<span style={{"letterSpacing": "0.03em"}}>A</span>AN
              </span>
              <span className={styles.name2}>
                <span style={{"letterSpacing": "-0.02em"}}>D</span><span style={{"letterSpacing": "0.05em"}}>E</span>Y
              </span>
            </h1>
            <h3 className={styles.subtitle}>
              Full-Stack Developer &amp; High School Student
            </h3>

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

            <Feature />
            

          </section>
        </main>
        <About/>
        
      </div>
    </>
  )
}
