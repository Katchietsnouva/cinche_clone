// components/InfiniteCarousel.tsx
'use client';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Install: npm install lucide-react

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
        <div className="w-full max-w-6xl relative px-12">
            {/* Left Chevron */}
            {showLeftChevron && (
                <button
                    aria-label='button'
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg border"
                >
                    <ChevronLeft size={28} />
                </button>
            )}

            {/* Carousel Container */}
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto scroll-smooth space-x-8 py-8 no-scrollbar"
            >
                {duplicatedItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-56 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow"
                    >
                        <div className="text-5xl mb-4">{item.icon}</div>
                        <h4 className="text-xl font-semibold text-center text-gray-800">
                            {item.title}
                        </h4>
                    </div>
                ))}
            </div>

            {/* Right Chevron */}
            {showRightChevron && (
                <button
                    aria-label='button'
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg border"
                >
                    <ChevronRight size={28} />
                </button>
            )}
        </div>
    );
}