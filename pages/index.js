import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'

import styles from '../styles/Home.module.scss'

import Navbar from '../components/navbar'
import Blob from '../components/blob'
import Circle from '../components/circle'
import About from "../components/landing/about"

import UseAnimations from "react-useanimations";
import arrowDown from 'react-useanimations/lib/arrowDown';

import BgEffect from "../assets/bgEffect.svg"

export default function Home() {

  const [contOpacity, setContOpacity] = useState(0.8)
  const [contBlur, setContBlur] = useState(0)

  useEffect(() => {
      window.addEventListener("scroll", changeStyle);
  }, []);
  
  function changeStyle() {
      setContOpacity(0.8/((window.scrollY/200)+0.001))
      setContBlur(window.scrollY/300)
  }

  const contStyle = {
      opacity: contOpacity,
      filter: "blur("+contBlur+"px)",
  }

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
          <section className={styles.landingContainer} style={contStyle}>
            <div className="bg-effect1">
              <Image src={BgEffect} width={700} height={272} />
            </div>
            {/* <Circle/> */}
            <h1 className={styles.title}>
              <span className={styles.name1}>ISHAAN</span>
              &nbsp;
              <span className={styles.name2}>DEY</span>
            </h1>
            {/* <SwitchSubtitle/> */}
            <div className={styles.learnmore}>
              <p>About Me</p>
              <div className={styles.arrow}>
                <UseAnimations
                  animation={arrowDown}
                  size={24}
                  strokeColor="white"
                />
              </div>
            </div>
          </section>
        </main>
        <About/>
        
      </div>
    </>
  )
}
