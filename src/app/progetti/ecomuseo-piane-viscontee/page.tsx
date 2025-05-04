'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const EcomuseoPage = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const carouselImages = [
    "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3",
    "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7",
    "https://images.unsplash.com/photo-1584652514232-48a0b28c670c",
    "https://images.unsplash.com/photo-1575223970966-76ae61ee7838"
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
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat brightness-50"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80")'
          }}
        />

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
                  Caso Studio – Marketing Culturale
                </motion.span>
                
                <motion.h1 
                  className="text-6xl font-bold text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Ecomuseo delle Piane Viscontee
                </motion.h1>

                <motion.p 
                  className="text-xl text-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Strategia di lancio e valorizzazione del patrimonio culturale delle Piane Viscontee: 
                  un viaggio nella storia e nelle tradizioni del territorio.
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12v7m0 0l3-3m-3 3l-3-3" />
                    </svg>
                    Cultural Strategy
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm border border-white/20">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                    Heritage
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
                  src="https://images.unsplash.com/photo-1575223970966-76ae61ee7838"
                  alt="Ecomuseo Preview"
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-marketing-primary">Il Territorio</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Le Piane Viscontee, un territorio ricco di storia, tradizioni e patrimonio culturale, 
                  necessitava di una strategia innovativa per valorizzare e preservare la sua identità unica.
                </p>
              </div>

              <div className="bg-marketing-primary/5 rounded-xl p-4 border-l-4 border-marketing-primary hover:shadow-xl transition-shadow duration-300 max-w-sm w-full">
                <div className="w-10 h-10 bg-marketing-primary/10 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-marketing-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-marketing-primary">La Sfida</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Creare un ecomuseo moderno che coinvolga attivamente la comunità locale, 
                  attragga visitatori e preservi il patrimonio culturale attraverso esperienze 
                  innovative e coinvolgenti.
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="text-6xl font-bold text-marketing-primary mb-4">10k</div>
                  <p className="text-gray-600 text-xl">Visitatori</p>
                  <p className="text-base text-gray-500 mt-3">Target primo anno</p>
                </div>

                <div className="bg-white p-12 rounded-2xl shadow-xl text-center transform hover:-translate-y-2 transition-all duration-300">
                  <div className="w-20 h-20 bg-marketing-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <svg className="w-10 h-10 text-marketing-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="text-6xl font-bold text-marketing-primary mb-4">30+</div>
                  <p className="text-gray-600 text-xl">Siti Culturali</p>
                  <p className="text-base text-gray-500 mt-3">Integrati nella rete</p>
                </div>

                <div className="bg-white p-12 rounded-2xl shadow-xl text-center transform hover:-translate-y-2 transition-all duration-300">
                  <div className="w-20 h-20 bg-marketing-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <svg className="w-10 h-10 text-marketing-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12v7m0 0l3-3m-3 3l-3-3" />
                    </svg>
                  </div>
                  <div className="text-6xl font-bold text-marketing-primary mb-4">100%</div>
                  <p className="text-gray-600 text-xl">Digitalizzazione</p>
                  <p className="text-base text-gray-500 mt-3">Del patrimonio culturale</p>
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
                    Creare un ecomuseo innovativo che diventi il punto di riferimento per la valorizzazione 
                    del patrimonio culturale locale, connettendo passato e futuro attraverso esperienze 
                    immersive e partecipative.
                  </p>
                </div>
                <div className="bg-white rounded-[12px] shadow-lg p-6 hover:scale-105 transform transition-transform duration-300 border-t-4 border-marketing-accent">
                  <div className="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-marketing-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
                    </svg>
                    <h3 className="text-[32px] font-bold text-marketing-accent">Obiettivo Primario</h3>
                  </div>
                  <p className="text-[18px] leading-[28px] text-[#4A4A4A]">
                    Trasformare il patrimonio culturale delle Piane Viscontee in un'esperienza viva e 
                    accessibile, coinvolgendo attivamente la comunità locale e attirando visitatori 
                    attraverso un approccio innovativo alla narrazione storica.
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-marketing-primary rounded-[12px] shadow-lg p-10 h-full flex flex-col justify-center hover:shadow-xl hover:scale-105 transform transition-transform duration-300">
                  <div className="flex flex-col items-center mb-6 gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                  </div>
                  <h3 className="text-[36px] font-bold text-white text-center mb-6">Posizionamento Strategico</h3>
                  <p className="text-[20px] leading-[30px] text-white/90">
                    Affermarsi come modello di riferimento per gli ecomusei moderni, dove tecnologia e tradizione 
                    si fondono per creare un'esperienza culturale unica e coinvolgente. Un luogo dove il patrimonio 
                    storico diventa un ponte tra generazioni, creando connessioni significative tra passato, 
                    presente e futuro.
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
          <h3 className="text-2xl font-semibold text-center text-gray-700 mb-8">Trend del Settore Culturale</h3>

          {/* Trend di Settore */}
          <div className="grid grid-cols-5 gap-6 mb-16">
            {/* Trend 1 */}
            <div className="group bg-[#f0f0f0] rounded-lg p-4 flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-2 text-marketing-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <p className="text-center text-gray-800 mt-0 max-h-0 overflow-hidden group-hover:max-h-20 group-hover:mt-2 transition-all duration-300">
                Crescita del <span className="text-marketing-accent font-semibold">Turismo Culturale</span>
              </p>
            </div>
            {/* Trend 2 */}
            <div className="group bg-[#f0f0f0] rounded-lg p-4 flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-2 text-marketing-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <p className="text-center text-gray-800 mt-0 max-h-0 overflow-hidden group-hover:max-h-20 group-hover:mt-2 transition-all duration-300">
                Domanda di <span className="text-marketing-accent font-semibold">Esperienze Digitali</span>
              </p>
            </div>
            {/* Trend 3 */}
            <div className="group bg-[#f0f0f0] rounded-lg p-4 flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-2 text-marketing-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p className="text-center text-gray-800 mt-0 max-h-0 overflow-hidden group-hover:max-h-20 group-hover:mt-2 transition-all duration-300">
                Focus sulla <span className="text-marketing-accent font-semibold">Comunità Locale</span>
              </p>
            </div>
            {/* Trend 4 */}
            <div className="group bg-[#f0f0f0] rounded-lg p-4 flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-2 text-marketing-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <p className="text-center text-gray-800 mt-0 max-h-0 overflow-hidden group-hover:max-h-20 group-hover:mt-2 transition-all duration-300">
                Interesse per il <span className="text-marketing-accent font-semibold">Patrimonio Locale</span>
              </p>
            </div>
            {/* Trend 5 */}
            <div className="group bg-[#f0f0f0] rounded-lg p-4 flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-2 text-marketing-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <p className="text-center text-gray-800 mt-0 max-h-0 overflow-hidden group-hover:max-h-20 group-hover:mt-2 transition-all duration-300">
                Richiesta di <span className="text-marketing-accent font-semibold">Contenuti Multimediali</span>
              </p>
            </div>
          </div>

          {/* Buyer Personas */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Persona 1 */}
            <div className="bg-white rounded-lg shadow p-6 border-t-4 border-marketing-primary hover:shadow-lg transition-shadow duration-300 max-w-sm mx-auto">
              <div className="w-full aspect-[3/2] overflow-hidden rounded-md mb-4">
                <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846" alt="Turista Culturale" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-1">Turista Culturale</h3>
              <h4 className="italic text-gray-600 mb-3">35-55 anni, appassionato di storia</h4>
              <p className="text-gray-700 mb-4">Viaggiatori interessati a <span className="font-semibold text-marketing-accent">esperienze culturali autentiche</span> e alla scoperta del patrimonio locale.</p>
              <div className="flex flex-wrap gap-2">
                {['Storia','Cultura','Autenticità'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-green-100 text-green-900 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
            {/* Persona 2 */}
            <div className="bg-white rounded-lg shadow p-6 border-t-4 border-marketing-primary hover:shadow-lg transition-shadow duration-300 max-w-sm mx-auto">
              <div className="w-full aspect-[3/2] overflow-hidden rounded-md mb-4">
                <img src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8" alt="Residente Locale" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-1">Residente Locale</h3>
              <h4 className="italic text-gray-600 mb-3">25-65 anni, legato al territorio</h4>
              <p className="text-gray-700 mb-4">Membri della comunità interessati a <span className="font-semibold text-marketing-accent">preservare e condividere</span> la storia e le tradizioni locali.</p>
              <div className="flex flex-wrap gap-2">
                {['Comunità','Tradizioni','Partecipazione'].map(tag => (
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
                      src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3"
                      alt="Ecomuseo Moodboard"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex gap-4 mt-6">
                    <div className="flex-1 h-12 bg-[#2C5530] rounded-lg shadow-lg"></div>
                    <div className="flex-1 h-12 bg-[#8B4513] rounded-lg shadow-lg"></div>
                    <div className="flex-1 h-12 bg-[#DAA520] rounded-lg shadow-lg"></div>
                    <div className="flex-1 h-12 bg-[#F5F5DC] rounded-lg shadow-lg border"></div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-6">Tono di Voce</h3>
                  <div className="bg-white p-8 rounded-2xl shadow-xl">
                    <ul className="space-y-6">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-marketing-primary/10 rounded-full flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-marketing-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">Narrativo e Coinvolgente</h4>
                          <p className="text-gray-600">Un tono che racconta storie e crea connessioni emotive con il patrimonio culturale</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-marketing-primary/10 rounded-full flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-marketing-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">Inclusivo e Comunitario</h4>
                          <p className="text-gray-600">Comunichiamo in modo accessibile e coinvolgente per tutta la comunità</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-marketing-primary/10 rounded-full flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-marketing-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">Autorevole ma Accessibile</h4>
                          <p className="text-gray-600">Manteniamo il rigore storico-culturale con un linguaggio comprensibile a tutti</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Elementi Visuali Chiave */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold mb-8 text-center">Elementi Visuali Chiave</h3>
                <div className="grid grid-cols-3 gap-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="w-16 h-16 bg-marketing-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-marketing-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-center mb-2">Fotografie Storiche</h4>
                    <p className="text-gray-600 text-center">Immagini d'archivio e contemporanee che raccontano l'evoluzione del territorio</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="w-16 h-16 bg-marketing-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-marketing-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-center mb-2">Iconografia Locale</h4>
                    <p className="text-gray-600 text-center">Simboli e motivi tradizionali reinterpretati in chiave moderna</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="w-16 h-16 bg-marketing-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-marketing-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-center mb-2">Layout Modulare</h4>
                    <p className="text-gray-600 text-center">Design flessibile che si adatta ai diversi contenuti e piattaforme</p>
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
                <p className="text-gray-600 mb-6 text-center">Primo contatto con l'ecomuseo</p>
                <ul className="list-disc list-inside text-base text-gray-600 space-y-4">
                  <li>Social media</li>
                  <li>Sito web</li>
                  <li>Eventi locali</li>
                  <li>Passaparola</li>
                  <li>Guide turistiche</li>
                </ul>
              </motion.div>

              {/* Fase 2: Pianificazione */}
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-6 text-marketing-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="text-2xl font-bold mb-4">Pianificazione</h3>
                <p className="text-gray-600 mb-6 text-center">Organizzazione della visita</p>
                <ul className="list-disc list-inside text-base text-gray-600 space-y-4">
                  <li>Mappa interattiva</li>
                  <li>Calendario eventi</li>
                  <li>Prenotazioni</li>
                  <li>Itinerari suggeriti</li>
                  <li>Info pratiche</li>
                </ul>
              </motion.div>

              {/* Fase 3: Esperienza */}
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-6 text-marketing-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <h3 className="text-2xl font-bold mb-4">Esperienza</h3>
                <p className="text-gray-600 mb-6 text-center">Visita immersiva</p>
                <ul className="list-disc list-inside text-base text-gray-600 space-y-4">
                  <li>Tour guidati</li>
                  <li>App interattiva</li>
                  <li>Realtà aumentata</li>
                  <li>Laboratori</li>
                  <li>Mostre tematiche</li>
                </ul>
              </motion.div>

              {/* Fase 4: Coinvolgimento */}
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-6 text-marketing-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h3 className="text-2xl font-bold mb-4">Coinvolgimento</h3>
                <p className="text-gray-600 mb-6 text-center">Partecipazione attiva</p>
                <ul className="list-disc list-inside text-base text-gray-600 space-y-4">
                  <li>Community</li>
                  <li>Eventi speciali</li>
                  <li>Volontariato</li>
                  <li>Progetti locali</li>
                  <li>Testimonianze</li>
                </ul>
              </motion.div>

              {/* Fase 5: Condivisione */}
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 2 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-6 text-marketing-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
                <h3 className="text-2xl font-bold mb-4">Condivisione</h3>
                <p className="text-gray-600 mb-6 text-center">Diffusione dell'esperienza</p>
                <ul className="list-disc list-inside text-base text-gray-600 space-y-4">
                  <li>Recensioni</li>
                  <li>Social sharing</li>
                  <li>Blog personali</li>
                  <li>Newsletter</li>
                  <li>Ambasciatori</li>
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
                    src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3"
                    alt="Anteprima Sito Web Ecomuseo"
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
                          alt={`Post Instagram ${index + 1}`}
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
                      src="https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7"
                      alt="Campagna Ecomuseo"
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
      <section className="py-32 relative overflow-hidden bg-marketing-primary">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-4xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Vuoi valorizzare il patrimonio culturale del tuo territorio?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-200 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Scopri come posso aiutarti a creare una strategia efficace per il tuo progetto culturale.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="/contatti"
                className="inline-flex items-center px-8 py-4 bg-white text-marketing-primary font-medium rounded-full hover:bg-marketing-accent hover:text-white transition-colors duration-300 shadow-xl"
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

export default EcomuseoPage; 