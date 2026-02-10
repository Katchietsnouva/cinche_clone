import Link from "next/link";
import { Mail } from "lucide-react"; // or any icon library you use

export default function Header() {
    return (
        <header className="w-full bg-white dark:bg-black shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link href="/">
                    <a className="text-xl font-bold text-black dark:text-white">
                        Cinch Markets
                    </a>
                </Link>

                {/* Navigation Links */}
                <nav className="hidden md:flex gap-8">
                    <Link href="/about">
                        <a className="text-black dark:text-white hover:text-teal-500 transition-colors">
                            About
                        </a>
                    </Link>
                    <Link href="/services">
                        <a className="text-black dark:text-white hover:text-teal-500 transition-colors">
                            Services
                        </a>
                    </Link>
                    <Link href="/contact">
                        <a className="text-black dark:text-white hover:text-teal-500 transition-colors">
                            Contact
                        </a>
                    </Link>
                </nav>

                {/* Email / Contact */}
                <div className="flex items-center gap-2">
                    <Mail size={20} className="text-teal-500" />
                    <a
                        href="mailto:info@cinchmarkets.com"
                        className="text-black dark:text-white hover:text-teal-500 transition-colors"
                    >
                        info@cinchmarkets.com
                    </a>
                </div>
            </div>
        </header>
    );
}
