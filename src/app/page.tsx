'use client';

import React from 'react';
import Image from "next/image";
import { motion, Variants } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import clsx from 'clsx';

// Varianti Animazione corrette
const fadeVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  marketingVisible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  codingVisible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "anticipate" } }
}

const scaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  marketingVisible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } },
  codingVisible: { opacity: 1, scale: 1, transition: { type: 'tween', ease: 'circOut', duration: 0.4 } }
}

const containerStagger: Variants = { 
  hidden: { opacity: 0 }, 
  marketingVisible: { opacity: 1, transition: { staggerChildren: 0.2 } }, 
  codingVisible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function Home() {
  const { theme } = useTheme();
  const isMarketing = theme === 'marketing';

  const currentFadeVariant = isMarketing ? "marketingVisible" : "codingVisible";
  const currentScaleVariant = isMarketing ? "marketingVisible" : "codingVisible";

  return (
    <main className="flex flex-col items-center min-h-screen overflow-x-hidden pt-24 md:pt-28">
      {/* Hero Section */}
      <motion.section
        className="text-center pt-10 pb-20 px-4"
        key={theme}
        initial="hidden"
        animate={currentFadeVariant}
        variants={fadeVariants}
      >
        <motion.h1 className="text-4xl md:text-5xl font-bold mb-4" >
          ciao
        </motion.h1>
        <motion.p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90" >
          Loden ipsum dolor sit amet marketing et coding.
        </motion.p>
        <motion.div className="flex justify-center space-x-4" initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 0.4}}>
          <motion.button className="btn-primary">
            Let's talk
          </motion.button>
          <motion.button className="btn-secondary">
            Get Template
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Trusted Logos Section - Implementazione Carosello */}
      <section className="w-full py-16 bg-gray-800/50 overflow-hidden">
         <div className="text-center mb-8">
             <h2 className="text-sm uppercase text-gray-400">Trusted by leading companies</h2>
         </div>
         <div className="relative flex overflow-x-hidden">
             <motion.div
                 className="flex items-center whitespace-nowrap"
                 initial={{ x: 0 }}
                 animate={{ x: '-100%' }}
                 transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
             >
                 {[...Array(2)].map((_, i) => (
                    <React.Fragment key={`logos1-${i}`}>
                        <div className="flex items-center justify-center w-[200px]">
                            <Image src="/iconSlider/disney.jpeg" alt="Disney Logo" width={120} height={40} className="filter grayscale hover:filter-none transition duration-300 object-contain" />
                        </div>
                        <div className="flex items-center justify-center w-[200px]">
                            <Image src="/iconSlider/airbnb.jpeg" alt="Airbnb Logo" width={120} height={40} className="filter grayscale hover:filter-none transition duration-300 object-contain" />
                        </div>
                        <div className="flex items-center justify-center w-[200px]">
                            <Image src="/iconSlider/microsoft.jpeg" alt="Microsoft Logo" width={120} height={40} className="filter grayscale hover:filter-none transition duration-300 object-contain" />
                        </div>
                        <div className="flex items-center justify-center w-[200px]">
                            <Image src="/iconSlider/netflix.jpeg" alt="Netflix Logo" width={120} height={40} className="filter grayscale hover:filter-none transition duration-300 object-contain" />
                        </div>
                        <div className="flex items-center justify-center w-[200px]">
                            <Image src="/iconSlider/mailchimp.jpeg" alt="Mailchimp Logo" width={120} height={40} className="filter grayscale hover:filter-none transition duration-300 object-contain" />
                        </div>
                    </React.Fragment>
                 ))}
             </motion.div>
             <motion.div
                 className="absolute top-0 flex items-center whitespace-nowrap"
                 initial={{ x: '100%' }}
                 animate={{ x: 0 }}
                 transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
             >
                 {[...Array(2)].map((_, i) => (
                    <React.Fragment key={`logos2-${i}`}>
                        <div className="flex items-center justify-center w-[200px]">
                            <Image src="/iconSlider/disney.jpeg" alt="Disney Logo" width={120} height={40} className="filter grayscale hover:filter-none transition duration-300 object-contain" />
                        </div>
                        <div className="flex items-center justify-center w-[200px]">
                            <Image src="/iconSlider/airbnb.jpeg" alt="Airbnb Logo" width={120} height={40} className="filter grayscale hover:filter-none transition duration-300 object-contain" />
                        </div>
                        <div className="flex items-center justify-center w-[200px]">
                            <Image src="/iconSlider/microsoft.jpeg" alt="Microsoft Logo" width={120} height={40} className="filter grayscale hover:filter-none transition duration-300 object-contain" />
                        </div>
                        <div className="flex items-center justify-center w-[200px]">
                            <Image src="/iconSlider/netflix.jpeg" alt="Netflix Logo" width={120} height={40} className="filter grayscale hover:filter-none transition duration-300 object-contain" />
                        </div>
                        <div className="flex items-center justify-center w-[200px]">
                            <Image src="/iconSlider/mailchimp.jpeg" alt="Mailchimp Logo" width={120} height={40} className="filter grayscale hover:filter-none transition duration-300 object-contain" />
                        </div>
                    </React.Fragment>
                 ))}
             </motion.div>
         </div>
      </section>

      {/* Featured Case Studies Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-16" initial="hidden" whileInView={currentFadeVariant} variants={fadeVariants} viewport={{ once: true, amount: 0.3 }}>
            Featured Case Studies
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-2 gap-8" 
            variants={containerStagger} 
            initial="hidden" 
            animate={currentScaleVariant}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Card 1 */}
            <motion.div className="bg-secondary-bg/30 p-6 rounded-lg" variants={scaleVariants}>
              <motion.div className="overflow-hidden rounded mb-4">
                <motion.img src="/CaseStudiesImages/CaseStudy1.jpeg" whileHover={{ scale: 1.05, filter: isMarketing ? 'brightness(1.1)' : 'contrast(1.2)' }} />
              </motion.div>
              <h3 className="text-xs uppercase mb-2 text-[color:var(--accent)]">AR App</h3>
              <p className="text-lg font-semibold mb-4 opacity-95">Loden ipsum dolor sit amet...</p>
              <motion.button 
                className="border border-[color:var(--primary)] text-[color:var(--primary)] px-4 py-2 rounded transition-all duration-200 hover:bg-[color:var(--primary)] hover:text-[color:var(--background)]"
                whileHover={{ scale: 1.05, boxShadow: `0 0 15px var(--primary)` }}
                whileTap={{ scale: 0.95 }} 
              >
                View Case Study
              </motion.button>
            </motion.div>
             {/* Card 2 - simile */}
             <motion.div className="bg-secondary-bg/30 p-6 rounded-lg" variants={scaleVariants}>
              <motion.div className="overflow-hidden rounded mb-4">
                <motion.img src="/CaseStudiesImages/CaseStudy2.webp" whileHover={{ scale: 1.05, filter: isMarketing ? 'brightness(1.1)' : 'contrast(1.2)' }} />
              </motion.div>
              <h3 className="text-xs uppercase mb-2 text-[color:var(--accent)]">SaaS Platform</h3>
              <p className="text-lg font-semibold mb-4 opacity-95">Sed do eiusmod tempor...</p>
              <motion.button 
                className="border border-[color:var(--primary)] text-[color:var(--primary)] px-4 py-2 rounded transition-all duration-200 hover:bg-[color:var(--primary)] hover:text-[color:var(--background)]"
                whileHover={{ scale: 1.05, boxShadow: `0 0 15px var(--primary)` }}
                whileTap={{ scale: 0.95 }} 
              >
                View Case Study
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-24 bg-secondary-bg/10">
        <div className="container mx-auto px-4">
           <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-16" initial="hidden" whileInView={currentFadeVariant} variants={fadeVariants} viewport={{ once: true, amount: 0.3 }}>
            Latest Thoughts
          </motion.h2>
           <motion.div className="grid md:grid-cols-3 gap-8" variants={containerStagger} initial="hidden" animate={currentScaleVariant} viewport={{ once: true, amount: 0.2 }}>
               {/* Card 1 (Coding Palette) */}
               <motion.div className="bg-coding-background p-6 rounded-lg border border-coding-primary cursor-pointer" variants={scaleVariants} whileHover={{ y: -5, rotate: 1, boxShadow: "0 0 20px rgba(56, 189, 248, 0.4)" }}>
                    <h3 className="text-xl font-semibold mb-3 text-coding-primary">Overcoming Gen AI Barriers</h3>
                    <p className="text-coding-font mb-4">Loden ipsum...</p>
                    <a href="#" className="text-coding-accent hover:underline">Read More</a>
               </motion.div>
                {/* Card 2 (Marketing Palette) */}
               <motion.div className="bg-marketing-background p-6 rounded-lg border border-marketing-primary cursor-pointer" variants={scaleVariants} whileHover={{ y: -5, rotate: -1, boxShadow: "0 0 20px rgba(251, 191, 36, 0.4)" }}>
                     <h3 className="text-xl font-semibold mb-3 text-marketing-primary">Making design user-first</h3>
                    <p className="text-marketing-font mb-4">Loden ipsum...</p>
                    <a href="#" className="text-marketing-accent hover:underline">Read More</a>
               </motion.div>
                {/* Card 3 (Neutral Palette) */}
               <motion.div className="bg-gray-900 p-6 rounded-lg border border-gray-700 cursor-pointer" variants={scaleVariants} whileHover={{ y: -5, rotate: 1, boxShadow: "0 0 20px rgba(150, 150, 150, 0.3)" }}>
                   <h3 className="text-xl font-semibold mb-3 text-white">How to launch SaaS</h3>
                    <p className="text-gray-300 mb-4">Loden ipsum...</p>
                    <a href="#" className="text-blue-400 hover:underline">Read More</a>
               </motion.div>
            </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
           <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-16" initial="hidden" whileInView={currentFadeVariant} variants={fadeVariants} viewport={{ once: true, amount: 0.3 }}>
             Diverse Services to Meet Needs
           </motion.h2>
           <motion.div className="grid md:grid-cols-2 gap-8 text-center" variants={containerStagger} initial="hidden" animate={currentScaleVariant} viewport={{ once: true, amount: 0.2 }}>
              {[ { title: "Storytelling", icon: "/SVG/Storytelling.svg", colorClass: "bg-[color:var(--primary)]" },
                 { title: "UX Research", icon: "/SVG/Ux.svg", colorClass: "bg-[color:var(--primary)]" },
                 { title: "Visual Design", icon: "/SVG/design.svg", colorClass: "bg-[color:var(--accent)]" },
                 { title: "Prototyping", icon: "/SVG/prototyping.svg", colorClass: "bg-[color:var(--accent)]" } 
              ].map((service, index) => (
                 <motion.div className="bg-secondary-bg/30 p-6 rounded-lg" variants={scaleVariants} key={index}>
                    <div className={clsx("w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center transition-colors duration-300", service.colorClass)}>
                        <Image src={service.icon} alt={`${service.title} Icon`} width={32} height={32} className="text-[color:var(--background)]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 opacity-95">{service.title}</h3>
                    <p className="text-gray-400">Loden ipsum...</p>
                 </motion.div>
              ))}
           </motion.div>
        </div>
      </section>

       {/* Testimonials Section */}
       <section className="py-24 bg-secondary-bg/30 mb-16">
          <div className="container mx-auto px-4">
             <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-16" initial="hidden" animate={currentFadeVariant} variants={fadeVariants} viewport={{ once: true, amount: 0.3 }}>
               What Clients Say
             </motion.h2>
             <div className="md:grid md:grid-cols-3 md:gap-8 flex space-x-8 md:space-x-0 overflow-x-auto md:overflow-visible px-4 pb-4 md:px-0 md:pb-0 no-scrollbar">
                {[ { name: "Client Name 1", title: "CEO, Company A", avatar: "/avatars/avatar1.jpeg", quote: "Loden ipsum...", borderColor: "border-marketing-primary" },
                   { name: "Client Name 2", title: "CTO, Company B", avatar: "/avatars/avatar2.jpeg", quote: "Ut enim ad minim...", borderColor: "border-coding-primary" },
                   { name: "Client Name 3", title: "Designer, Company C", avatar: "/avatars/avata3.jpeg", quote: "Duis aute irure...", borderColor: "border-gray-500" } 
                ].map((testimonial, index) => (
                   <motion.div 
                     className="bg-secondary-bg/50 p-6 rounded-lg text-center w-80 md:w-auto flex-shrink-0 md:flex-shrink"
                     variants={scaleVariants} 
                     key={index} 
                     initial="hidden"
                     animate={currentScaleVariant}
                     viewport={{ once: true, amount: 0.3 }}
                   >
                      <Image src={testimonial.avatar} alt={`${testimonial.name} Avatar`} width={80} height={80} className={clsx("rounded-full mx-auto mb-4 border-2 object-cover", testimonial.borderColor)} />
                      <p className="italic mb-4 opacity-80">"{testimonial.quote}"</p>
                      <p className="font-semibold opacity-95">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.title}</p>
                   </motion.div>
                ))}
             </div>
          </div>
       </section>
    </main>
  );
}
