'use client'; // Aggiunto per future animazioni?

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CodingPage() {
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

  // Progetti in evidenza
  const featuredProjects = [
    {
      title: "E-commerce Platform",
      description: "Piattaforma e-commerce full-stack con Next.js, Stripe e Sanity CMS. Funzionalità di carrello, checkout e gestione inventario.",
      image: "/projects/ecommerce.jpg",
      tags: ["Next.js", "React", "Stripe", "Sanity"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "AI Content Generator",
      description: "App web che utilizza OpenAI API per generare contenuti creativi. Dashboard interattiva con analisi dei risultati.",
      image: "/projects/ai-generator.jpg",
      tags: ["React", "Node.js", "OpenAI", "MongoDB"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Dashboard Analytics",
      description: "Dashboard per visualizzazione dati con grafici interattivi e funzionalità di esportazione report.",
      image: "/projects/dashboard.jpg",
      tags: ["Vue.js", "D3.js", "Firebase", "Tailwind"],
      demoLink: "#",
      codeLink: "#",
    }
  ];
  
  // Skills tecniche
  const skills = [
    { name: "Frontend", items: ["React", "Next.js", "Vue", "Tailwind CSS", "Framer Motion"] },
    { name: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"] },
    { name: "DevOps", items: ["Git", "Docker", "AWS", "CI/CD", "Vercel"] },
    { name: "Altri", items: ["TypeScript", "GraphQL", "REST API", "Jest", "PWA"] }
  ];

  return (
    <main className="min-h-screen bg-coding-background text-coding-font">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        {/* Background decorativo */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[#0a101f]"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[url('/grid-pattern.svg')]"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-coding-primary/20 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#1a365d]/30 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-block mb-4 px-3 py-1 bg-coding-primary/10 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-sm font-medium text-coding-primary">Software Developer</span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-coding-primary to-coding-accent">
              Soluzioni di Coding Innovative
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Sviluppo applicazioni web moderne con focus su performance, usabilità e codice di qualità.
              Trasformo le idee in prodotti digitali concreti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a 
                href="#projects" 
                className="px-6 py-3 bg-coding-primary text-black font-medium rounded-lg hover:bg-coding-primary/90 transition"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Esplora i Progetti
              </motion.a>
              <motion.a 
                href="#contact" 
                className="px-6 py-3 border border-coding-primary/50 text-coding-primary rounded-lg hover:bg-coding-primary/10 transition"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Contattami
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Tech Stack Section */}
      <section className="py-16 bg-gray-800/30 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-coding-primary">Tech Stack</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Le tecnologie che utilizzo per creare soluzioni digitali robuste e scalabili.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((category, index) => (
              <motion.div 
                key={category.name}
                className="bg-gray-800/50 p-6 rounded-xl border border-coding-primary/20 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-coding-primary font-semibold text-lg mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map(skill => (
                    <span 
                      key={skill} 
                      className="bg-coding-primary/10 text-coding-primary px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Progetti in evidenza */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-coding-primary">Progetti in Evidenza</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Una selezione dei miei lavori recenti che dimostrano le mie competenze tecniche e approccio alla risoluzione dei problemi.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={project.title}
                className="bg-gray-800/30 rounded-xl overflow-hidden border border-coding-primary/20 hover:shadow-lg hover:shadow-coding-primary/10 transition-all group"
                variants={itemVariants}
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-bg to-transparent opacity-0 group-hover:opacity-70 transition-opacity z-10"></div>
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-coding-primary">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 bg-coding-primary/10 text-coding-primary rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <motion.a 
                      href={project.demoLink} 
                      className="px-3 py-1 text-sm bg-coding-primary text-black rounded-lg hover:bg-coding-primary/90"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Demo
                    </motion.a>
                    <motion.a 
                      href={project.codeLink} 
                      className="px-3 py-1 text-sm border border-coding-primary/50 text-coding-primary rounded-lg hover:bg-coding-primary/10"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Codice
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <motion.a 
              href="/projects" 
              className="inline-flex items-center text-coding-primary hover:text-coding-accent transition-colors"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Visualizza tutti i progetti
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.a>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section id="contact" className="py-20 bg-gradient-to-br from-secondary-bg via-secondary-bg/80 to-coding-primary/10">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Pronto a trasformare la tua idea in realtà?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Cerchi uno sviluppatore che possa implementare la tua visione? Discutiamo insieme del tuo progetto!
            </p>
            <motion.a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-coding-primary text-black font-medium rounded-lg hover:bg-coding-primary/90 transition"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Parliamo del tuo progetto 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
