// components/InvestorCarousel.tsx
'use client';

import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface InvestorCarouselProps {
  logos: string[];
}

export default function InvestorCarousel({ logos }: InvestorCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftChevron, setShowLeftChevron] = useState(false);
  const [showRightChevron, setShowRightChevron] = useState(true);
  
  // Duplicate logos for seamless infinite loop effect
  const duplicatedLogos = [...logos, ...logos, ...logos];

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    
    // Show/hide chevrons based on scroll position
    setShowLeftChevron(scrollLeft > 10);
    setShowRightChevron(scrollLeft < scrollWidth - clientWidth - 10);
  };

  return (
    <div className="relative w-full max-w-6xl px-12 mx-auto">
      
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
        className="flex overflow-x-auto scroll-smooth space-x-12 py-8 no-scrollbar"
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            className="flex-shrink-0 flex items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow min-h-[120px] min-w-[180px]"
          >
            <div className="relative w-40 h-20">
              <Image
                src={logo}
                alt={`Investor logo ${index + 1}`}
                fill
                className="object-contain"
                sizes="160px"
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

      {/* Optional: Auto-scroll info */}
      <p className="text-center text-gray-500 text-sm mt-4">
        Scroll horizontally or use arrows to view all investors
      </p>
    </div>
  );
}


// // components/InvestorCarousel.tsx
// 'use client';

// import Image from 'next/image';

// interface InvestorCarouselProps {
//     logos: string[];
// }

// export default function InvestorCarousel({ logos }: InvestorCarouselProps) {
//     return (
//         <div className="overflow-hidden">
//             <div className="flex gap-16 animate-scroll px-8">
//                 {[...logos, ...logos].map((logo, i) => (
//                     <div key={i} className="flex items-center justify-center min-w-[180px]">
//                         <Image
//                             src={logo}
//                             alt="Investor logo"
//                             width={160}
//                             height={80}
//                             className="object-contain grayscale opacity-70 hover:opacity-100 transition"
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
