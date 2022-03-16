import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Work</Link></li>
            <li><Link href="/press">Contact</Link></li>
            </ul>
        </nav>
    )
}