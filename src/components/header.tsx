// 'use client';

// import React, { useState } from "react";
// import { motion } from 'framer-motion';
// import { Menu, X } from 'lucide-react';

// function scrollToSection(id: string) {
//     const el = document.getElementById(id);
//     if (el) {
//         el.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
// }

// const navItems = [
//     { label: "Home", id: "home" },
//     { label: "How To Join", id: "how-to-join" },
//     { label: "What We Grow", id: "what-we-grow" },
//     { label: "Contact Us", id: "contact-us" },
// ];

// const overlayVariants = {
//     open: { 
//         width: '100%', 
//         transition: { 
//             duration: 0.5, 
//             ease: [0.32, 0, 0.67, 0], // Fast, sharp ease-in
//             delay: 0.1 // Slight delay for artistic effect
//         } 
//     },
//     closed: { 
//         width: 0, 
//         transition: { 
//             duration: 0.4, 
//             ease: [0.22, 1, 0.36, 1], // Smooth ease-out
//             delay: 0.2 // Overlay stays a bit longer on close
//         } 
//     }
// };

// const panelVariants = {
//     open: { 
//         width: '100%', 
//         transition: { 
//             duration: 1.7, // Longer duration than overlay for spring effect
//             ease: [0.34, 1.56, 0.64, 1], // Springy overshoot effect
//             delay: 0 // Starts immediately, no delay
//         } 
//     },
//     closed: { 
//         width: 0, 
//         transition: { 
//             duration: 0.6, // Slightly slower than overlay
//             ease: [0.68, -0.55, 0.27, 1.55], // Bouncy spring-out
//             delay: 0.1 // Slight delay for layered effect
//         } 
//     }
// };

// const contentVariants = {
//     open: { 
//         opacity: 1, 
//         y: 0,
//         transition: { 
//             delay: 0.5, // Wait for panel animation
//             duration: 0.5,
//             ease: [0.34, 1.56, 0.64, 1], // Springy
//             staggerChildren: 0.1, // For individual menu items if you use them
//             when: "beforeChildren" // Animate parent first
//         } 
//     },
//     closed: { 
//         opacity: 0, 
//         y: -20,
//         transition: { 
//             duration: 0.3,
//             ease: [0.32, 0, 0.67, 0], // Sharp ease-in
//             delay: 0.1, // Slight delay
//             staggerChildren: 0.05, // For staggered exit
//             staggerDirection: -1 // Reverse stagger on exit
//         } 
//     }
// };

// const navItemVariants = {
//     open: {
//         opacity: 1,
//         x: 0,
//         transition: {
//             type: "spring",
//             stiffness: 200,
//             damping: 15
//         }
//     },
//     closed: {
//         opacity: 0,
//         x: -20,
//         transition: {
//             duration: 0.2
//         }
//     }
// };

// export default function Header() {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <header className="w-full bg-transparent">
//             {/* Desktop Nav */}
//             <nav className="hidden md:flex fixed top-4 right-8 z-50 space-x-12 text-white text-sm font-medium">
//                 {navItems.map(({ label, id }) => (
//                     <button
//                         key={id}
//                         onClick={() => scrollToSection(id)}
//                         className="hover:text-teal-500 cursor-pointer bg-transparent border-none p-0 font-medium text-white text-sm transition-colors duration-200"
//                         type="button"
//                     >
//                         {label}
//                     </button>
//                 ))}
//             </nav>

//             {/* Mobile Menu Button */}
//             <button
//                 onClick={() => setIsOpen(true)}
//                 className="md:hidden fixed top-4 right-4 z-50 text-white hover:text-teal-500 transition-colors duration-200"
//                 aria-label="Open menu"
//             >
//                 <Menu size={32} />
//             </button>

