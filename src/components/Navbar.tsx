'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const Navbar = () => {
  const { theme, setTheme, isChangingTheme } = useTheme();
  const isMarketing = theme === 'marketing';

  const toggleTheme = () => {
    if (!isChangingTheme) {
      setTheme(theme === 'marketing' ? 'coding' : 'marketing');
    }
  };

  return (
    <motion.nav 
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 shadow-md",
        isMarketing ? 'bg-marketing-background/80 backdrop-blur-sm' : 'bg-coding-background/80 backdrop-blur-sm'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 70, delay: 0.2 }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo o Nome */}
        <Link href="/" className="text-xl font-bold text-[color:var(--primary)] transition-colors duration-300">
          Il Tuo Nome
        </Link>

        {/* Link di Navigazione */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink href="/marketing">Marketing</NavLink>
          <NavLink href="/coding">Coding</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>

        {/* Toggle Tema */}
        <motion.button
          onClick={toggleTheme}
          className={clsx(
            "px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2",
            isMarketing 
              ? "bg-marketing-primary text-marketing-background hover:bg-marketing-accent focus:ring-marketing-accent"
              : "bg-coding-primary text-coding-background hover:bg-coding-accent focus:ring-coding-accent",
             "focus:ring-offset-[color:var(--background)]"
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            opacity: isChangingTheme ? 0.7 : 1,
            scale: isChangingTheme ? 0.95 : 1
          }}
          aria-label={`Switch to ${isMarketing ? 'Coding' : 'Marketing'} mode`}
          disabled={isChangingTheme}
        >
          {isMarketing ? 'Passa a Coding' : 'Passa a Marketing'}
        </motion.button>

        {/* Hamburger Menu per Mobile (da implementare) */}
        <div className="md:hidden">{/* ... icona hamburger ... */}</div>
      </div>
    </motion.nav>
  );
};

// Componente helper per i link con stile attivo (semplificato per ora)
const NavLink = ({ href, children }: { href: string; children: ReactNode }) => {
   return (
      <Link href={href} className="opacity-80 hover:opacity-100">
         {children}
      </Link>
   )
}

export default Navbar; 