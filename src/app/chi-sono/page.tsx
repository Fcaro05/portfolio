'use client';

import { motion } from 'framer-motion';

const skillsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

export default function ChiSono() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4">
      <motion.h1 
        className="text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Chi Sono
      </motion.h1>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Marketing Card */}
        <motion.div 
          className="card card-marketing"
          initial="hidden"
          animate="visible"
          variants={skillsVariants}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">Marketing Expert</h2>
          </div>

          <p className="text-gray-600 mb-8">
            Esperto di strategie di marketing digitale con un approccio orientato ai risultati. 
            Mi occupo di analizzare il mercato, identificare opportunità e sviluppare campagne 
            che generano ROI concreto per i miei clienti.
          </p>

          <div className="space-y-4">
            <SkillBar name="Strategia Digitale" percentage={90} color="#4CAF50" />
            <SkillBar name="Social Media" percentage={85} color="#4CAF50" />
            <SkillBar name="Analisi dei Dati" percentage={80} color="#4CAF50" />
          </div>
        </motion.div>

        {/* Coding Card */}
        <motion.div 
          className="card card-coding"
          initial="hidden"
          animate="visible"
          variants={skillsVariants}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-[#6B46C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">Developer</h2>
          </div>

          <p className="text-gray-600 mb-8">
            Sviluppatore web full-stack con passione per la creazione di esperienze digitali 
            innovative e performanti. Utilizzo le tecnologie più moderne per costruire 
            soluzioni scalabili e user-friendly.
          </p>

          <div className="space-y-4">
            <SkillBar name="Frontend" percentage={85} color="#6B46C1" />
            <SkillBar name="Backend" percentage={80} color="#6B46C1" />
            <SkillBar name="Database" percentage={75} color="#6B46C1" />
          </div>
        </motion.div>
      </div>
    </main>
  );
}

function SkillBar({ name, percentage, color }: { name: string; percentage: number; color: string }) {
  return (
    <motion.div variants={skillsVariants}>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-sm font-medium text-gray-700">{percentage}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-progress"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </motion.div>
  );
} 