//             {/* Drawer */}
//             {isOpen && (
//                 <>
//                     {/* Dark Overlay - Fast opening, slower closing with delay */}
//                     <motion.div
//                         initial="closed"
//                         animate="open"
//                         exit="closed"
//                         variants={overlayVariants}
//                         className="fixed inset-0 bg-black/70 z-40"
//                         style={{ left: 0, overflow: 'hidden' }}
//                     />

//                     {/* White Panel - Springy opening, bouncy closing */}
//                     <motion.div
//                         initial="closed"
//                         animate="open"
//                         exit="closed"
//                         variants={panelVariants}
//                         className="fixed inset-0 bg-white z-50 flex flex-col"
//                         style={{ left: 0, overflow: 'hidden' }}
//                     >
//                         {/* Close Button */}
//                         <motion.button
//                             onClick={() => setIsOpen(false)}
//                             className="absolute top-4 right-4 text-black hover:text-teal-500 transition-colors duration-200"
//                             aria-label="Close menu"
//                             initial={{ opacity: 0, rotate: -90 }}
//                             animate={{ opacity: 1, rotate: 0 }}
//                             transition={{ delay: 0.7, duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
//                             exit={{ opacity: 0, rotate: 90 }}
//                         >
//                             <X size={32} />
//                         </motion.button>

//                         {/* Nav Items with staggered animation */}
//                         <motion.ul
//                             initial="closed"
//                             animate="open"
//                             exit="closed"
//                             variants={contentVariants}
//                             className="flex flex-col items-start p-8 space-y-8 mt-20"
//                         >
//                             {navItems.map(({ label, id }, index) => (
//                                 <motion.li 
//                                     key={id}
//                                     variants={navItemVariants}
//                                     custom={index}
//                                 >
//                                     <button
//                                         onClick={() => {
//                                             setIsOpen(false);
//                                             setTimeout(() => scrollToSection(id), 500); // Wait for animation
//                                         }}
//                                         className="text-black text-2xl font-medium hover:text-teal-500 transition-colors duration-200"
//                                     >
//                                         {label}
//                                     </button>
//                                 </motion.li>
//                             ))}
//                         </motion.ul>
//                     </motion.div>
//                 </>
//             )}
//         </header>
//     );
// }











'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

