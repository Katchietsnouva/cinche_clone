// components/ScrollRevealSection.tsx
'use client';
// import { MotionValue } from 'framer-motion';
// import { motion } from 'framer-motion';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface ScrollRevealSectionProps {
    textOpacity: MotionValue<number>;
    buttonY: MotionValue<number>;
    scrollYProgress: MotionValue<number>;
}

export default function ScrollRevealSection({
    textOpacity,
    buttonY,
    scrollYProgress,
}: ScrollRevealSectionProps) {
    const sectionOpacity = useTransform(scrollYProgress, [0.5, 0.7], [1, 0]);

    return (
        <motion.section
            style={{ opacity: sectionOpacity }}
            className="relative h-screen flex flex-col items-center justify-center text-center z-20"
        >
            {/* <div className="bg-black/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl max-w-3xl mx-4"> */}
            <div className=" p-8 md:p-12 rounded-2xl max-w-3xl mx-4">
                <motion.p
                    style={{ opacity: textOpacity }}
                    className="text-3xl md:text-6xl capitalize text-white mb-4 "
                >
                    Want to generate income from your idle Land? 
                </motion.p> 


                <motion.p
                    style={{ opacity: textOpacity }}
                    className="text-xl md:text-2xl text-gray-200 mb-8"
                >
                    Join Cinch and earn more money instantly, with no risk to you!
                </motion.p>
                <motion.a
                    style={{ y: buttonY, opacity: textOpacity }}
                    href="#contact"
                    className="inline-block px-8 py-4 bg-white hover:bg-transparent  border border-white text-black  hover:text-white font-bold text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                    Contact Us
                </motion.a>
            </div>
        </motion.section>
    );
}