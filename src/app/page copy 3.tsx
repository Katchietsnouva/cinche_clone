"use client";
import React from 'react';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden font-sans text-gray-900">

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }

        .infinite-scroll {
          width: 200%;
          display: flex;
        }
      `}</style>

      {/* Background Video - Fixed initially, plays infinitely */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/Cinch-Mkts-Dubb32.mp4"
      >
        Your browser does not support the video tag.
      </video>

      {/* Hero Section 1: Cinch + Tagline, overlaid on video */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white z-10">
        <h1 className="text-6xl font-bold mb-4">Cinch</h1>
        <h2 className="text-3xl font-semibold">Turning idle land into income</h2>
      </section>

      {/* Section 2: Scroll down reveals text + button, video still visible/fixed */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white bg-black/50 z-10">
        <p className="text-2xl mb-2">Want to generate income from your idle Land?</p>
        <p className="text-xl mb-6">Join Cinch and earn more money instantly, with no risk to you!</p>
        <a
          href="#contact"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </section>

      {/* Section 3: Supply Chain Text + Carousel List */}
      <section className="relative min-h-screen py-16 px-4 bg-white text-center z-10">
        {/* Supply Chain Description */}
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Secure your supply chain with Cinch. We create purpose built irrigated farms to meet your raw material needs
        </p>

        {/* Infinite Horizontal Carousel for List Items */}
        <div className="relative overflow-hidden max-w-4xl mx-auto">
          <div className="flex animate-scroll-left infinite-scroll space-x-8">
            {/* Repeat items for infinite effect; add your icons/images as <img src="/path/to/icon.png" className="w-16 h-16 mb-2" /> */}
            <div className="flex-shrink-0 w-48 text-center">
              {/* Placeholder for icon/image */}
              <div className="w-16 h-16 bg-gray-300 mx-auto mb-2"></div>
              <p>Seed Replication</p>
            </div>
            <div className="flex-shrink-0 w-48 text-center">
              <div className="w-16 h-16 bg-gray-300 mx-auto mb-2"></div>
              <p>Domestic Vegetables</p>
            </div>
            <div className="flex-shrink-0 w-48 text-center">
              <div className="w-16 h-16 bg-gray-300 mx-auto mb-2"></div>
              <p>Export Vegetables</p>
            </div>
            <div className="flex-shrink-0 w-48 text-center">
              <div className="w-16 h-16 bg-gray-300 mx-auto mb-2"></div>
              <p>Herbs</p>
            </div>
            <div className="flex-shrink-0 w-48 text-center">
              <div className="w-16 h-16 bg-gray-300 mx-auto mb-2"></div>
              <p>Summer Flowers</p>
            </div>
            {/* Duplicate for infinite loop */}
            <div className="flex-shrink-0 w-48 text-center">
              <div className="w-16 h-16 bg-gray-300 mx-auto mb-2"></div>
              <p>Seed Replication</p>
            </div>
            <div className="flex-shrink-0 w-48 text-center">
              <div className="w-16 h-16 bg-gray-300 mx-auto mb-2"></div>
              <p>Domestic Vegetables</p>
            </div>
            {/* Add more duplicates if needed */}
          </div>

          {/* Chevrons for manual scroll - Add JS for interaction if needed */}
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/80">
            &lt;
          </button>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/80">
            &gt;
          </button>
        </div>
      </section>

      {/* Investors Section */}
      <section className="py-16 px-4 bg-gray-100 text-center z-10">
        <h3 className="text-3xl font-semibold mb-8">Our Investors</h3>
        {/* Infinite Horizontal Carousel for Investor Logos */}
        <div className="relative overflow-hidden max-w-4xl mx-auto">
          <div className="flex animate-scroll-left infinite-scroll space-x-8">
            {/* Placeholders for logos; replace src with your public folder paths, e.g., /logo1.png */}
            <img src="/placeholder-logo1.png" alt="Investor 1" className="h-16 flex-shrink-0" />
            <img src="/placeholder-logo2.png" alt="Investor 2" className="h-16 flex-shrink-0" />
            <img src="/placeholder-logo3.png" alt="Investor 3" className="h-16 flex-shrink-0" />
            {/* Duplicate for infinite */}
            <img src="/placeholder-logo1.png" alt="Investor 1" className="h-16 flex-shrink-0" />
            <img src="/placeholder-logo2.png" alt="Investor 2" className="h-16 flex-shrink-0" />
          </div>

          {/* Chevrons */}
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/80">
            &lt;
          </button>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/80">
            &gt;
          </button>
        </div>
      </section>

    </div>
  );
}