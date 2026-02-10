import { Linkedin, LocationEditIcon, Mail, MapPin, MapPinIcon, Youtube } from 'lucide-react';
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
                            width={800}
                            height={310}
                            className="mb-2 mx-auto"
                        />
                        <p className="text-sm md:text-base opacity-90">Turning idle land into income</p>
                    </div>

                    {/* Right: Contact Info */}
                    <div className="text-centre  items-center lg:text-left text-xl">
                        <h6 className=" font-semibold mb-3 uppercase tracking-wide">Contact Info</h6>

                        <ul className="space-y-2  ">
                            <li className="flex items-center justify-end lg:justify-end gap-2">
                                <Mail size={20} className="text-teal-500" />

                                <span>info@cinchmarkets.com</span>
                            </li>

                            <li className="flex items-center justify-end lg:justify-end gap-2">

                                <MapPinIcon className='text-teal-500' />
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
                                <Linkedin size={20} /> {/* w-5 h-5 = 20px */}
                            </a>


                            <a
                                href="https://www.youtube.com/watch?v=kWAPuX0ODrc"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-80 transition"
                            >
                                <Youtube size={20} /> {/* w-5 h-5 = 20px */}
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
