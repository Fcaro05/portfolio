'use client'; // Aggiungo per usare Framer Motion

import { motion } from 'framer-motion'; // Importo motion
import Image from 'next/image'; // Importo Image
import { useTheme } from '@/context/ThemeContext'; // Usa useTheme
import clsx from 'clsx'; // Usa clsx

export default function AboutPage() {
  const { theme } = useTheme();
  const isMarketing = theme === 'marketing';

  return (
    // Applica sfondo da globals.css
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Colonna Sinistra: Testo */}
          <motion.div
             key={`${theme}-text`} // Forza rianimazione
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5, delay: 0.1, ease: isMarketing ? "easeOut" : "circOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Know who am I</h1> {/* Colore da CSS Var */}
            <p className="text-lg mb-10 opacity-90"> {/* Colore da CSS Var */} 
              Loden ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <motion.button className="btn-primary"> {/* Usa classe globale */} 
              Resume
            </motion.button>
          </motion.div>

          {/* Colonna Destra: Immagine con Tilt */}
          <motion.div
            className="flex justify-center items-center h-96 md:h-[500px] rounded-lg overflow-hidden bg-secondary-bg/30" // Usa colore secondario
            key={`${theme}-image`} // Forza rianimazione?
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: isMarketing ? "easeOut" : "circOut" }}
            whileHover="hover"
            style={{ perspective: 800 }} 
          >
            <motion.div
              className="w-full h-full relative"
               variants={{
                 hover: {
                   rotateY: isMarketing ? 10: -15, // Rotazione diversa?
                   rotateX: isMarketing ? -5: 10,
                   scale: 1.05,
                   transition: { type: 'spring', stiffness: 300, damping: 20 }
                 }
               }}
            >
              <Image src="/PersonalImages/ImageMe.jpeg" alt="Foto Personale" layout="fill" objectFit="cover" className="rounded-lg" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 