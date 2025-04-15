'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

// Register GSAP Plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Navbar = () => {
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1 } });
    
    tl.from(navRef.current, { y: -100, opacity: 0, duration: 1.2 })
      .from(
        linksRef.current,
        { y: 50, opacity: 0, stagger: 0.2 },
        '-=0.8'
      );
    
    gsap.to(navRef.current, {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(10px)',
      duration: 0.5,
      scrollTrigger: {
        trigger: navRef.current,
        start: 'top -10px',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-6 md:px-12 text-white bg-transparent border-b border-amber-300"
    >
      <div className="text-2xl font-bold tracking-widest cursor-pointer">Asharib</div>
      
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✖' : '☰'}
      </button>
      
      {/* Navbar Links */}
      <ul
        className={`absolute md:static top-16 left-0 w-full md:w-auto md:flex gap-8 text-lg bg-black md:bg-transparent p-6 md:p-0 transition-all duration-500 ${menuOpen ? 'block' : 'hidden'}`}
      >
        <Link href="/" className="nav-item block md:inline-block px-4 py-2">Home</Link>
        <Link href="/components/hero" className="nav-item block md:inline-block px-4 py-2">About</Link>
        <Link href="/components/projects" className="nav-item block md:inline-block px-4 py-2">Projects</Link>
        <Link href="/components/services" className="nav-item block md:inline-block px-4 py-2">Services</Link>
      </ul>
    </nav>
  );
};

export default Navbar;