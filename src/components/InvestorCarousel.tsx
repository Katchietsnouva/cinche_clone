'use client';

import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface InvestorCarouselProps {
  logos: string[];
}

export default function InvestorCarousel({ logos }: InvestorCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const [showLeftChevron, setShowLeftChevron] = useState(false);
  const [showRightChevron, setShowRightChevron] = useState(true);
  const [itemWidth, setItemWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Duplicate logos for seamless infinite loop effect
  const duplicatedLogos = [...logos, ...logos, ...logos];

  const gap = 48; // space-x-12 = 3rem = 48px (assuming 16px base)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current || !itemWidth) return;
    const scrollAmount = itemWidth + gap;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current || !itemWidth) return;
    const step = itemWidth + gap;
    const numItems = logos.length;
    const currentScroll = scrollRef.current.scrollLeft;
    const currentCycle = Math.floor(currentScroll / (numItems * step));
    const targetScroll = currentCycle * (numItems * step) + index * step;
    scrollRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (!scrollRef.current || !itemWidth) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
   
    // Show/hide chevrons based on scroll position
    setShowLeftChevron(scrollLeft > 10);
    setShowRightChevron(scrollLeft < scrollWidth - clientWidth - 10);

    // Calculate current index for dots
    const index = Math.round(scrollLeft / (itemWidth + gap)) % logos.length;
    setCurrentIndex(index);
  };

  const updateItemWidth = () => {
    if (itemRef.current) {
      setItemWidth(itemRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    updateItemWidth();
    window.addEventListener('resize', updateItemWidth);
    return () => window.removeEventListener('resize', updateItemWidth);
  }, []);

  useEffect(() => {
    if (!scrollRef.current || !itemWidth) return;
    const step = itemWidth + gap;
    const loopPoint = logos.length * step;
    scrollRef.current.scrollLeft = loopPoint; // Start at the middle cycle for infinite scrolling
  }, [itemWidth, logos.length]);

  useEffect(() => {
    if (!isAutoScrolling || !scrollRef.current || !itemWidth) return;

    const speed = 2; // Adjust speed (pixels per frame)
    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      scrollRef.current.scrollLeft += speed;

      const step = itemWidth + gap;
      const loopPoint = logos.length * step;
      if (scrollRef.current.scrollLeft >= loopPoint * 2) {
        scrollRef.current.scrollLeft -= loopPoint * 2;
      } else if (scrollRef.current.scrollLeft < 0) {
        scrollRef.current.scrollLeft += loopPoint * 2;
      }
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [isAutoScrolling, itemWidth, logos.length]);

  return (
    <div 
      className="relative w-full max-w-6xl px-12 mx-auto"
      onMouseEnter={() => setIsAutoScrolling(false)}
      onMouseLeave={() => setIsAutoScrolling(true)}
    >
     
      {/* Left Chevron */}
      {showLeftChevron && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg border border-gray-200 hover:scale-110 transition-transform"
          aria-label="Scroll investor logos left"
        >
          <ChevronLeft size={28} className="text-gray-700" />
        </button>
      )}

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-hidden scroll-smooth space-x-12 py-8 no-scrollbar hover:group"
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            ref={index === 0 ? itemRef : null}
            // className="flex-shrink-0 w-full sm:w-full lg:w-[calc(50% - 1.5rem)] xl:w-[calc(33.333% - 2rem)] flex items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow min-h-[120px]"
          >
            <div className="relative w-80 h-40">
              <Image
                src={logo}
                alt={`Investor logo ${index + 1}`}
                fill
                // className="object-contain grayscale-80 hover:grayscale-100 "
                // className="object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition duration-300" 
                className="object-contain grayscale opacity-60 hover:grayscale-0 hover:brightness-0 hover:opacity-100 transition duration-300" 
                sizes="320px"
                
              />
            </div>
          </div>
        ))}
      </div>

      {/* Right Chevron */}
      {showRightChevron && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg border border-gray-200 hover:scale-110 transition-transform"
          aria-label="Scroll investor logos right"
        >
          <ChevronRight size={28} className="text-gray-700" />
        </button>
      )}

      {/* Dots Navigation */}
      <div className="flex justify-center space-x-6 mt-4">
        {logos.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? 'bg-teal-500' : 'bg-gray-800'}`}
            onClick={() => scrollToIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}


// 'use client';

// import { useRef, useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import Image from 'next/image';

// interface InvestorCarouselProps {
//   logos: string[];
// }

// export default function InvestorCarousel({ logos }: InvestorCarouselProps) {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const itemRef = useRef<HTMLDivElement>(null);
//   const [showLeftChevron, setShowLeftChevron] = useState(false);
//   const [showRightChevron, setShowRightChevron] = useState(true);
//   const [itemWidth, setItemWidth] = useState(0);
//   const [currentIndex, setCurrentIndex] = useState(0);
  
//   // Duplicate logos for seamless infinite loop effect
//   const duplicatedLogos = [...logos, ...logos, ...logos];

//   const gap = 48; // space-x-12 = 3rem = 48px (assuming 16px base)

//   const scroll = (direction: 'left' | 'right') => {
//     if (!scrollRef.current || !itemWidth) return;
//     const scrollAmount = itemWidth + gap;
//     scrollRef.current.scrollBy({
//       left: direction === 'left' ? -scrollAmount : scrollAmount,
//       behavior: 'smooth',
//     });
//   };

//   const handleScroll = () => {
//     if (!scrollRef.current || !itemWidth) return;
//     const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    
//     // Show/hide chevrons based on scroll position
//     setShowLeftChevron(scrollLeft > 10);
//     setShowRightChevron(scrollLeft < scrollWidth - clientWidth - 10);

//     // Calculate current index for dots
//     const index = Math.round(scrollLeft / (itemWidth + gap)) % logos.length;
//     setCurrentIndex(index);
//   };

//   const updateItemWidth = () => {
//     if (itemRef.current) {
//       setItemWidth(itemRef.current.offsetWidth);
//     }
//   };

//   useEffect(() => {
//     updateItemWidth();
//     window.addEventListener('resize', updateItemWidth);
//     return () => window.removeEventListener('resize', updateItemWidth);
//   }, []);

//   return (
//     <div className="relative w-full max-w-6xl px-12 mx-auto">
      
//       {/* Left Chevron */}
//       {showLeftChevron && (
//         <button
//           onClick={() => scroll('left')}
//           className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg border border-gray-200 hover:scale-110 transition-transform"
//           aria-label="Scroll investor logos left"
//         >
//           <ChevronLeft size={28} className="text-gray-700" />
//         </button>
//       )}

//       {/* Carousel Container */}
//       <div
//         ref={scrollRef}
//         onScroll={handleScroll}
//         className="flex overflow-x-hidden scroll-smooth space-x-12 py-8 no-scrollbar"
//       >
//         {duplicatedLogos.map((logo, index) => (
//           <div
//             key={`${logo}-${index}`}
//             ref={index === 0 ? itemRef : null}
//             // className="flex-shrink-0 w-full lg:w-[calc((100%-3rem)/2)] xl:w-[calc((100%-6rem)/3)] flex items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow min-h-[120px]"
//           >
//             <div className="relative w-40 h-20">
//               <Image
//                 src={logo}
//                 alt={`Investor logo ${index + 1}`}
//                 fill
//                 className="object-contain"
//                 sizes="160px"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
 
        
//       {/* Right Chevron */}
//       {showRightChevron && (
//         <button
//           onClick={() => scroll('right')}
//           className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg border border-gray-200 hover:scale-110 transition-transform"
//           aria-label="Scroll investor logos right"
//         >
//           <ChevronRight size={28} className="text-gray-700" />
//         </button>
//       )}

//       {/* Dots Navigation */}
//       <div className="flex justify-center space-x-2 mt-4">
//         {logos.map((_, index) => (
//           <div
//             key={index}
//             className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-teal-500' : 'bg-gray-300'}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }





// // // components/InvestorCarousel.tsx
// // 'use client';

// // import { useRef, useState } from 'react';
// // import { ChevronLeft, ChevronRight } from 'lucide-react';
// // import Image from 'next/image';

// // interface InvestorCarouselProps {
// //   logos: string[];
// // }

// // export default function InvestorCarousel({ logos }: InvestorCarouselProps) {
// //   const scrollRef = useRef<HTMLDivElement>(null);
// //   const [showLeftChevron, setShowLeftChevron] = useState(false);
// //   const [showRightChevron, setShowRightChevron] = useState(true);
  
// //   // Duplicate logos for seamless infinite loop effect
// //   const duplicatedLogos = [...logos, ...logos, ...logos];

// //   const scroll = (direction: 'left' | 'right') => {
// //     if (!scrollRef.current) return;
// //     const scrollAmount = 300;
// //     scrollRef.current.scrollBy({
// //       left: direction === 'left' ? -scrollAmount : scrollAmount,
// //       behavior: 'smooth',
// //     });
// //   };

// //   const handleScroll = () => {
// //     if (!scrollRef.current) return;
// //     const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    
// //     // Show/hide chevrons based on scroll position
// //     setShowLeftChevron(scrollLeft > 10);
// //     setShowRightChevron(scrollLeft < scrollWidth - clientWidth - 10);
// //   };

// //   return (
// //     <div className="relative w-full max-w-6xl px-12 mx-auto">
      
// //       {/* Left Chevron */}
// //       {showLeftChevron && (
// //         <button
// //           onClick={() => scroll('left')}
// //           className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg border border-gray-200 hover:scale-110 transition-transform"
// //           aria-label="Scroll investor logos left"
// //         >
// //           <ChevronLeft size={28} className="text-gray-700" />
// //         </button>
// //       )}

// //       {/* Carousel Container */}
// //       <div
// //         ref={scrollRef}
// //         onScroll={handleScroll}
// //         className="flex overflow-x-hidden scroll-smooth space-x-12 py-8 no-scrollbar"
// //       >
// //         {duplicatedLogos.map((logo, index) => (
// //           <div
// //             key={`${logo}-${index}`}
// //             className="flex-shrink-0 flex items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow min-h-[120px] min-w-[180px]"
// //           >
// //             <div className="relative w-40 h-20">
// //               <Image
// //                 src={logo}
// //                 alt={`Investor logo ${index + 1}`}
// //                 fill
// //                 className="object-contain"
// //                 sizes="160px"
// //               />
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Right Chevron */}
// //       {showRightChevron && (
// //         <button
// //           onClick={() => scroll('right')}
// //           className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg border border-gray-200 hover:scale-110 transition-transform"
// //           aria-label="Scroll investor logos right"
// //         >
// //           <ChevronRight size={28} className="text-gray-700" />
// //         </button>
// //       )}

// //       {/* Optional: Auto-scroll info */}
// //       <p className="text-center text-gray-500 text-sm mt-4">
// //         Scroll horizontally or use arrows to view all investors
// //       </p>
// //     </div>
// //   );
// // }


// // // // components/InvestorCarousel.tsx
// // // 'use client';

// // // import Image from 'next/image';

// // // interface InvestorCarouselProps {
// // //     logos: string[];
// // // }

// // // export default function InvestorCarousel({ logos }: InvestorCarouselProps) {
// // //     return (
// // //         <div className="overflow-hidden">
// // //             <div className="flex gap-16 animate-scroll px-8">
// // //                 {[...logos, ...logos].map((logo, i) => (
// // //                     <div key={i} className="flex items-center justify-center min-w-[180px]">
// // //                         <Image
// // //                             src={logo}
// // //                             alt="Investor logo"
// // //                             width={160}
// // //                             height={80}
// // //                             className="object-contain grayscale opacity-70 hover:opacity-100 transition"
// // //                         />
// // //                     </div>
// // //                 ))}
// // //             </div>
// // //         </div>
// // //     );
// // // }
