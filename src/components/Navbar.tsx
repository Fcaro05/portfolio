'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 shadow-md bg-black/80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 70, delay: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          <span className="text-[#4CAF50]">M</span>
          <span className="text-white">/</span>
          <span className="text-[#6B46C1]">C</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8">
          <NavLink href="/" active={pathname === '/'}>
            Home
          </NavLink>
          <NavLink href="/chi-sono" active={pathname === '/chi-sono'}>
            Chi Sono
          </NavLink>
          <NavLink href="/progetti" active={pathname === '/progetti'}>
            Progetti
          </NavLink>
          <NavLink href="/contatti" active={pathname === '/contatti'}>
            Contatti
          </NavLink>
        </div>
      </div>
    </motion.nav>
  );
};

// Componente helper per i link con stile attivo
const NavLink = ({ href, active, children }: { href: string; active: boolean; children: ReactNode }) => {
  return (
    <Link
      href={href}
      className={`text-white text-sm font-medium transition-all duration-300 hover:opacity-80
                  ${active ? 'border-b-2 border-white' : ''}`}
    >
      {children}
    </Link>
  );
};

export default Navbar; 
