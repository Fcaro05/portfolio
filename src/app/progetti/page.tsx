'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export default function Progetti() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4">
      <motion.h1 
        className="text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        I Miei Progetti
      </motion.h1>

      {/* Marketing Projects */}
      <section className="max-w-7xl mx-auto mb-16">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-[#4CAF50]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Marketing
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Project 1 */}
          <motion.div className="card" variants={itemVariants}>
            <div className="h-40 bg-gradient-to-br from-[#4CAF50] to-yellow-400 rounded-t-xl p-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Campagna Digital per Brand XYZ</h3>
              <p className="text-gray-600 mb-4">
                Strategia omnicanale che ha aumentato le conversioni del 45% in 3 mesi.
              </p>
              <div className="flex gap-2 mb-4">
                <span className="tag tag-marketing">SEO</span>
                <span className="tag tag-marketing">Social Media</span>
                <span className="tag tag-marketing">Analytics</span>
              </div>
              <Link href="/progetti/xyz" className="text-[#4CAF50] font-medium hover:underline inline-flex items-center">
                Scopri di più
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div className="card" variants={itemVariants}>
            <div className="h-40 bg-gradient-to-br from-[#4CAF50] to-yellow-400 rounded-t-xl p-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Rebranding Azienda ABC</h3>
              <p className="text-gray-600 mb-4">
                Rinnovamento dell'identità visiva e posizionamento sul mercato.
              </p>
              <div className="flex gap-2 mb-4">
                <span className="tag tag-marketing">Branding</span>
                <span className="tag tag-marketing">Design</span>
                <span className="tag tag-marketing">Strategy</span>
              </div>
              <Link href="/progetti/abc" className="text-[#4CAF50] font-medium hover:underline inline-flex items-center">
                Scopri di più
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div className="card" variants={itemVariants}>
            <div className="h-40 bg-gradient-to-br from-[#4CAF50] to-yellow-400 rounded-t-xl p-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Strategia E-commerce</h3>
              <p className="text-gray-600 mb-4">
                Ottimizzazione del funnel di vendita con aumento del 60% del tasso di conversione.
              </p>
              <div className="flex gap-2 mb-4">
                <span className="tag tag-marketing">E-commerce</span>
                <span className="tag tag-marketing">CRO</span>
                <span className="tag tag-marketing">PPC</span>
              </div>
              <Link href="/progetti/ecommerce" className="text-[#4CAF50] font-medium hover:underline inline-flex items-center">
                Scopri di più
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Coding Projects */}
      <section className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-[#6B46C1]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Coding
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Project 1 */}
          <motion.div className="card" variants={itemVariants}>
            <div className="h-40 bg-gradient-to-br from-[#6B46C1] to-[#9F7AEA] rounded-t-xl p-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">E-commerce Platform</h3>
              <p className="text-gray-600 mb-4">
                Sviluppo full-stack di una piattaforma e-commerce con React e Node.js.
              </p>
              <div className="flex gap-2 mb-4">
                <span className="tag tag-coding">React</span>
                <span className="tag tag-coding">Node.js</span>
                <span className="tag tag-coding">MongoDB</span>
              </div>
              <Link href="/progetti/ecommerce-platform" className="text-[#6B46C1] font-medium hover:underline inline-flex items-center">
                Vedi progetto
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div className="card" variants={itemVariants}>
            <div className="h-40 bg-gradient-to-br from-[#6B46C1] to-[#9F7AEA] rounded-t-xl p-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">App Mobile Fitness</h3>
              <p className="text-gray-600 mb-4">
                Applicazione mobile per il tracciamento degli allenamenti con React Native.
              </p>
              <div className="flex gap-2 mb-4">
                <span className="tag tag-coding">React Native</span>
                <span className="tag tag-coding">Firebase</span>
                <span className="tag tag-coding">Redux</span>
              </div>
              <Link href="/progetti/fitness-app" className="text-[#6B46C1] font-medium hover:underline inline-flex items-center">
                Vedi progetto
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div className="card" variants={itemVariants}>
            <div className="h-40 bg-gradient-to-br from-[#6B46C1] to-[#9F7AEA] rounded-t-xl p-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Dashboard Analytics</h3>
              <p className="text-gray-600 mb-4">
                Dashboard interattiva per la visualizzazione di dati aziendali in tempo reale.
              </p>
              <div className="flex gap-2 mb-4">
                <span className="tag tag-coding">Vue.js</span>
                <span className="tag tag-coding">D3.js</span>
                <span className="tag tag-coding">GraphQL</span>
              </div>
              <Link href="/progetti/dashboard" className="text-[#6B46C1] font-medium hover:underline inline-flex items-center">
                Vedi progetto
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
} 