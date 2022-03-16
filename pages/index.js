import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import Navbar from '../components/navbar'
import Blob from '../components/blob'
import SwitchSubtitle from '../components/landing/switchSubtitle'
import {BsArrowDown} from 'react-icons/bs'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ishaan Dey</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
        
      <div className={styles.container}>
        
        <main className={styles.main}>
          <Blob/>

          {/* <div className={styles.text}> */}
            <h1 className={styles.title}>
              <span>ISH<span>A</span>AN</span> <span>D<span>E</span>Y</span>
            </h1>
            <SwitchSubtitle/>
          {/* </div> */}

          <div className={styles.learnmore}>
            <p>Learn More</p>
            <div>
              <BsArrowDown/>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
