'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const OvoCoffeePage = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const carouselImages = [
    "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb",
    "https://images.unsplash.com/photo-1500630417200-63156e226754",
    "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-64px)] flex items-center overflow-hidden py-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80"
            alt="Coffee Background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Colonna di testo (60%) */}
            <motion.div 
              className="md:col-span-7"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <motion.span 
                  className="inline-block px-4 py-2 bg-white/10 text-white backdrop-blur-sm rounded-full text-sm font-medium border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Caso Studio – Marketing Strategico
                </motion.span>
                
                <motion.h1 
                  className="text-6xl font-bold text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Ovo&Coffee by Ovomaltine
                </motion.h1>

                <motion.p 
                  className="text-xl text-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Lancio strategico e creativo di un nuovo prodotto: Ovo&Coffee, 
                  il primo energy drink salutare in Italia firmato Ovomaltine.
                </motion.p>

                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm border border-white/20">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    2023
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm border border-white/20">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Brand Strategy
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm border border-white/20">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                    Marketing
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Colonna immagine (40%) */}
            <motion.div 
              className="md:col-span-5 pl-16"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative aspect-[3/4] max-h-[600px] rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm p-8 border border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1604423043492-41303788de80?auto=format&fit=crop&q=80"
                  alt="Ovo&Coffee Mockup"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex flex-col items-center text-white">
            <span className="text-sm mb-2">Scorri per scoprire</span>
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Contesto & Sfida Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold mb-48 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Contesto & Sfida
          </motion.h2>

          <div className="space-y-48">
            {/* Due container principali */}
            <div className="grid md:grid-cols-2 gap-6 justify-items-center">
              <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm w-full">
                <div className="w-10 h-10 bg-marketing-primary/10 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-marketing-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-marketing-primary">Presentazione del Brand</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Ovomaltine, brand storico nel settore delle bevande al malto, ha deciso di 
                  entrare nel mercato degli energy drink con un prodotto innovativo che unisce 
                  l'energia del caffè alle proprietà nutritive del malto.
                </p>
              </div>

              <div className="bg-marketing-primary/5 rounded-xl p-4 border-l-4 border-marketing-primary hover:shadow-xl transition-shadow duration-300 max-w-sm w-full">
                <div className="w-10 h-10 bg-marketing-primary/10 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-marketing-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-marketing-primary">Perché nasce Ovo&Coffee</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  La sfida principale è stata creare un posizionamento distintivo in un mercato saturo, 
                  differenziandosi dai classici energy drink e comunicando i benefici di un'alternativa più 
                  salutare senza sacrificare l'efficacia energetica.
                </p>
              </div>
            </div>

            {/* Tre box degli obiettivi */}
            <div>
              <h3 className="text-3xl font-bold mb-16 text-center">Obiettivi Iniziali</h3>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="bg-white p-12 rounded-2xl shadow-xl text-center transform hover:-translate-y-2 transition-all duration-300">
                  <div className="w-20 h-20 bg-marketing-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <svg className="w-10 h-10 text-marketing-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="text-6xl font-bold text-marketing-primary mb-4">5%</div>
                  <p className="text-gray-600 text-xl">Market Share</p>
                  <p className="text-base text-gray-500 mt-3">Obiettivo primo anno</p>
                </div>

                <div className="bg-white p-12 rounded-2xl shadow-xl text-center transform hover:-translate-y-2 transition-all duration-300">
                  <div className="w-20 h-20 bg-marketing-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <svg className="w-10 h-10 text-marketing-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="text-6xl font-bold text-marketing-primary mb-4">100k</div>
                  <p className="text-gray-600 text-xl">Brand Awareness</p>
                  <p className="text-base text-gray-500 mt-3">Target 18-35 anni</p>
                </div>

                <div className="bg-white p-12 rounded-2xl shadow-xl text-center transform hover:-translate-y-2 transition-all duration-300">
                  <div className="w-20 h-20 bg-marketing-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <svg className="w-10 h-10 text-marketing-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="text-6xl font-bold text-marketing-primary mb-4">50+</div>
                  <p className="text-gray-600 text-xl">Partnership</p>
                  <p className="text-base text-gray-500 mt-3">Collaborazioni strategiche</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visione & Obiettivo Strategico */}
      <section className="relative bg-gray-50 py-20 px-8">
        <div className="max-w-[1200px] mx-auto">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-marketing-primary/20 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-marketing-primary/20 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Visione & Obiettivo Strategico
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-x-6 gap-y-6">
              <div className="flex flex-col gap-6">
                <div className="bg-white rounded-[12px] shadow-lg p-6 hover:scale-105 transform transition-transform duration-300 border-t-4 border-marketing-accent">
                  <div className="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-marketing-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7C20.268 16.057 16.477 19 12 19s-8.268-2.943-9.542-7z" />
                    </svg>
                    <h3 className="text-[32px] font-bold text-marketing-accent">Vision</h3>
                  </div>
                  <p className="text-[18px] leading-[28px] text-[#4A4A4A]">
                    Rivoluzionare il mercato degli energy drink offrendo un'alternativa salutare che non compromette l'efficacia energetica, posizionandoci come leader nel segmento degli energy drink naturali.
                  </p>
                </div>
                <div className="bg-white rounded-[12px] shadow-lg p-6 hover:scale-105 transform transition-transform duration-300 border-t-4 border-marketing-accent">
                  <div className="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-marketing-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} fill="none" />
                      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth={2} fill="none" />
                    </svg>
                    <h3 className="text-[32px] font-bold text-marketing-accent">Obiettivo Primario</h3>
                  </div>
                  <p className="text-[18px] leading-[28px] text-[#4A4A4A]">
                    Conquistare una quota significativa del mercato degli energy drink salutari, diventando il punto di riferimento per i consumatori attenti alla salute ma che non vogliono rinunciare alla carica energetica.
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-marketing-primary rounded-[12px] shadow-lg p-10 h-full flex flex-col justify-center hover:shadow-xl hover:scale-105 transform transition-transform duration-300">
                  <div className="flex flex-col items-center mb-6 gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V9" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17v-4" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17v-7" />
                    </svg>
                  </div>
                  <h3 className="text-[36px] font-bold text-white text-center mb-6">Posizionamento Desiderato</h3>
                  <p className="text-[20px] leading-[30px] text-white/90">
                    Essere riconosciuti come il primo energy drink che unisce l'efficacia del caffè alle proprietà nutritive del malto, creando una nuova categoria nel mercato delle bevande energetiche.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Analisi di Mercato & Target */}
      <section className="bg-[#f0f0f0] py-20 px-8">
        <div className="max-w-[1200px] mx-auto">
          {/* Titolo */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Analisi di Mercato & Target</h2>
          </div>

          {/* Sottotitolo Trend di Settore */}
          <h3 className="text-2xl font-semibold text-center text-gray-700 mb-8">Trend di Settore</h3>

          {/* Trend di Settore */}
          <div className="grid grid-cols-5 gap-6 mb-16">
            {/* Trend 1 */}
            <div className="group bg-[#f0f0f0] rounded-lg p-4 flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-2 text-marketing-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V9" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17v-4" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17v-7" />
              </svg>
              <p className="text-center text-gray-800 mt-0 max-h-0 overflow-hidden group-hover:max-h-20 group-hover:mt-2 transition-all duration-300">
                Crescita delle <span className="text-marketing-accent font-semibold">Bevande Funzionali</span>
              </p>
            </div>
            {/* Trend 2 */}
            <div className="group bg-[#f0f0f0] rounded-lg p-4 flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-2 text-marketing-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12v7m0 0l3-3m-3 3l-3-3" />
              </svg>
              <p className="text-center text-gray-800 mt-0 max-h-0 overflow-hidden group-hover:max-h-20 group-hover:mt-2 transition-all duration-300">
                Aumento della domanda di <span className="text-marketing-accent font-semibold">Ingredienti Naturali</span>
              </p>
            </div>
            {/* Trend 3 */}
            <div className="group bg-[#f0f0f0] rounded-lg p-4 flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-2 text-marketing-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12a10 10 0 1120 0 10 10 0 01-20 0z" />
              </svg>
              <p className="text-center text-gray-800 mt-0 max-h-0 overflow-hidden group-hover:max-h-20 group-hover:mt-2 transition-all duration-300">
                Crescente focus sul <span className="text-marketing-accent font-semibold">Benessere Mentale</span>
              </p>
            </div>
            {/* Trend 4 */}
            <div className="group bg-[#f0f0f0] rounded-lg p-4 flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-2 text-marketing-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v18H3V3z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18" />
              </svg>
              <p className="text-center text-gray-800 mt-0 max-h-0 overflow-hidden group-hover:max-h-20 group-hover:mt-2 transition-all duration-300">
                Adozione di <span className="text-marketing-accent font-semibold">Packaging Sostenibile</span>
              </p>
            </div>
            {/* Trend 5 */}
            <div className="group bg-[#f0f0f0] rounded-lg p-4 flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-2 text-marketing-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.965 9.965 0 01-5-1.292L3 21l1.292-4A9.965 9.965 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <p className="text-center text-gray-800 mt-0 max-h-0 overflow-hidden group-hover:max-h-20 group-hover:mt-2 transition-all duration-300">
                Incremento del <span className="text-marketing-accent font-semibold">Digital Engagement</span>
              </p>
            </div>
          </div>

          {/* Buyer Personas */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Persona 1 */}
            <div className="bg-white rounded-lg shadow p-6 border-t-4 border-marketing-primary hover:shadow-lg transition-shadow duration-300 max-w-sm mx-auto">
              <div className="w-full aspect-[3/2] overflow-hidden rounded-md mb-4">
                <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=60" alt="Giovane Professionista" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-1">Giovane Professionista</h3>
              <h4 className="italic text-gray-600 mb-3">25-35 anni, orientato alla carriera</h4>
              <p className="text-gray-700 mb-4">Professionisti che cercano un'<span className="font-semibold text-marketing-accent">energia sostenibile</span> per le lunghe giornate lavorative.</p>
              <div className="flex flex-wrap gap-2">
                {['Salute','Carriera','Benessere'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-green-100 text-green-900 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
            {/* Persona 2 */}
            <div className="bg-white rounded-lg shadow p-6 border-t-4 border-marketing-primary hover:shadow-lg transition-shadow duration-300 max-w-sm mx-auto">
              <div className="w-full aspect-[3/2] overflow-hidden rounded-md mb-4">
                <img src="https://images.unsplash.com/photo-1508606572321-901ea4437077?auto=format&fit=crop&w=800&q=60" alt="Sportivo Amatoriale" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-1">Sportivo Amatoriale</h3>
              <h4 className="italic text-gray-600 mb-3">18-30 anni, attento alla forma fisica</h4>
              <p className="text-gray-700 mb-4">Atleti amatoriali alla ricerca di un'<span className="font-semibold text-marketing-accent">energia naturale</span> pre/post allenamento.</p>
              <div className="flex flex-wrap gap-2">
                {['Fitness','Nutrizione','Performance'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-green-100 text-green-900 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branding e Identità Visiva */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Branding e Identità Visiva
            </motion.h2>

            <motion.div 
              className="space-y-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Moodboard & Colori</h3>
                  <div className="aspect-square relative rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&q=80"
                      alt="Ovo&Coffee Moodboard"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex gap-4 mt-6">
                    <div className="flex-1 h-12 bg-[#4CAF50] rounded-lg shadow-lg"></div>
                    <div className="flex-1 h-12 bg-[#795548] rounded-lg shadow-lg"></div>
                    <div className="flex-1 h-12 bg-[#FFC107] rounded-lg shadow-lg"></div>
                    <div className="flex-1 h-12 bg-[#FFFFFF] rounded-lg shadow-lg border"></div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-6">Tono di Voce</h3>
                  <div className="bg-white p-8 rounded-2xl shadow-xl">
                    <ul className="space-y-6">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-marketing-primary/10 rounded-full flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-marketing-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">Energico ma rassicurante</h4>
                          <p className="text-gray-600">Un tono che trasmette vitalità mantenendo un approccio affidabile e professionale</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-marketing-primary/10 rounded-full flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-marketing-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">Professionale ma accessibile</h4>
                          <p className="text-gray-600">Comunichiamo competenza senza risultare distanti o troppo tecnici</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-marketing-primary/10 rounded-full flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-marketing-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">Focus su benessere e performance</h4>
                          <p className="text-gray-600">Enfatizziamo i benefici per la salute senza compromettere l'efficacia</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Journey */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold mb-16 text-center">Customer Journey</h2>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
              {/* Fase 1: Scoperta */}
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-6 text-marketing-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <h3 className="text-2xl font-bold mb-4">Scoperta</h3>
                <p className="text-gray-600 mb-6 text-center">Primo contatto con il brand</p>
                <ul className="list-disc list-inside text-base text-gray-600 space-y-4">
                  <li>Navigazione sito</li>
                  <li>Ricerca prodotto</li>
                  <li>Articoli sul blog</li>
                  <li>Social media</li>
                  <li>Pubblicità online</li>
                </ul>
              </motion.div>

              {/* Fase 2: Prova */}
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-6 text-marketing-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 18H9a3 3 0 01-3-3v-1a3 3 0 013-3h6a3 3 0 013 3v1a3 3 0 01-3 3z" />
                </svg>
                <h3 className="text-2xl font-bold mb-4">Prova</h3>
                <p className="text-gray-600 mb-6 text-center">Esperienza diretta del prodotto</p>
                <ul className="list-disc list-inside text-base text-gray-600 space-y-4">
                  <li>Campioni gratuiti</li>
                  <li>Demo online</li>
                  <li>Eventi di prova</li>
                  <li>Degustazioni</li>
                  <li>Video tutorial</li>
                </ul>
              </motion.div>

              {/* Fase 3: Acquisto */}
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-6 text-marketing-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h14l-1.35 5.406A2 2 0 0117.65 20H8.35a2 2 0 01-1.995-1.595L5 6H4" />
                </svg>
                <h3 className="text-2xl font-bold mb-4">Acquisto</h3>
                <p className="text-gray-600 mb-6 text-center">Processo di acquisto semplice</p>
                <ul className="list-disc list-inside text-base text-gray-600 space-y-4">
                  <li>Aggiungi al carrello</li>
                  <li>Pagamento sicuro</li>
                  <li>Conferma ordine</li>
                  <li>Spedizione tracciata</li>
                  <li>Garanzia soddisfatti</li>
                </ul>
              </motion.div>

              {/* Fase 4: Valore */}
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-6 text-marketing-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.29 3.973a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.38 2.467a1 1 0 00-.364 1.118l1.29 3.973c.3.921-.755 1.688-1.54 1.118L12 13.347l-3.38 2.467c-.784.57-1.838-.197-1.539-1.118l1.29-3.973a1 1 0 00-.364-1.118L4.627 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.29-3.973z" />
                </svg>
                <h3 className="text-2xl font-bold mb-4">Valore</h3>
                <p className="text-gray-600 mb-6 text-center">Massimizza l'esperienza</p>
                <ul className="list-disc list-inside text-base text-gray-600 space-y-4">
                  <li>Recensioni</li>
                  <li>Programma fedeltà</li>
                  <li>Consigli personalizzati</li>
                  <li>Offerte esclusive</li>
                  <li>Community accesso</li>
                </ul>
              </motion.div>

              {/* Fase 5: Supporto */}
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 2 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-6 text-marketing-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13a7 7 0 0114 0v4a2 2 0 01-2 2h-2a1 1 0 01-1-1v-4a1 1 0 011-1h2m0 0V9a7 7 0 00-14 0v4a1 1 0 001 1h2a1 1 0 011-1v-4a1 1 0 00-1-1H5" />
                </svg>
                <h3 className="text-2xl font-bold mb-4">Supporto</h3>
                <p className="text-gray-600 mb-6 text-center">Assistenza continua</p>
                <ul className="list-disc list-inside text-base text-gray-600 space-y-4">
                  <li>FAQ</li>
                  <li>Chat live</li>
                  <li>Assistenza clienti</li>
                  <li>Video guide</li>
                  <li>Supporto 24/7</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Colonna Sinistra - Anteprima Sito Web (1/2) */}
              <div className="space-y-6 flex flex-col">
                <h2 className="text-3xl font-bold">Sito Web</h2>
                <div className="flex-1 relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                    alt="Anteprima Sito Web"
                    fill
                    className="object-cover"
                  />
                  {/* Overlay con effetto vetro */}
                  <div className="absolute inset-0 bg-black/5 backdrop-blur-[2px]"></div>
                  {/* Browser Frame */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-gray-100/90 backdrop-blur flex items-center px-4 space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
              </div>

              {/* Colonna Destra (1/2) */}
              <div className="space-y-8 flex flex-col">
                {/* Carosello Instagram */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">Carosello IG</h2>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group">
                    {carouselImages.map((image, index) => (
                      <motion.div
                        key={image}
                        className="absolute inset-0"
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ 
                          opacity: index === activeIndex ? 1 : 0,
                          x: index === activeIndex ? '0%' : index < activeIndex ? '-100%' : '100%',
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <Image
                          src={`${image}?auto=format&fit=crop&q=80`}
                          alt={`Instagram Post ${index + 1}`}
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />
                      </motion.div>
                    ))}
                    
                    {/* Frecce di navigazione */}
                    <button 
                      onClick={() => setActiveIndex((current) => (current - 1 + carouselImages.length) % carouselImages.length)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
                      aria-label="Immagine precedente"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => setActiveIndex((current) => (current + 1) % carouselImages.length)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
                      aria-label="Immagine successiva"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Indicatori */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                      {carouselImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === activeIndex 
                              ? 'bg-white w-6' 
                              : 'bg-white/50 hover:bg-white/75'
                          }`}
                          aria-label={`Vai all'immagine ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Immagine Campagna */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">Immagine di campagna</h2>
                  <motion.div 
                    className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80"
                      alt="Campagna Pubblicitaria"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay con gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-4xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Pronto a lanciare il tuo prodotto?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-200 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Scopri come posso aiutarti a creare una strategia vincente per il tuo brand.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="/contatti"
                className="inline-flex items-center px-8 py-4 bg-white text-marketing-primary font-medium rounded-full hover:bg-marketing-primary hover:text-white transition-colors duration-300 shadow-xl"
              >
                Contattami
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OvoCoffeePage; 