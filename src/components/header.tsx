'use client';

import React, { useState } from "react";
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

const navItems = [
    { label: "Home", id: "home" },
    { label: "How To Join", id: "how-to-join" },
    { label: "What We Grow", id: "what-we-grow" },
    { label: "Contact Us", id: "contact-us" },
];

const overlayVariants = {
    open: { width: '100%', transition: { duration: 0.8, ease: 'easeOut' } },
    closed: { width: 0, transition: { duration: 0.5, ease: 'easeIn' } }
};

const panelVariants = {
    open: { width: '100%', transition: { delay: 0.3, duration: 0.5, ease: 'easeInOut' } },
    closed: { width: 0, transition: { duration: 0.4, delay: 0.1 } }
};

const contentVariants = {
    open: { opacity: 1, transition: { delay: 0.8, duration: 0.3 } },
    closed: { opacity: 0, transition: { duration: 0.2 } }
};

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full bg-transparent">
            {/* Desktop Nav */}
            <nav className="hidden md:flex fixed top-4 right-8 z-50 space-x-12 text-white text-sm font-medium">
                {navItems.map(({ label, id }) => (
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

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="md:hidden fixed top-4 right-4 z-50 text-white"
                aria-label="Open menu"
            >
                <Menu size={32} />
            </button>

            {/* Drawer */}
            {isOpen && (
                <>
                    {/* Dark Overlay */}
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={overlayVariants}
                        className="fixed inset-0 bg-black/50 z-40"
                        style={{ left: 0, overflow: 'hidden' }}
                    />

                    {/* White Panel */}
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={panelVariants}
                        className="fixed inset-0 bg-white z-50 flex flex-col"
                        style={{ left: 0, overflow: 'hidden' }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-black"
                            aria-label="Close menu"
                        >
                            <X size={32} />
                        </button>

                        {/* Nav Items */}
                        <motion.ul
                            variants={contentVariants}
                            className="flex flex-col items-start p-8 space-y-8 mt-20"
                        >
                            {navItems.map(({ label, id }) => (
                                <li key={id}>
                                    <button
                                        onClick={() => {
                                            setIsOpen(false);
                                            scrollToSection(id);
                                        }}
                                        className="text-black text-lg font-medium hover:text-teal-500"
                                    >
                                        {label}
                                    </button>
                                </li>
                            ))}
                        </motion.ul>
                    </motion.div>
                </>
            )}
        </header>
    );
}



// 'use client';


// import React from "react";

// function scrollToSection(id: string) {
//     const el = document.getElementById(id);
//     if (el) {
//         el.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
// }

// export default function Header() {
//     return (
//         <header className="w-full bg-transparent">
//             <nav className="fixed top-4 right-8 z-50 flex space-x-12 text-white text-sm font-medium">
//                 {[
//                     { label: "Home", id: "home" },
//                     { label: "How To Join", id: "how-to-join" },
//                     { label: "What We Grow", id: "what-we-grow" },
//                     { label: "Contact Us", id: "contact-us" },
//                 ].map(({ label, id }) => (
//                     <button
//                         key={id}
//                         onClick={() => scrollToSection(id)}
//                         className="hover:text-teal-500 cursor-pointer bg-transparent border-none p-0 font-medium text-white text-sm"
//                         type="button"
//                     >
//                         {label}
//                     </button>
//                 ))}
//             </nav>
//         </header>
//     );
// }


// // import Link from "next/link";
// // import { Mail } from "lucide-react";

// // export default function Header() {
// //     return (
// //         <header className="w-full bg-white dark:bg-black shadow-md">
// //             <nav className="fixed top-4 right-8 z-50 flex space-x-12 text-white text-sm font-medium">
// //                 <Link href="/" className="hover:text-teal-500 hover:cursor-pointer">
// //                     Home
// //                 </Link>
// //                 <Link href="/how-to-join" className="hover:text-teal-500 hover:cursor-pointer">
// //                     How To Join
// //                 </Link>
// //                 <Link href="/what-we-grow" className="hover:text-teal-500 hover:cursor-pointer">
// //                     What We Grow
// //                 </Link>
// //                 <Link href="/contact-us" className="hover:text-teal-500 hover:cursor-pointer">
// //                     Contact Us
// //                 </Link>
// //             </nav>

// //         </header>
// //     );
// // }
