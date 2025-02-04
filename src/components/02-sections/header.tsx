import Image from 'next/image'
import Link from 'next/link'

export default function header() {
    return (
    <nav className="flex items-center justify-between container py-6">
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
        <Link 
            href="/contact"
            className="contact ml-0 rounded-2xl border border-gold text-gold px-4 py-3 bg-lightBlack font-extrabold"> 
            Contact
        </Link>
    </nav>
    )
}