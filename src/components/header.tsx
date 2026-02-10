'use client';

import React, { useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

function scrollToSection(id: string, closeMenu: () => void) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  closeMenu();
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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

  const navItems = [
    { label: "Home", id: "home" },
    { label: "How To Join", id: "how-to-join" },
    { label: "What We Grow", id: "what-we-grow" },
    { label: "Contact Us", id: "contact-us" },
  ];

  return (
    <header className="w-full bg-transparent">
      {/* Desktop nav (md and up) */}
      <nav className="hidden md:flex fixed top-4 right-8 z-50 space-x-12 text-white text-sm font-medium">
        {navItems.map(({ label, id }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id, () => {})}
            className="hover:text-teal-500 cursor-pointer bg-transparent border-none p-0 font-medium text-white text-sm"
            type="button"
          >
            {label}
          </button>
        ))}
      </nav>

      {/* Mobile menu button */}
      <div className="md:hidden fixed top-4 right-4 z-60">
        <button
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
          className="text-white text-2xl font-bold p-2 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* AnimatePresence for overlay + drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Dark overlay */}
            <motion.div
              key="overlay"
              className="fixed inset-0 bg-black z-50"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.nav
              key="drawer"
              className="fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white z-60 shadow-lg flex flex-col pt-6 px-6"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Close button */}
              <button
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="self-end text-black text-2xl font-bold mb-8 focus:outline-none"
              >
                ✕
              </button>

              {/* Menu items */}
              {navItems.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id, () => setMenuOpen(false))}
                  className="text-black text-lg font-medium mb-6 text-left focus:outline-none"
                  type="button"
                >
                  {label}
                </button>
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
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
