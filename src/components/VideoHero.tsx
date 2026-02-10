// components/VideoHero.tsx
'use client';
import { motion, MotionValue } from 'framer-motion';

interface VideoHeroProps {
    videoScale: MotionValue<number>;
}

export default function VideoHero({ videoScale }: VideoHeroProps) {
    return (
        <motion.div
            style={{ scale: videoScale }}
            className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden"
        >
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/Cinch-Mkts-Dubb32.mp4" // Place your video in /public
                poster="/video-poster.jpg" // Optional: a placeholder image
            >
                Your browser does not support the video tag.
            </video>
            {/* Optional overlay to improve text readability */}
            <div className="absolute inset-0 bg-black/30"></div>
        </motion.div>
    );
}