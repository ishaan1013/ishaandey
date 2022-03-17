import Link from 'next/link'

export default function Navbar() {

    const scroll = () => {
        window.scroll({
            top: 10000,
            behavior: "smooth"
        })
    }

    return (
        <nav>
            <ul>
            <li>
                <div
                onClick={scroll}
                style={{cursor:"pointer"}}
                >About</div>
            </li>
            <li><Link href="/contact">Work</Link></li>
            <li><Link href="/press">Contact</Link></li>
            </ul>
        </nav>
    )
}