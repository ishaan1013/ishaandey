import styles from '../../styles/PortfolioPopup.module.scss'
import { IoClose } from "react-icons/io5";

export default function Popup(props) {  
    return(
        <>
            <div 
                className={styles.dark}
                onClick={() => props.setPopup(false)}
            />
            <section className={styles.container}>
                <div onClick={() => props.setPopup(false)}>
                    <IoClose className={styles.close} />
                </div>
            </section>
        </>
    )
}