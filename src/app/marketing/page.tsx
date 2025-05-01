'use client'; // Aggiunto per future animazioni?

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MarketingPage() {
  // Varianti di animazione
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  // Case studies in evidenza
  const caseStudies = [
    {
      title: "Rebrand globale di un e-commerce",
      description: "Strategia completa di rebranding con design system, comunicazione coordinata e campagne di lancio.",
      image: "/casestudies/rebrand.jpg",
      categories: ["Branding", "Strategy", "Web Design"],
      link: "#"
    },
    {
      title: "Campagna social per startup fintech",
      description: "Pianificazione e sviluppo di campagna multi-canale con focus su acquisizione clienti e storytelling.",
      image: "/casestudies/social-campaign.jpg", 
      categories: ["Social Media", "Content", "Analytics"],
      link: "#"
    },
    {
      title: "Marketing automation per SaaS B2B",
      description: "Implementazione di flussi automatizzati per lead nurturing e conversione con personalizzazione avanzata.",
      image: "/casestudies/saas-automation.jpg",
      categories: ["Automation", "Email", "CRM"],
      link: "#"
    }
  ];
  
  // Skills di marketing
  const services = [
    {
      title: "Strategia di Marketing",
      description: "Sviluppo piani di marketing integrati basati su analisi di mercato e definizione di obiettivi misurabili.",
      icon: "/icons/strategy.svg"
    },
    {
      title: "Branding & Identity",
      description: "Creazione di identità di marca distintive e posizionamento strategico per distinguersi dalla concorrenza.",
      icon: "/icons/branding.svg"
    },
    {
      title: "Content Marketing",
      description: "Produzione di contenuti di valore per attrarre, coinvolgere e convertire il tuo pubblico target.",
      icon: "/icons/content.svg"
    },
    {
      title: "Social Media",
      description: "Gestione di canali social con contenuti creativi, community engagement e strategie di crescita organica.",
      icon: "/icons/social.svg"
    },
    {
      title: "SEO & SEM",
      description: "Ottimizzazione per motori di ricerca e gestione campagne pubblicitarie a pagamento per massimizzare la visibilità.",
      icon: "/icons/seo.svg"
    },
    {
      title: "Analytics & Reporting",
      description: "Monitoraggio e analisi dei dati per perfezionare strategie e misurare il ritorno sull'investimento.",
      icon: "/icons/analytics.svg"
    }
  ];
  
  // Testimonianze clienti
  const testimonials = [
    {
      quote: "Francesco ha trasformato la nostra presenza online con una strategia chiara e innovativa. I risultati sono stati tangibili fin dal primo mese.",
      name: "Marco Rossi",
      position: "CEO, Innovatech",
      avatar: "/avatars/testimonial1.jpg"
    },
    {
      quote: "La sua capacità di combinare competenze tecniche e creatività ha fatto la differenza per il lancio del nostro prodotto.",
      name: "Laura Bianchi",
      position: "Marketing Director, StyleBrand",
      avatar: "/avatars/testimonial2.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-marketing-background text-marketing-font">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        {/* Background decorativo */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[#0f1419]"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('/dot-pattern.svg')]"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-marketing-primary/20 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#7e3813]/20 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-block mb-4 px-3 py-1 bg-marketing-primary/10 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-sm font-medium text-marketing-primary">Marketing Strategist</span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-marketing-primary to-marketing-accent">
              Marketing che genera Risultati
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Strategie di marketing data-driven per far crescere il tuo business.
              Approccio creativo per distinguerti e costruire relazioni durature con i clienti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a 
                href="#case-studies" 
                className="px-6 py-3 bg-marketing-primary text-black font-medium rounded-lg hover:bg-marketing-primary/90 transition"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Case Studies
              </motion.a>
              <motion.a 
                href="#services" 
                className="px-6 py-3 border border-marketing-primary/50 text-marketing-primary rounded-lg hover:bg-marketing-primary/10 transition"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Servizi
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Statistiche */}
      <section className="py-16 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {[
              { value: "5+", label: "Anni di esperienza" },
              { value: "40+", label: "Progetti completati" },
              { value: "90%", label: "Tasso di retention clienti" },
              { value: "300%", label: "ROI medio generato" }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-marketing-primary mb-2">{stat.value}</h3>
                <p className="text-sm md:text-base text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Servizi */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-marketing-primary">Servizi Offerti</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Un approccio integrato al marketing digitale per massimizzare l'impatto della tua presenza online.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                className="bg-gray-800/30 rounded-xl p-6 hover:shadow-lg border border-marketing-primary/10 hover:border-marketing-primary/30 transition-all duration-300"
                variants={itemVariants}
              >
                <div className="w-14 h-14 rounded-full bg-marketing-primary/10 flex items-center justify-center mb-5">
                  <Image src={service.icon} alt={service.title} width={30} height={30} className="text-marketing-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-marketing-primary">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Case Studies */}
      <section id="case-studies" className="py-24 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-marketing-primary">Case Studies</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Scopri come ho aiutato aziende di diversi settori a raggiungere i loro obiettivi di marketing.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {caseStudies.map((study, index) => (
              <motion.div 
                key={study.title}
                className="relative group overflow-hidden rounded-xl"
                variants={itemVariants}
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-70"></div>
                  
                  <div className="absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-500">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {study.categories.map(category => (
                        <span key={category} className="text-xs px-2 py-1 bg-marketing-primary/20 text-marketing-primary rounded-full">
                          {category}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{study.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {study.description}
                    </p>
                    <motion.a 
                      href={study.link} 
                      className="inline-flex items-center text-marketing-primary hover:text-marketing-accent transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      Leggi case study
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <motion.a 
              href="/portfolio" 
              className="inline-flex items-center text-marketing-primary hover:text-marketing-accent transition-colors"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Vedi tutti i case studies
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.a>
          </div>
        </div>
      </section>
      
      {/* Testimonianze */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-marketing-primary">Cosa Dicono i Clienti</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Il feedback di chi ha scelto di lavorare con me per raggiungere i propri obiettivi di marketing.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.name}
                className="bg-gray-800/30 p-6 rounded-xl border border-marketing-primary/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline text-marketing-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="italic text-gray-300 mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-secondary-bg via-secondary-bg/80 to-marketing-primary/10">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Pronto a far crescere il tuo business?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Discutiamo insieme di come posso aiutarti a raggiungere i tuoi obiettivi di marketing.
            </p>
            <motion.a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-marketing-primary text-black font-medium rounded-lg hover:bg-marketing-primary/90 transition"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Prenota una consulenza gratuita
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 
