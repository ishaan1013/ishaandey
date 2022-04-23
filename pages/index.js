import Head from 'next/head'
import styles from '../styles/Home.module.scss'
// import Link from 'next/link'
import Navbar from '../components/navbar'
import Blob from '../components/blob'
import Circle from '../components/circle'
// import SwitchSubtitle from '../components/landing/switchSubtitle'
import About from "../components/landing/about"
import UseAnimations from "react-useanimations";
import arrowDown from 'react-useanimations/lib/arrowDown';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ishaan Dey</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
        
      <div className="container">
        
        <main className="main">
          <Circle/>

          <h1 className={styles.title}>
            <span>ISH<span>A</span>AN</span> <span>D<span>E</span>Y</span>
          </h1>
          {/* <SwitchSubtitle/> */}

          <div className={styles.learnmore}>
            {/* <div className={styles.trackContainer}>
              <div className={styles.trackAbout}>
                <p>
                  About Me&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;
                  About Me&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;
                  About Me&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;
                  About Me&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;
                  About Me&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;
                  About Me&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;  
                </p>
              </div>
            </div> */}
            <p>About Me</p>
            <div className={styles.arrow}>
              <UseAnimations
                animation={arrowDown}
                size={24}
                strokeColor="white"
              />
              {/* <BsArrowDown/> */}
            </div>
          </div>
        </main>
        <About/>
        
      </div>
    </>
  )
}
