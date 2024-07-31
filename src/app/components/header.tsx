'use client';
import { useState, useEffect } from "react";
import Image from 'next/image';

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`header fixed pt-5 pb-5 w-full z-20 md:pt-10 md:pb-10 ${isScrolled ? "scrolled" : ""}`}>
            <div className="header-mobile items-center justify-between hidden max-md:flex pl-4 pr-4">
                <a href="/">
                    <Image src="/logo.svg" alt="logo" width={155} height={25}/>
                </a>
                <section className="mobile-menu flex md:hidden z-50">
                    <div
                        className="space-y-2"
                        onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    </div>

                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div
                            className="absolute top-0 right-0 px-8 py-8"
                            onClick={() => setIsNavOpen(false)}
                        >
                            <svg
                                className="h-8 w-8 text-gray-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18"/>
                                <line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                        </div>
                        <ul className="flex flex-col items-center justify-between min-h-[250px]">
                            <li className="my-4 uppercase" onClick={() => setIsNavOpen(false)}>
                                <a href="#approach">Approach</a>
                            </li>
                            <li className="my-4 uppercase" onClick={() => setIsNavOpen(false)}>
                                <a href="#services">Services </a>
                            </li>
                            <li className="my-4 uppercase" onClick={() => setIsNavOpen(false)}>
                                <a href="#culture">Culture</a>
                            </li>
                            <li className=" my-4 uppercase" onClick={() => setIsNavOpen(false)}>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>

            <nav className="header-nav max-md:hidden">
                <ul className="header-menu flex justify-center align-middle">
                    <li>
                        <a href="#approach" className="hover:underline underline-offset-2">Approach</a>
                    </li>
                    <li>
                        <a href="#services" className="hover:underline underline-offset-2">Services </a>
                    </li>
                    <li>
                        <a href="/">
                            <Image src="/logo.svg" alt="logo" width={155} height={25}/>
                        </a>
                    </li>
                    <li>
                        <a href="#culture" className="hover:underline underline-offset-2">Culture</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:underline underline-offset-2">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
