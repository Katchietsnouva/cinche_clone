// app/page.tsx
'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import VideoHero from '@/components/VideoHero';
import ScrollRevealSection from '@/components/ScrollRevealSection';
import InfiniteCarousel from '@/components/InfiniteCarousel';
import InvestorCarousel from '@/components/InvestorCarousel';
import Image from 'next/image';
import { Leaf } from 'lucide-react';

// Carousel Data
const PRODUCTS = [
  // { title: 'Seed Replication', icon: '🌱' },
  { title: 'Seed Replication', icon: '/secure_supply/seed_repl.png' },
  // { title: 'Domestic Vegetables', icon: '🥬' },
  { title: 'Domestic Vegetables', icon: '/secure_supply/vegetable-1.png' },
  // { title: 'Export Vegetables', icon: '✈️' },
  { title: 'Export Vegetables', icon: '/secure_supply/export_Vegetables.png' },
  // { title: 'Herbs', icon: '🌿' },
  { title: 'Herbs', icon: '/secure_supply/herbs.png' },
  // { title: 'Summer Flowers', icon: '🌻' },
  { title: 'Summer Flowers', icon: '/secure_supply/flower.png' },
  // { title: 'Broad Acre Crops', icon: '🌾' },
  // { title: 'Broad Acre Crops', icon: '🌾' },
  // { title: 'Perennial Trees', icon: '🌳' },
];

// Replace these paths with your actual investor logo files in /public
const INVESTOR_LOGOS = [
  '/investors_logos/l2.png',
  '/investors_logos/l3.png',
  '/investors_logos/l5.png',
  '/investors_logos/l6.png',
  '/investors_logos/l7.png',
  '/investors_logos/l8.png',
  '/investors_logos/minch.png',
  '/investors_logos/fact.png',
  '/investors_logos/beyond.png',
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Transform scroll progress for parallax and opacity effects
  const videoScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 0, 1]);
  const buttonY = useTransform(scrollYProgress, [0.25, 0.4], [50, 0]);
  // add transform
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <main ref={containerRef} className="relative">
      {/* Fixed Fullscreen Video Background */}
      <VideoHero videoScale={videoScale} />

      {/* Section 1: Initial Hero Text over Video */}
      <motion.section
        style={{ opacity: heroOpacity }}
        className="relative h-screen flex flex-col items-center justify-center text-center z-20 pointer-events-none max-w-[60vw] lg:max-w-[70vw] mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl md:text-9xl font-extralight text-white mb-4"
        >
          {/* Cinch */}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-4"
        >
          <Image
            src="/Cinch-Script-logo-white.png"
            alt="Cinch"
            width={800}
            height={300}
            className="mx-auto mb-2 "
            priority
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl md:text-6xl  font-extralight text-white/90 "
        >
          Turning idle land into income
        </motion.h2>
      </motion.section>

      {/* Section 2: Scroll-Revealed Text & Button */}
      <ScrollRevealSection
        textOpacity={textOpacity}
        buttonY={buttonY}
        scrollYProgress={scrollYProgress}
      />

      {/* Section 3: Supply Chain & Product Carousel */}
      <section className="relative min-h-screen bg-mycolor-warmWhite flex flex-col justify-center items-center px-4 py-16 z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">

          <div className='min-w-full mx-auto flex flex-row items-center '>
            <div className='flex flex-row gap-3'>
              {INVESTOR_LOGOS.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full cursor-pointer bg-teal-500`}
                />
              ))}
            </div>
            <div >
              <Image alt='secton' src={"/leaf.png"} width={200} height={200} className='w-24 h-24 rounded-2xl' />
            </div>
            <div className='flex flex-row gap-3'>
              {INVESTOR_LOGOS.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full cursor-pointer bg-teal-500`}
                />
              ))}
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl text-gray-800"
          >
            Secure your supply chain with Cinch.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto font-medium"
          >
            We create purpose built irrigated farms to meet your raw material needs
          </motion.p>
        </div>
        <InfiniteCarousel items={PRODUCTS} />
      </section>

      {/* Section 3: Supply Chain & Product Carousel */}
      {/* <section className="relative min-h-screen bg-mycolor-warmWhite flex flex-col justify-center items-center px-4 sm:px-6 py-16 z-10">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl text-gray-800"
          >
            Secure your supply chain with Cinch.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-medium"
          >
            We create purpose built irrigated farms to meet your raw material needs
          </motion.p>
        </div>
        <InfiniteCarousel items={PRODUCTS} />
      </section> */}



      {/* Section 4: Investors */}
      <section className="py-20 bg-gray-100 z-10">
        <div className="container mx-auto px-4">
          <h3 className="text-5xl font-light text-center text-black mb-12">
            Our Investors
          </h3>
          <InvestorCarousel logos={INVESTOR_LOGOS} />
        </div>
      </section>
    </main >
  );
}