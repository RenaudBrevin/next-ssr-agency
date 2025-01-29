import { Linden_Hill } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

export default function header() {
    return (
    <nav className="flex items-center container py-6">
        <Link href="/">
            <Image
                className=""
                src="/logo-riche.gif"
                alt="Next.js logo"
                width={120}
                height={30}
                priority
            />
        </Link>
        <ul className="flex items-center font-bold justify-center border border-white rounded-full bg-lightBlack mx-auto">
            <li className="px-6 py-3.5">
            <a href="">Projects</a>
            </li>
            <li className="px-6 py-3.5">
            <a href="">Projects</a>
            </li>
            <li className="px-6 py-3.5">
            <a href="">Projects</a>
            </li>
            <li className="px-6 py-3.5">
            <a href="">Projects</a>
            </li>
        </ul>
        <Link 
            href="/contact"
            className="contact ml-0 rounded-2xl border border-gold text-gold px-4 py-3 bg-lightBlack font-extrabold"> 
            Contact
        </Link>
    </nav>
    )
}