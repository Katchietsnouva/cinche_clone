'use client';

import React from "react";

function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

export default function Header() {
    return (
        <header className="w-full bg-transparent">
            <nav className="fixed top-4 right-8 z-50 flex space-x-12 text-white text-sm font-medium">
                {[
                    { label: "Home", id: "home" },
                    { label: "How To Join", id: "how-to-join" },
                    { label: "What We Grow", id: "what-we-grow" },
                    { label: "Contact Us", id: "contact-us" },
                ].map(({ label, id }) => (
                    <button
                        key={id}
                        onClick={() => scrollToSection(id)}
                        className="hover:text-teal-500 cursor-pointer bg-transparent border-none p-0 font-medium text-white text-sm"
                        type="button"
                    >
                        {label}
                    </button>
                ))}
            </nav>
        </header>
    );
}


// import Link from "next/link";
// import { Mail } from "lucide-react";

// export default function Header() {
//     return (
//         <header className="w-full bg-white dark:bg-black shadow-md">
//             <nav className="fixed top-4 right-8 z-50 flex space-x-12 text-white text-sm font-medium">
//                 <Link href="/" className="hover:text-teal-500 hover:cursor-pointer">
//                     Home
//                 </Link>
//                 <Link href="/how-to-join" className="hover:text-teal-500 hover:cursor-pointer">
//                     How To Join
//                 </Link>
//                 <Link href="/what-we-grow" className="hover:text-teal-500 hover:cursor-pointer">
//                     What We Grow
//                 </Link>
//                 <Link href="/contact-us" className="hover:text-teal-500 hover:cursor-pointer">
//                     Contact Us
//                 </Link>
//             </nav>

//         </header>
//     );
// }
