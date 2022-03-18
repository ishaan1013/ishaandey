import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Navbar() {
    const { asPath } = useRouter()

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

    return (
        <nav>
            <ul>
            <li>
                <AboutNav/>
            </li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}