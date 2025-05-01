'use client'; // Aggiungo per usare Framer Motion

import React from 'react';
import { motion } from 'framer-motion'; // Importo motion
import Image from 'next/image'; // Importo Image
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Animazione per gli elementi del footer
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <footer className="relative w-full overflow-hidden">
      {/* Onde decorative */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" 
            className="w-full h-16 md:h-24 transform translate-x-0 text-[color:var(--background)]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill="currentColor" fillOpacity="0.5"></path>
        </svg>
      </div>
      
      <motion.div 
        className="max-w-7xl mx-auto pt-24 pb-12 px-6 lg:px-8 relative z-10 bg-gradient-to-br from-secondary-bg/80 via-[color:var(--background)]/90 to-[color:var(--accent)]/20 backdrop-blur-sm rounded-t-3xl shadow-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Colonna 1: Logo e descrizione */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-[color:var(--primary)]/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-[color:var(--primary)]">FC</span>
              </div>
              <h3 className="ml-3 text-xl font-bold">Francesco Caro</h3>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              Combinando coding e marketing per creare progetti innovativi ed efficaci. 
              Passione per tecnologie web e strategie digitali d'avanguardia.
            </p>
          </motion.div>
          
          {/* Colonna 2: Link rapidi */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-[color:var(--primary)]">Link Rapidi</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'Coding', href: '/coding' },
                { name: 'Marketing', href: '/marketing' },
                { name: 'About', href: '/about' },
                { name: 'Contatti', href: '/contact' }
              ].map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <Link href={link.href} className="text-sm hover:text-[color:var(--primary)] transition-colors">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Colonna 3: Informazioni di contatto */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-[color:var(--primary)]">Contatti</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[color:var(--primary)] mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:francesco.caro@example.com" className="ml-3 text-sm text-gray-400 hover:text-[color:var(--primary)] transition-colors">
                  francesco.caro@example.com
                </a>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[color:var(--primary)] mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+390123456789" className="ml-3 text-sm text-gray-400 hover:text-[color:var(--primary)] transition-colors">
                  +39 012 345 6789
                </a>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[color:var(--primary)] mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="ml-3 text-sm text-gray-400">Milano, Italia</span>
              </li>
            </ul>
          </motion.div>
          
          {/* Colonna 4: Social e newsletter */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-[color:var(--primary)]">Seguimi</h3>
            <div className="flex space-x-4">
              {[
                { href: "https://github.com/francescocaro", src: "/SocialIcons/git.jpeg", alt: "GitHub" },
                { href: "https://linkedin.com/in/francesco-caro", src: "/SocialIcons/in.jpeg", alt: "LinkedIn" },
                { href: "https://instagram.com/francesco.caro", src: "/SocialIcons/ig.jpeg", alt: "Instagram" },
                { href: "#", src: "/SocialIcons/ds.jpeg", alt: "Discord" }
              ].map(icon => (
                <motion.a 
                  key={icon.alt}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-10 h-10 rounded-full overflow-hidden bg-[color:var(--background)] p-1.5 transition-transform hover:shadow-lg"
                  whileHover={{ y: -4, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Image 
                    src={icon.src} 
                    alt={icon.alt} 
                    width={28} 
                    height={28} 
                    className="object-cover w-full h-full rounded-full"
                  />
                </motion.a>
              ))}
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2">Iscriviti alla newsletter</h4>
              <div className="flex mt-1">
                <input
                  type="email"
                  placeholder="La tua email"
                  className="flex-1 min-w-0 px-3 py-2 text-sm rounded-l-md bg-gray-800/50 focus:outline-none focus:ring-1 focus:ring-[color:var(--primary)]"
                />
                <motion.button
                  className="inline-flex items-center px-3 py-2 text-sm rounded-r-md bg-[color:var(--primary)] text-black font-medium hover:bg-[color:var(--primary)]/80"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Iscriviti
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Linea separatrice */}
        <div className="mt-12 pt-8 border-t border-gray-700/30">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center"
            variants={itemVariants}
          >
            <p className="text-xs text-gray-400">
              © {currentYear} Francesco Caro. Tutti i diritti riservati.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-xs text-gray-400 hover:text-[color:var(--primary)]">Privacy Policy</a>
              <a href="#" className="text-xs text-gray-400 hover:text-[color:var(--primary)]">Termini di Servizio</a>
              <a href="#" className="text-xs text-gray-400 hover:text-[color:var(--primary)]">Cookie Policy</a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer; 
