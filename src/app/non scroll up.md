The issue is that your hero text section is **moving upwards** when scrolling because it's placed in normal document flow (inside `<main>` → scrolling pushes it up like any other content).

You want:

- The **video background** stays pinned/full-viewport
- The **hero text overlay** (logo + tagline) **stays visually pinned at the center** while slowly fading out
- No upward movement of the text — only fade based on scroll

### Quick Fix Summary

Make the hero text section **position: fixed** (or absolute + full viewport), so it doesn't participate in scroll flow.

Here are the two most common clean approaches — pick one:

#### Option 1 – Fixed positioning (recommended, simplest)

```tsx
      {/* Video stays behind – already handled by VideoHero */}
      <VideoHero videoScale={videoScale} />

      {/* Hero text – pinned, doesn't scroll away, only fades */}
      <motion.section
        style={{ opacity: heroOpacity }}
        className="fixed inset-0 z-20 flex flex-col items-center justify-center text-center pointer-events-none px-6"
      >
        {/* reduced max-w so it doesn't feel too wide on desktop */}
        <div className="max-w-[85vw] md:max-w-[70vw] lg:max-w-[60vw] w-full">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extralight text-white mb-4 md:mb-6"
          >
            {/* Cinch – or remove if only using logo */}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="mb-6 md:mb-8"
          >
            <Image
              src="/Cinch-Script-logo-white.png"
              alt="Cinch"
              width={800}
              height={300}
              className="mx-auto w-full max-w-[320px] sm:max-w-[380px] md:max-w-[500px] lg:max-w-[620px]"
              priority
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-white/90"
          >
            Turning idle land into income
          </motion.h2>

        </div>
      </motion.section>

      {/* The rest of your content – now starts scrolling normally under the fading hero */}
      <div className="relative z-10">
        {/* Section 2, 3, 4... */}
        <ScrollRevealSection ... />
        ...
      </div>
```

#### Key changes & why it works

- `fixed inset-0` → pins it to viewport, no upward movement ever
- Removed `h-screen` + `relative` from the motion.section
- Added wrapper `<div>` with responsive `max-w` to prevent logo/text from becoming gigantic on ultra-wide screens
- Adjusted image `max-w` classes responsively
- Wrapped later content in `z-10` container so it scrolls **under** the fading hero

#### Option 2 – Keep it inside flow but cancel the upward movement (more advanced)

If you really want to keep it in flow (e.g. for SSR/SEO reasons), you can counter-scroll it:

```tsx
const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -window.innerHeight * 0.15]);
```

```tsx
<motion.section
  style={{ 
    y: heroY,               // ← counter movement
    opacity: heroOpacity 
  }}
  className="relative h-screen flex ... z-20 ..."
>
```

But this is trickier to get pixel-perfect across devices → **fixed** is usually cleaner and more reliable.

### Recommendation

Use **Option 1 (fixed)** — it's what most modern landing pages with scroll-fading heroes do (Webflow templates, many Framer sites, etc.).

Your `heroOpacity` range `[0, 0.15]` is already quite good — it fades out pretty early, which feels smooth.

Let me know if you want a version with stagger / slight scale-down while fading, or if the video component itself is moving — I can help tune that too.















Here is the **complete updated `app/page.tsx`** code with the hero text section now **fixed in place**, fading out smoothly on scroll **without moving upward**:

```tsx
// app/page.tsx
'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import VideoHero from '@/components/VideoHero';
import ScrollRevealSection from '@/components/ScrollRevealSection';
import InfiniteCarousel from '@/components/InfiniteCarousel';
import InvestorCarousel from '@/components/InvestorCarousel';
import Image from 'next/image';

// Carousel Data
const PRODUCTS = [
  { title: 'Seed Replication', icon: '🌱' },
  { title: 'Domestic Vegetables', icon: '🥬' },
  { title: 'Export Vegetables', icon: '✈️' },
  { title: 'Herbs', icon: '🌿' },
  { title: 'Summer Flowers', icon: '🌻' },
  { title: 'Broad Acre Crops', icon: '🌾' },
  { title: 'Perennial Trees', icon: '🌳' },
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

  // Transforms
  const videoScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // Optional: you can still use these if ScrollRevealSection needs them
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 0, 1]);
  const buttonY = useTransform(scrollYProgress, [0.25, 0.4], [50, 0]);

  return (
    <main ref={containerRef} className="relative min-h-screen">
      {/* 1. Pinned video background */}
      <VideoHero videoScale={videoScale} />

      {/* 2. Hero overlay – FIXED, centered, fades out, NO upward movement */}
      <motion.section
        style={{ opacity: heroOpacity }}
        className="fixed inset-0 z-20 flex flex-col items-center justify-center text-center pointer-events-none px-6"
      >
        <div className="max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] w-full">
          {/* Logo – bigger on larger screens */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="mb-6 md:mb-10"
          >
            <Image
              src="/Cinch-Script-logo-white.png"
              alt="Cinch"
              width={900}
              height={340}
              className="mx-auto w-full max-w-[340px] sm:max-w-[420px] md:max-w-[580px] lg:max-w-[720px] xl:max-w-[820px]"
              priority
            />
          </motion.div>

          {/* Tagline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-white/90 tracking-wide"
          >
            Turning idle land into income
          </motion.h2>
        </div>
      </motion.section>

      {/* 3. All scrolling content starts here – appears under the fading hero */}
      <div className="relative z-10 bg-white">
        {/* Optional: small spacer so first content doesn't appear instantly under hero */}
        <div className="h-screen invisible" aria-hidden="true" />

        {/* Your existing ScrollRevealSection */}
        <ScrollRevealSection
          textOpacity={textOpacity}
          buttonY={buttonY}
          scrollYProgress={scrollYProgress}
        />

        {/* Supply Chain + Products Carousel */}
        <section className="relative min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col justify-center items-center px-4 py-20">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl text-gray-800 font-light"
            >
              Secure your supply chain with Cinch.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-extralight"
            >
              We create purpose-built irrigated farms to meet your raw material needs
            </motion.p>
          </div>
          <InfiniteCarousel items={PRODUCTS} />
        </section>

        {/* Investors */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <h3 className="text-4xl md:text-5xl font-light text-center text-gray-800 mb-16">
              Our Investors & Partners
            </h3>
            <InvestorCarousel logos={INVESTOR_LOGOS} />
          </div>
        </section>
      </div>
    </main>
  );
}
```

### Key Changes Summary

- Hero text section → `fixed inset-0` → stays pinned in viewport center
- No upward movement — only opacity fade via `heroOpacity`
- Content moved under a `z-10` wrapper + invisible `h-screen` spacer (prevents overlap / flash)
- Responsive logo sizing with `max-w` breakpoints
- Cleaned up unused `h1` (since logo is the main branding)
- Slightly better animation timing & spacing

Test it — the logo + tagline should now stay perfectly centered and only fade out as you scroll down, while the rest of the page scrolls normally underneath.

Let me know if `VideoHero` itself is moving or if you want to adjust fade timing / add scale/letter-spacing effects during fade.