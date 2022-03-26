import Navbar from '../components/navbar'
import Blob from '../components/blob'
import styles from '../styles/Contact.module.scss'

export default function Portfolio() {
    return (
        <>
            <Navbar/>
            <div className="container">
                <main className="main">
                    <Blob/>
                </main>
            </div>
        </>
    )
}