// // components/InfiniteCarousel.tsx
// 'use client';
// import { useRef, useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import Image from 'next/image';

// interface Item {
//     title: string;
//     icon: string;
// }

// interface InfiniteCarouselProps {
//     items: Item[];
// }

// export default function InfiniteCarousel({ items }: InfiniteCarouselProps) {
//     const scrollRef = useRef<HTMLDivElement>(null);
//     const [showLeftChevron, setShowLeftChevron] = useState(false);
//     const [showRightChevron, setShowRightChevron] = useState(true);

//     const scroll = (direction: 'left' | 'right') => {
//         if (!scrollRef.current) return;
        
//         // Calculate scroll amount based on current item width
//         const container = scrollRef.current;
//         const firstItem = container.querySelector('.carousel-item') as HTMLElement;
//         const itemWidth = firstItem?.offsetWidth || 224; // Default to w-56 (224px)
//         const scrollAmount = itemWidth + 32; // item width + gap (space-x-8 = 32px)
        
//         container.scrollBy({
//             left: direction === 'left' ? -scrollAmount : scrollAmount,
//             behavior: 'smooth',
//         });
//     };

//     const handleScroll = () => {
//         if (!scrollRef.current) return;
//         const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//         setShowLeftChevron(scrollLeft > 10);
//         setShowRightChevron(scrollLeft < scrollWidth - clientWidth - 10);
//     };

//     // Duplicate items for seamless infinite loop
//     const duplicatedItems = [...items, ...items, ...items];

//     return (
//         <div className="w-full max-w-6xl relative px-4 sm:px-8 lg:px-12">
//             {/* Left Chevron */}
//             <button
//                 aria-label='Scroll left'
//                 onClick={() => scroll('left')}
//                 className='absolute left-0 top-1/2 -translate-y-1/2 z-30 text-teal-500 hover:scale-110 transition-transform'
//             >
//                 <ChevronLeft size={56} className="hidden sm:block" />
//                 <ChevronLeft size={40} className="block sm:hidden" />
//             </button>

//             {/* Carousel Container */}
//             <div
//                 ref={scrollRef}
//                 onScroll={handleScroll}
//                 className="flex overflow-x-auto scroll-smooth gap-4 sm:gap-6 lg:gap-8 py-8 no-scrollbar snap-x snap-mandatory"
//             >
//                 {duplicatedItems.map((item, index) => (
//                     <div
//                         key={index}
//                         className="carousel-item flex-shrink-0 w-[calc(100vw-4rem)] sm:w-[calc(50vw-6rem)] lg:w-[calc(33.333vw-8rem)] xl:w-56 bg-transparent p-4 sm:p-6 flex flex-col items-center hover:scale-110 transition-all duration-300 snap-center"
//                     >
//                         <Image
//                             src={item.icon}
//                             alt={item.title}
//                             className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain mb-4"
//                             width={160}
//                             height={160}
//                             loading="lazy"
//                         />
//                         <h4 className="text-lg sm:text-xl font-light text-center text-gray-800">
//                             {item.title}
//                         </h4>
//                     </div>
//                 ))}
//             </div>

//             {/* Right Chevron */}
//             <button
//                 aria-label='Scroll right'
//                 onClick={() => scroll('right')}
//                 className='absolute right-0 top-1/2 -translate-y-1/2 z-30 text-teal-500 hover:scale-110 transition-transform'
//             >
//                 <ChevronRight size={56} className="hidden sm:block" />
//                 <ChevronRight size={40} className="block sm:hidden" />
//             </button>
//         </div>
//     );
// }


// components/InfiniteCarousel.tsx
'use client';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Install: npm install lucide-react
import Image from 'next/image';
interface Item {
    title: string;
    icon: string;
}

interface InfiniteCarouselProps {
    items: Item[];
}

export default function InfiniteCarousel({ items }: InfiniteCarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [showLeftChevron, setShowLeftChevron] = useState(false);
    const [showRightChevron, setShowRightChevron] = useState(true);

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
        setShowLeftChevron(scrollLeft > 10);
        setShowRightChevron(scrollLeft < scrollWidth - clientWidth - 10);
    };

    // Duplicate items for seamless infinite loop
    const duplicatedItems = [...items, ...items, ...items];

    return (
        <div className="w-full max-w-6xl lg:max-w-[90vw] relative px-12">
            {/* Left Chevron */}
            {/* {showLeftChevron && ( */}
            <button
                aria-label='button'
                onClick={() => scroll('left')}
                // className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg border"
                className='absolute left-0 top-1/2 -translate-y-1/2 z-30 text-teal-500 '

            >
                <ChevronLeft size={56} />
            </button>
            {/* )} */}

            {/* Carousel Container */}
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex overflow-x-hidden scroll-smooth space-x-8 py-8 no-scrollbar "
            >
                {duplicatedItems.map((item, index) => (
                    <div
                        key={index}
                        // rounded-2xl shadow-lg shadow-xl
                        // className="flex-shrink-0 w-56 bg-transparent p-6 flex flex-col items-center hover:scale-110  transition-all duration-300"
                        className="flex-shrink-0 sm:w-full md:w-1/2 xl:w-1/3 bg-transparent p-6 flex flex-col items-center hover:scale-110 transition-all duration-300"

                    >
                        {/* <div className="text-5xl mb-4">{item.icon}</div> */}
                        <Image
                            src={item.icon}
                            alt={item.title}
                            className="w-80 h-80 object-contain mb-4"
                            loading="lazy"
                            width={100}
                            height={100}
                        />
                        <h4 className="text-xl font-light text-center text-gray-800">
                            {item.title}
                        </h4>
                    </div>
                ))}
            </div>

            {/* Right Chevron */}
            {/* {showRightChevron && ( */}
            <button
                aria-label='button'
                onClick={() => scroll('right')}
                // className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg border"
                className='absolute right-0 top-1/2 -translate-y-1/2 z-30 text-teal-500 '
            >
                <ChevronRight size={56} />
            </button>
            {/* )} */}
        </div>
    );
}