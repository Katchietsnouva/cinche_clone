import Image from 'next/image';
import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-teal-700 text-white">
            {/* Main footer content */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
                    {/* Left: Logo + Tagline */}
                    <div className="flex flex-col items-center">
                        <Image
                            src="/Cinch-Script-logo-white.png"  
                            alt="Cinch"
                            width={400}
                            height={155}
                            className="mb-2 mx-auto"
                        />
                        <p className="text-sm md:text-base opacity-90">Turning idle land into income</p>
                    </div>

                    {/* Right: Contact Info */}
                    <div className="text-right lg:text-right">
                        <h6 className="text-sm font-semibold mb-3 uppercase tracking-wide">Contact Info</h6>

                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center justify-end lg:justify-end gap-2">
                                <svg aria-hidden="true" className="w-4 h-4 flex-shrink-0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                                </svg>
                                <span>info@cinchmarkets.com</span>
                            </li>

                            <li className="flex items-center justify-end lg:justify-end gap-2">
                                <svg aria-hidden="true" className="w-4 h-4 flex-shrink-0" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                                </svg>
                                <span>Kenya • Ghana • USA</span>
                            </li>
                        </ul>

                        {/* Social Icons */}
                        <div className="flex justify-end gap-4 mt-4" id="contact">
                            <a
                                href="https://www.linkedin.com/company/cinch-markets-ltd/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-80 transition"
                            >
                                <svg aria-hidden="true" className="w-5 h-5" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                                </svg>
                            </a>

                            <a
                                href="https://www.youtube.com/watch?v=kWAPuX0ODrc"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-80 transition"
                            >
                                <svg aria-hidden="true" className="w-5 h-5" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar with copyright + purple pill */}
            <div className=" border-teal-600 pb-20 mx-auto max-w-7xl flex flex-row ">
                <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center text-base md:text-xl">
                    <p>© 2025 Cinch Markets, Inc.</p>
                    {/* <div className="mt-2 sm:mt-0 bg-purple-600 px-4 py-1 rounded-full text-xs font-medium">
                        cinchmarkets.com
                    </div> */}
                </div>
            </div>
        </footer>
    );
}
