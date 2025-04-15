"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import Link from 'next/link'

const allProjects = [
  {
    title: 'E-Commerce Store',
    description: 'Next.js 14 E-Commerce Platform with TypeScript, Tailwind CSS, and Stripe integration. Featuring product variants and advanced search.',
    image: '/th1.png',
    githubLink: 'https://github.com/asharibshahid/Hackathon-Ecommerce',
    deployLink: 'https://novacart1.vercel.app',
    tech: ['Next.js 14', 'TypeScript', 'Stripe', 'Tailwind']
  },
  {
    title: 'Nike App Hackathon',
    description: 'Next.js Sportswear Platform with Sanity CMS. Featuring dynamic content management and responsive design.',
    image: '/th2.png',
    githubLink: 'https://github.com/asharibshahid/hackathon',
    deployLink: 'https://hackathon-seven-zeta.vercel.app/',
    tech: ['Next.js', 'Sanity', 'SSR', 'Tailwind']
  },
  {
    title: 'TechTales Blog',
    description: 'Headless CMS Blog with Sanity Studio and Incremental Static Regeneration. Featuring rich text editing and SEO optimization.',
    image: '/th3.png',
    githubLink: 'https://github.com/asharibshahid/Pakistan-sNova',
    deployLink: 'https://pakistan-s-nova-z7o5.vercel.app/',
    tech: ['Sanity', 'ISR', 'SSG', 'Markdown']
  },
  
  // New Projects
  {
    title: 'NovaCart Pro',
    description: 'Advanced E-Commerce Solution with AI recommendations and real-time analytics. Processing $1M+ monthly transactions.',
    image: '/thd90.png',
    githubLink: 'https://github.com/asharibshahid/novacart-Upload',
    deployLink: 'https://novacart.space',
    tech: ['Next.js 14', 'Sanity', 'Web3']
  },
  {
    title: 'CyberVault 3D',
    description: 'Blockchain-based Secure Storage with Three.js visualization and hardware security modules.',
    image: '/thd93.png',
    githubLink: 'https://github.com/asharibshahid/CyberVault3D_Python',
    deployLink: 'https://cybervault3dpython-8kbzxudaewz2msjgzx3g3d.streamlit.app/',
    tech: ['Python', 'StreamLit', 'Web3']
  },
  {
    title: 'AtmosAI Forecast',
    description: 'ML-powered Weather Prediction Engine with satellite imagery analysis and historical pattern matching.',
    image: '/thd91.png',
    githubLink: 'https://github.com/asharibshahid/q3-assignments/blob/main/learn-Python/index.py',
    deployLink: 'https://q3-assignments-hu54czsrazddsg9fxdsttk.streamlit.app/',
    tech: ['Python', 'API', 'Streamlit']
  },
  {
    title: 'FaceLock Security',
    description: 'Multi-factor Biometric Authentication with liveness detection and GDPR-compliant logging.',
    image: '/thd92.png',
    githubLink: 'https://github.com/asharibshahid/Learn-Python-q3/blob/main/Projects/adv-03.py',
    deployLink: 'https://novacart.space',
    tech: ['Python', 'CV3']
  },
  {
    title: 'Password Security Checker',
    description: 'Enterprise Password Manager with quantum-resistant algorithms and cross-platform sync.',
    image: '/thd94.png',
    githubLink: 'https://github.com/asharibshahid/q3-assignments/blob/main/learn-Python/03.py',
    deployLink: 'https://q3-assignments-dbktz5d6vb4adsqkkonkdq.streamlit.app/',
    tech: ['Python', 'StreamLit']
  },
  {
    title: 'QuantumConverter',
    description: 'Universal Measurement Converter with 500+ unit types and historical conversion charts.',
    image: '/thd95.png',
    githubLink: 'https://github.com/asharibshahid/q3-assignments/blob/main/learn-Python/converter.py',
    deployLink: 'https://q3-assignments-fwcoae2wjqgn9thjamp3tu.streamlit.app/',
    tech: ['Python', 'Streamlit']
  }
];

const Projects = () => {
  return (
  <section id="projects" className="relative py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.15, 0],
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
            className="absolute w-0.5 h-0.5 bg-cyan-400/50 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-4">
            My Creations
          </h2>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
            Professional projects built with cutting-edge technologies and modern design principles
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group h-full"
            >
              <Link 
                href={project.deployLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="h-full flex flex-col bg-gray-900/70 border border-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 group-hover:-translate-y-2">
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-52">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent" />
                    <div className="absolute bottom-4 right-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800/90 text-cyan-400 text-xs font-medium">
                        <FiArrowRight className="ml-1" />
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="flex-1 p-6 flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-100 mb-2">{project.title}</h3>
                      <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tech.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-2.5 py-1 text-xs bg-gray-800/50 text-cyan-300 rounded-full border border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Buttons - Now 100% working with proper Link behavior */}
                    <div className="flex flex-wrap gap-3 mt-2">
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800/60 hover:bg-gray-700 border border-gray-700 rounded-lg text-sm text-gray-200 hover:text-cyan-400 transition-all duration-300"
                      >
                        <FiGithub className="text-base" />
                        <span>Code</span>
                      </Link>
                      <Link
                        href={project.deployLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-cyan-600/20 hover:bg-cyan-600/30 border border-cyan-500/30 rounded-lg text-sm text-cyan-400 hover:text-cyan-300 transition-all duration-300"
                      >
                        <FiExternalLink className="text-base" />
                        <span>Live Demo</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default Projects;