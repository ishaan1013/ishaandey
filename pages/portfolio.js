import Navbar from '../components/navbar'
import Blob from '../components/blob'
import styles from '../styles/Portfolio.module.scss'

export default function Portfolio() {
    return (
        <>
            <Navbar/>
            <div className="container">
                <main className="main">
                    <Blob/>
                    <div className={styles.gridContainer}>
                        <div className={styles.gridItem}>test</div>
                        <div className={styles.gridItem}>test</div>
                        <div className={styles.gridItem}>test</div>
                    </div>
                </main>
            </div>
        </>
    )
}