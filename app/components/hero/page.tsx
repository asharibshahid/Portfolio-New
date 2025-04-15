'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

// Register GSAP Plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const HeroAbout = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.5 } });

    // Hero Section Animation
    tl.from(heroRef.current, { opacity: 0, y: -50 })
      .from(textRef.current, { opacity: 0, x: -50 }, '-=1')
      .from(imgRef.current, { 
        opacity: 0, 
        x: 50, 
        scale: 0.9,
        rotate: 15,
        filter: 'blur(10px)'
      }, '-=1');

    // Floating image animation
    gsap.to(imgRef.current, {
      y: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // About Section Scroll Animation
    gsap.from(aboutRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-4 md:px-10 lg:px-20 bg-gradient-to-br from-indigo-900 via-purple-800 to-purple-700 text-white overflow-hidden"
      >
        <div ref={textRef} className="md:w-1/2 text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Hello I'm <span className="text-cyan-400">Asharib</span>
          </h1>
          
          <div className="inline-block bg-black/20 backdrop-blur-sm text-white text-center rounded-lg px-6 py-3 mb-6">
            <Typewriter
              options={{
                strings: ['Web Developer', 'UI/UX Designer', 'Frontend Developer', 'Prompt Engineer'],
                autoStart: true,
                loop: true,
                cursor: '▌',
                wrapperClassName: 'text-lg md:text-xl lg:text-2xl font-semibold',
                cursorClassName: 'text-yellow-400'
              }}
            />
          </div>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl">
            Crafting digital experiences that blend innovation with seamless functionality
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/components/contact">
              <button className="w-full sm:w-auto px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white text-lg font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105">
                Get in Touch
              </button>
            </Link>
            <Link href="/components/services">
              <button className="w-full sm:w-auto px-8 py-3 border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 text-lg font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105">
                View Services
              </button>
            </Link>
          </div>
        </div>

        <div ref={imgRef} className="md:w-1/2 flex justify-center md:justify-end relative group">
          <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-tr from-cyan-400 to-purple-500 rounded-full p-1.5 shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/20">
              <img 
                src='/hero-image.png' 
                alt='Profile' 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
          <div className="absolute inset-0 rounded-full animate-pulse opacity-20 bg-gradient-to-tr from-cyan-400 to-purple-500 blur-xl" />
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-gray-900 text-white px-4 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg md:text-xl">
              <p className="leading-relaxed text-gray-300">
                Specializing in modern web development, I create high-performance applications using cutting-edge technologies like Next.js, React, and GSAP. My focus is on delivering seamless user experiences with engaging animations and robust functionality.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-gray-800 rounded-lg border-l-4 border-cyan-400">
                  <h3 className="text-cyan-400 font-bold mb-2">Age</h3>
                  <p className="text-2xl font-bold">16</p>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg border-l-4 border-purple-400">
                  <h3 className="text-purple-400 font-bold mb-2">Education</h3>
                  <p className="text-2xl font-bold">Matric</p>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg border-l-4 border-cyan-400">
                  <h3 className="text-cyan-400 font-bold mb-2">Quran</h3>
                  <p className="text-2xl font-bold">Hafiz</p>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg border-l-4 border-purple-400">
                  <h3 className="text-purple-400 font-bold mb-2">GIAIC</h3>
                  <p className="text-2xl font-bold">Q3</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 shadow-xl">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Technical Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {['Next.js', 'React', 'GSAP', 'Tailwind', 'TypeScript', 'Python' ,].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-gray-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 shadow-xl">
                <h3 className="text-xl font-bold mb-4 text-purple-400">Achievements</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2" />
                    20+ Completed Projects
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2" />
                    Certified Web Developer
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2" />
                    Frontend Specialization
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroAbout;
