'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Project {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  slug?: string;
}

interface ProjectCardProps {
  project: Project;
  type: 'marketing' | 'coding';
}

const Projects = () => {
  const marketingProjects: Project[] = [
    {
      icon: "chart",
      title: "Lancio prodotto OVO&COFFEE",
      description: "Strategia completa per il lancio del prodotto, dal branding, al piano comunicativo, all'ideazione di esso.",
      tags: ["Branding", "Strategy", "Marketing"],
      slug: "ovo-coffee"
    },
    {
      icon: "megaphone",
      title: "Ecomuseo delle Piane Viscontee",
      description: "Strategia di valorizzazione del patrimonio culturale attraverso un approccio innovativo e partecipativo.",
      tags: ["Cultural Strategy", "Heritage", "Marketing"],
      slug: "ecomuseo-piane-viscontee"
    },
    {
      icon: "shop",
      title: "Strategia E-commerce",
      description: "Ottimizzazione del funnel di vendita con aumento del 60% del tasso di conversione.",
      tags: ["E-commerce", "CRO", "PPC"],
      slug: "ecommerce"
    }
  ];

  const codingProjects: Project[] = [
    {
      icon: "plane",
      title: "Aurajet Airlines",
      description: "Sviluppo di un sito web moderno e performante per una compagnia aerea utilizzando HTML, CSS e JavaScript.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      slug: "aurajet"
    },
    {
      icon: "dumbbell",
      title: "GymPower",
      description: "Sviluppo di un sito web moderno per una palestra con focus su performance e user experience.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      slug: "gympower"
    },
    {
      icon: "chart",
      title: "Dashboard Analytics",
      description: "Dashboard interattiva per la visualizzazione di dati aziendali in tempo reale.",
      tags: ["Vue.js", "D3.js", "GraphQL"],
      slug: "dashboard"
    }
  ];

  const ProjectCard: React.FC<ProjectCardProps> = ({ project, type }) => {
    const baseColor = type === 'marketing' ? 'marketing-primary' : 'coding-primary';
    const gradientFrom = type === 'marketing' ? 'from-[#4CAF50]' : 'from-[#6B46C1]';
    const gradientTo = type === 'marketing' ? 'to-yellow-400' : 'to-[#9F7AEA]';
    
    return (
      <motion.div
        className="bg-white rounded-xl shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} p-6 h-48 flex items-center justify-center`}>
          <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {project.icon === "chart" && (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            )}
            {project.icon === "megaphone" && (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            )}
            {project.icon === "shop" && (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            )}
            {project.icon === "cart" && (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            )}
            {project.icon === "mobile" && (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            )}
            {project.icon === "plane" && (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            )}
            {project.icon === "dumbbell" && (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15M4 9h5v5H4V9z" />
            )}
          </svg>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-sm ${
                  type === 'marketing'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-purple-100 text-purple-800'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
          <Link 
            href={`/progetti/${project.slug}`} 
            className={`${
              type === 'marketing' ? 'text-marketing-primary' : 'text-coding-primary'
            } font-medium hover:underline inline-flex items-center mt-4`}
          >
            {type === 'marketing' ? 'Scopri di più' : 'Vedi progetto'}
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="progetti" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">I Miei Progetti</h2>
        
        {/* Marketing Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-marketing-primary mb-8">Marketing</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {marketingProjects.map((project, index) => (
              <ProjectCard key={index} project={project} type="marketing" />
            ))}
          </div>
        </div>

        {/* Coding Projects */}
        <div>
          <h3 className="text-2xl font-bold text-coding-primary mb-8">Coding</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {codingProjects.map((project, index) => (
              <ProjectCard key={index} project={project} type="coding" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 