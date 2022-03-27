import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { IoMenu, IoClose } from "react-icons/io5";

export default function Navbar() {
    const { asPath } = useRouter()
    const [visible, setVisible] = useState(false);

    const scroll = () => {
        window.scroll({
            top: 10000,
            behavior: "smooth"
        })
    }

    function AboutNav() {
        if (asPath === '/') {
            return (
                <div
                onClick={scroll}
                style={{cursor:"pointer"}}
                >About</div>
            )
        }
        else {
            return (
                <Link href="/">About</Link>
            )
        }
    }

    function Toggle() {
        if (visible) {
            return <IoClose onClick={() => setVisible(false)}/>
        }
        else {
            return <IoMenu onClick={() => setVisible(true)}/>
        }
    }

    function NavMobile() {
        if (visible) {
            return (
                <nav className="nav2">
                    <div className="container">
                        <ul>
                        <li>
                            <AboutNav/>
                        </li>
                        <li><Link href="/portfolio">Portfolio</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
            )
        }
        else {
            return null
        }
    }

    return (
        <>
            <nav className="nav1">
                <ul>
                <li>
                    <AboutNav/>
                </li>
                <li><Link href="/portfolio">Portfolio</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
            <div className="toggle">
                <Toggle/>
            </div>
            <NavMobile/>
        </>
    )
}