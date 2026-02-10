import Link from "next/link";
import { Mail } from "lucide-react";

export default function Header() {
    return (
        <header className="w-full bg-white dark:bg-black shadow-md">
            <nav className="fixed top-4 right-8 z-50 flex space-x-12 text-white text-sm font-medium">
                <Link href="/" className="hover:text-teal-500 hover:cursor-pointer">
                    Home
                </Link>
                <Link href="/how-to-join" className="hover:text-teal-500 hover:cursor-pointer">
                    How To Join
                </Link>
                <Link href="/what-we-grow" className="hover:text-teal-500 hover:cursor-pointer">
                    What We Grow
                </Link>
                <Link href="/contact-us" className="hover:text-teal-500 hover:cursor-pointer">
                    Contact Us
                </Link>
            </nav>

        </header>
    );
}
