import Link from "next/link";
import { Mail } from "lucide-react";

export default function Header() {
    return (
        <header className="w-full bg-white dark:bg-black shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-bold text-black dark:text-white"
                >
                    Cinch Markets
                </Link>

                {/* Navigation Links */}
                <nav className="hidden md:flex gap-8">
                    <Link
                        href="/about"
                        className="text-black dark:text-white hover:text-teal-500 transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        href="/services"
                        className="text-black dark:text-white hover:text-teal-500 transition-colors"
                    >
                        Services
                    </Link>
                    <Link
                        href="/contact"
                        className="text-black dark:text-white hover:text-teal-500 transition-colors"
                    >
                        Contact
                    </Link>
                </nav>

                {/* Email / Contact */}
                <div className="flex items-center gap-2">
                    <Mail size={20} className="text-teal-500" />
                    <Link
                        href="mailto:info@cinchmarkets.com"
                        className="text-black dark:text-white hover:text-teal-500 transition-colors"
                    >
                        info@cinchmarkets.com
                    </Link>
                </div>
            </div>
        </header>
    );
}
