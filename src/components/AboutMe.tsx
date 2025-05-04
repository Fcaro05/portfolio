'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  const marketingSkills = [
    { name: 'Strategia Digitale', percentage: 90 },
    { name: 'Social Media', percentage: 85 },
    { name: 'Analisi dei Dati', percentage: 80 },
    { name: 'Content Marketing', percentage: 88 },
    { name: 'Email Marketing', percentage: 85 },
    { name: 'SEO & SEM', percentage: 82 }
  ];

  const codingSkills = [
    { name: 'Frontend', percentage: 85 },
    { name: 'Backend', percentage: 80 },
    { name: 'Database', percentage: 75 },
    { name: 'React/Next.js', percentage: 88 },
    { name: 'Node.js', percentage: 82 },
    { name: 'DevOps', percentage: 75 }
  ];

  return (
    <section id="chi-sono" className="relative min-h-screen py-20 px-4">
      {/* Sfondo diviso */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-marketing-primary/10" />
        <div className="w-1/2 bg-coding-primary/10" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Titolo fluttuante */}
        <div className="flex justify-center mb-24">
          <motion.div 
            className="relative z-10"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-white rounded-xl shadow-xl -z-10" />
            <h2 className="text-4xl font-bold px-8 py-4 text-yellow-400 whitespace-nowrap">
              Chi Sono
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-32 max-w-6xl mx-auto px-8">
          {/* Marketing Card */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-marketing-primary h-auto md:mr-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-marketing-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold ml-4">Marketing Expert</h3>
            </div>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Esperto di strategie di marketing digitale con un approccio orientato ai risultati. 
              Mi occupo di analizzare il mercato, identificare opportunità e sviluppare campagne 
              che generano ROI concreto per i miei clienti. La mia specializzazione include 
              strategie SEO, campagne social media e marketing automation.
            </p>
            <div className="space-y-6">
              {marketingSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm font-medium text-gray-700">{skill.percentage}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full rounded-full bg-gradient-to-r from-marketing-primary to-yellow-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 * index }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Coding Card */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-coding-primary h-auto md:ml-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-coding-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold ml-4">Developer</h3>
            </div>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Sviluppatore web full-stack con passione per la creazione di esperienze digitali 
              innovative e performanti. Utilizzo le tecnologie più moderne per costruire soluzioni 
              scalabili e user-friendly. Mi specializzo in architetture React/Next.js, Node.js e 
              implementazione di best practices DevOps.
            </p>
            <div className="space-y-6">
              {codingSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm font-medium text-gray-700">{skill.percentage}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full rounded-full bg-gradient-to-r from-coding-primary to-purple-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 * index }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe; 