function scrollToSection(id: string, closeMenu?: () => void) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (closeMenu) closeMenu();
}

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [currentSection, setCurrentSection] = useState("home");

    const navItems = [
        { label: "Home", id: "home" },
        { label: "How To Join", id: "how-to-join" },
        { label: "What We Grow", id: "what-we-grow" },
        { label: "Contact Us", id: "contact-us" },
    ];

    // Track which section is in view
    useEffect(() => {
        const handleScroll = () => {
            let found = "home";
            navItems.forEach(({ id }) => {
                const el = document.getElementById(id);
                if (el) {
                    const top = el.getBoundingClientRect().top;
                    if (top <= 100) found = id;
                }
            });
            setCurrentSection(found);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // initialize on mount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 0.5, transition: { duration: 0.5, ease: easeInOut } },
        exit: { opacity: 0, transition: { duration: 0.3, ease: easeInOut } },
    };

    const drawerVariants = {
        hidden: { x: "-100%" },
        visible: { x: 0, transition: { delay: 0.3, duration: 0.5, ease: easeInOut } },
        exit: { x: "-100%", transition: { duration: 0.4, ease: easeInOut } },
    };

    const drawerItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: { delay: 0.5 + i * 0.1, duration: 0.4, ease: easeInOut },
        }),
    };

    return (
        <header className="w-full bg-transparent">
            {/* Desktop nav */}
            {/* <nav className="hidden md:flex fixed top-4 right-8 z-50 space-x-12 text-sm font-medium"> */}
            <motion.nav
                className="hidden md:flex fixed top-4 right-8 z-50 space-x-12 text-sm font-medium"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: easeInOut, delay: 0.5 }}
            >
                {navItems.map(({ label, id }) => (
                    <button
                        key={id}
                        onClick={() => scrollToSection(id)}
                        className={`cursor-pointer bg-transparent border-none p-0 font-medium text-sm hover:text-teal-500
                            ${
                            // id === "home" || id === "how-to-join"
                            //     ? "text-white"
                            //     : currentSection === id
                            //         ? "text-black"
                            //         : currentSection === "home"
                            //             ? "text-white"
                            //             : "text-black"

                            currentSection === id ? "text-teal-500" :
                                currentSection === "home" || currentSection === "how-to-join"
                                    ? "text-white"
                                    : "text-black"
                            }`
                        }
                        // ${currentSection === id ? "text-teal-500" : "text-black"}
                        type="button"
                    >
                        {label}
                    </button>
                ))}
            </motion.nav>

            {/* Mobile menu button */}
            <div className="md:hidden fixed top-4 right-4 z-60">
                <button
                    aria-label="Open menu"
                    onClick={() => setMenuOpen(true)}
                    className="text-black text-2xl font-bold p-2 focus:outline-none"
                >
                    ☰
                </button>
            </div>

            {/* Mobile drawer + overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        <motion.div
                            key="overlay"
                            className="fixed inset-0 bg-black z-50"
                            variants={overlayVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={() => setMenuOpen(false)}
                        />

                        <motion.nav
                            key="drawer"
                            className="fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white z-60 shadow-lg flex flex-col pt-6 px-6"
                            variants={drawerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <button
                                aria-label="Close menu"
                                onClick={() => setMenuOpen(false)}
                                className="self-end text-black text-2xl font-bold mb-8 focus:outline-none"
                            >
                                ✕
                            </button>

                            {navItems.map(({ label, id }, i) => (
                                <motion.button
                                    key={id}
                                    onClick={() => scrollToSection(id, () => setMenuOpen(false))}
                                    // className={`text-lg font-medium mb-6 text-left focus:outline-none text-black `}
                                    className={`text-lg font-medium mb-6 text-left focus:outline-none hover:text-teal-500
                                        ${currentSection === id ? "text-teal-500" : "text-black"}
                                    `}
                                    type="button"
                                    custom={i}
                                    variants={drawerItemVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    {label}
                                </motion.button>
                            ))}
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </header >
    );
}








// 'use client';

// import React, { useState } from "react";
// import { motion, AnimatePresence, easeInOut } from "framer-motion";

// function scrollToSection(id: string, closeMenu: () => void) {
//     const el = document.getElementById(id);
//     if (el) {
//         el.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//     closeMenu();
// }

// export default function Header() {
//     const [menuOpen, setMenuOpen] = useState(false);

//     const overlayVariants = {
//         hidden: { opacity: 0 },
//         visible: { opacity: 0.5, transition: { duration: 0.5, ease: easeInOut } },
//         exit: { opacity: 0, transition: { duration: 0.3, ease: easeInOut } },
//     };

//     const drawerVariants = {
//         hidden: { x: "-100%" },
//         visible: { x: 0, transition: { delay: 0.3, duration: 0.5, ease: easeInOut } },
//         exit: { x: "-100%", transition: { duration: 0.4, ease: easeInOut } },
//     };

//     const navItems = [
//         { label: "Home", id: "home" },
//         { label: "How To Join", id: "how-to-join" },
//         { label: "What We Grow", id: "what-we-grow" },
//         { label: "Contact Us", id: "contact-us" },
//     ];

//     return (
//         <header className="w-full bg-transparent">
//             {/* Desktop nav (md and up) */}
//             <nav className="hidden md:flex fixed top-4 right-8 z-50 space-x-12 text-white text-sm font-medium">
//                 {navItems.map(({ label, id }) => (
//                     <button
//                         key={id}
//                         onClick={() => scrollToSection(id, () => { })}
//                         className="hover:text-teal-500 cursor-pointer bg-transparent border-none p-0 font-medium text-white text-sm"
//                         type="button"
//                     >
//                         {label}
//                     </button>
//                 ))}
//             </nav>

