''use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const HeroAbout = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 }});
    tl.from(heroRef.current, { opacity: 0 })
     .from([textRef.current, imgRef.current], { y: 30, opacity: 0, stagger: 0.3 });

    ScrollTrigger.create({
      trigger: aboutRef.current,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
      animation: gsap.from(aboutRef.current, { y: 50, opacity: 0, duration: 1 })
    });

    return () => ScrollTrigger.getAll().forEach(st => st.kill());
  }, []);

  const stats = [
    { title: 'Age', value: '16', color: 'cyan-400' },
    { title: 'Education', value: 'Matric', color: 'purple-400' },
    { title: 'Quran', value: 'Hafiz', color: 'cyan-400' },
    { title: 'GIAIC', value: 'Q3', color: 'purple-400' }
  ];

  const techStack = ['Next.js', 'React', 'GSAP', 'Tailwind', 'TypeScript', 'Python'];
  const achievements = ['20+ Completed Projects', 'Certified Web Developer', 'Frontend Specialization'];

  return (
    <>
      <section ref={heroRef} className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-5 md:px-10 lg:px-20 bg-gradient-to-br from-indigo-900 via-purple-800 to-purple-700 text-white pt-20 md:pt-0">
        <div ref={textRef} className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 md:mb-6">
            Hello I'm <span className="text-cyan-400 block md:inline">Asharib</span>
          </h1>
          
          <div className="inline-block bg-black/20 backdrop-blur-sm rounded-lg px-4 py-2 mb-4 md:mb-6">
            <Typewriter
              options={{
                strings: ['Web Developer', 'UI/UX Designer', 'Frontend Developer', 'Prompt Engineer'],
                autoStart: true,
                loop: true,
                cursor: '▌'
              }}
            />
          </div>

          <p className="text-sm md:text-base lg:text-lg text-gray-200 mb-6 md:mb-8 max-w-2xl mx-auto md:mx-0">
            Crafting digital experiences that blend innovation with seamless functionality
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Link href="/components/contact" className="w-full sm:w-auto">
              <button className="w-full px-6 py-2 md:px-8 md:py-3 bg-cyan-500 hover:bg-cyan-600 text-sm md:text-base font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105">
                Get in Touch
              </button>
            </Link>
            <Link href="/components/services" className="w-full sm:w-auto">
              <button className="w-full px-6 py-2 md:px-8 md:py-3 border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 text-sm md:text-base font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105">
                View Services
              </button>
            </Link>
          </div>
        </div>

        <div ref={imgRef} className="md:w-1/2 flex justify-center mb-12 md:mb-0">
          <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-gradient-to-tr from-cyan-400 to-purple-500 rounded-full p-1 shadow-xl">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/20">
              <img 
                src='/hero-image.png' 
                alt='Profile' 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section ref={aboutRef} className="py-16 md:py-20 bg-gray-900 text-white px-5 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-4 md:space-y-6">
              <p className="text-sm md:text-base leading-relaxed text-gray-300">
                Specializing in modern web development, I create high-performance applications using cutting-edge technologies like Next.js, React, and GSAP.
              </p>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {stats.map((item, index) => (
                  <div key={index} className={`p-4 bg-gray-800 rounded-lg border-l-4 border-${item.color}`}>
                    <h3 className={`text-${item.color} text-sm md:text-base font-bold mb-1`}>{item.title}</h3>
                    <p className="text-xl md:text-2xl font-bold">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
                <h3 className="text-lg md:text-xl font-bold mb-4 text-cyan-400">Technical Stack</h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-gray-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
                <h3 className="text-lg md:text-xl font-bold mb-4 text-purple-400">Achievements</h3>
                <ul className="space-y-3">
                  {achievements.map((item, index) => (
                    <li key={index} className="flex items-center text-base">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
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
