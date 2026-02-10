// components/InvestorCarousel.tsx
'use client';

import Image from 'next/image';

interface InvestorCarouselProps {
    logos: string[];
}

export default function InvestorCarousel({ logos }: InvestorCarouselProps) {
    return (
        <div className="overflow-hidden">
            <div className="flex gap-16 animate-scroll px-8">
                {[...logos, ...logos].map((logo, i) => (
                    <div key={i} className="flex items-center justify-center min-w-[180px]">
                        <Image
                            src={logo}
                            alt="Investor logo"
                            width={160}
                            height={80}
                            className="object-contain grayscale opacity-70 hover:opacity-100 transition"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