//             {/* Mobile menu button */}
//             <div className="md:hidden fixed top-4 right-4 z-60">
//                 <button
//                     aria-label="Open menu"
//                     onClick={() => setMenuOpen(true)}
//                     className="text-white text-2xl font-bold p-2 focus:outline-none"
//                 >
//                     ☰
//                 </button>
//             </div>

//             {/* AnimatePresence for overlay + drawer */}
//             <AnimatePresence>
//                 {menuOpen && (
//                     <>
//                         {/* Dark overlay */}
//                         <motion.div
//                             key="overlay"
//                             className="fixed inset-0 bg-black z-50"
//                             variants={overlayVariants}
//                             initial="hidden"
//                             animate="visible"
//                             exit="exit"
//                             onClick={() => setMenuOpen(false)}
//                         />

//                         {/* Drawer */}
//                         <motion.nav
//                             key="drawer"
//                             className="fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white z-60 shadow-lg flex flex-col pt-6 px-6"
//                             variants={drawerVariants}
//                             initial="hidden"
//                             animate="visible"
//                             exit="exit"
//                         >
//                             {/* Close button */}
//                             <button
//                                 aria-label="Close menu"
//                                 onClick={() => setMenuOpen(false)}
//                                 className="self-end text-black text-2xl font-bold mb-8 focus:outline-none"
//                             >
//                                 ✕
//                             </button>

//                             {/* Menu items */}
//                             {navItems.map(({ label, id }) => (
//                                 <button
//                                     key={id}
//                                     onClick={() => scrollToSection(id, () => setMenuOpen(false))}
//                                     className="text-black text-lg font-medium mb-6 text-left focus:outline-none"
//                                     type="button"
//                                 >
//                                     {label}
//                                 </button>
//                             ))}
//                         </motion.nav>
//                     </>
//                 )}
//             </AnimatePresence>
//         </header>
//     );
// }










// // 'use client';


// // import React from "react";

// // function scrollToSection(id: string) {
// //     const el = document.getElementById(id);
// //     if (el) {
// //         el.scrollIntoView({ behavior: "smooth", block: "start" });
// //     }
// // }

// // export default function Header() {
// //     return (
// //         <header className="w-full bg-transparent">
// //             <nav className="fixed top-4 right-8 z-50 flex space-x-12 text-white text-sm font-medium">
// //                 {[
// //                     { label: "Home", id: "home" },
// //                     { label: "How To Join", id: "how-to-join" },
// //                     { label: "What We Grow", id: "what-we-grow" },
// //                     { label: "Contact Us", id: "contact-us" },
// //                 ].map(({ label, id }) => (
// //                     <button
// //                         key={id}
// //                         onClick={() => scrollToSection(id)}
// //                         className="hover:text-teal-500 cursor-pointer bg-transparent border-none p-0 font-medium text-white text-sm"
// //                         type="button"
// //                     >
// //                         {label}
// //                     </button>
// //                 ))}
// //             </nav>
// //         </header>
// //     );
// // }


// // // import Link from "next/link";
// // // import { Mail } from "lucide-react";

// // // export default function Header() {
// // //     return (
// // //         <header className="w-full bg-white dark:bg-black shadow-md">
// // //             <nav className="fixed top-4 right-8 z-50 flex space-x-12 text-white text-sm font-medium">
// // //                 <Link href="/" className="hover:text-teal-500 hover:cursor-pointer">
// // //                     Home
// // //                 </Link>
// // //                 <Link href="/how-to-join" className="hover:text-teal-500 hover:cursor-pointer">
// // //                     How To Join
// // //                 </Link>
// // //                 <Link href="/what-we-grow" className="hover:text-teal-500 hover:cursor-pointer">
// // //                     What We Grow
// // //                 </Link>
// // //                 <Link href="/contact-us" className="hover:text-teal-500 hover:cursor-pointer">
// // //                     Contact Us
// // //                 </Link>
// // //             </nav>

// // //         </header>
// // //     );
// // // }
