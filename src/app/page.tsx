'use client';

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { motion, Variants, useAnimation, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';
import clsx from 'clsx';

// Varianti Animazione
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

// Componente per stelle lampeggianti
const Star = ({ delay = 0, size = 2, x, y }: { delay: number, size?: number, x: string, y: string }) => {
  const controls = useAnimation();
  
  useEffect(() => {
    const animate = async () => {
      await controls.start({ 
        opacity: [0.2, 1, 0.2], 
        scale: [0.8, 1.2, 0.8],
        transition: { 
          duration: 3 + Math.random() * 2,
          delay,
          repeat: Infinity
        }
      });
    };
    
    animate();
  }, [controls, delay]);

  return (
    <motion.div 
      className="absolute rounded-full bg-white"
      style={{ 
        width: size, 
        height: size, 
        left: x,
        top: y,
        boxShadow: `0 0 ${size * 2}px ${size}px rgba(255, 255, 255, 0.7)`
      }}
      animate={controls}
    />
  );
};

// Componente Tabs implementato direttamente qui per evitare errori di importazione
const Tabs = () => {
  const [activeTab, setActiveTab] = useState('marketing');

  const tabVariants = {
    active: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
    inactive: {
      opacity: 0,
      y: 10,
      transition: { duration: 0.5 }
    }
  };

  // Dati per gli articoli di marketing
  const marketingArticles = [
    {
      id: 1,
      title: "How to Create a Brand That Resonates",
      excerpt: "Deep dive into the psychology of branding and creating emotional connections with your audience.",
      category: "Brand Strategy",
      readTime: "8 min read",
      date: "May 10, 2023",
    },
    {
      id: 2,
      title: "Social Media Trends That Will Dominate Next Year",
      excerpt: "Analysis of emerging platforms and content strategies to keep your brand ahead of the curve.",
      category: "Social Media",
      readTime: "6 min read",
      date: "Jun 22, 2023",
    },
    {
      id: 3,
      title: "Customer Journey Mapping for E-commerce",
      excerpt: "How to identify pain points and opportunities in your customer's purchasing experience.",
      category: "Conversion",
      readTime: "10 min read",
      date: "Jul 15, 2023",
    }
  ];

  // Dati per gli articoli di coding
  const codingArticles = [
    {
      id: 1,
      title: "The Evolution of React: What's New in 2023",
      excerpt: "Exploring the latest features and patterns in React development and how they improve DX.",
      category: "Frontend",
      readTime: "7 min read",
      date: "Apr 8, 2023",
    },
    {
      id: 2,
      title: "Building Accessible UI Components From Scratch",
      excerpt: "A guide to creating inclusive web experiences with semantic HTML and ARIA attributes.",
      category: "Accessibility",
      readTime: "9 min read",
      date: "May 30, 2023",
    },
    {
      id: 3,
      title: "The Power of Server Components in Next.js",
      excerpt: "How server components can revolutionize your application's performance and architecture.",
      category: "Performance",
      readTime: "11 min read",
      date: "Jul 2, 2023",
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Tabs switcher */}
      <div className="flex justify-center mb-12 relative">
        <div className="bg-gray-800/50 p-1 rounded-full flex relative z-10">
          <button
            onClick={() => setActiveTab('marketing')}
            className={`relative px-6 py-2.5 rounded-full transition-all duration-300 ${
              activeTab === 'marketing' 
                ? 'text-black bg-marketing-primary' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <span className="relative z-10">Marketing Insights</span>
            {activeTab === 'marketing' && (
              <motion.div
                className="absolute inset-0 rounded-full bg-marketing-primary"
                layoutId="activeTabBackground"
                transition={{ type: 'spring', duration: 0.6 }}
              />
            )}
          </button>
          
          <button
            onClick={() => setActiveTab('coding')}
            className={`relative px-6 py-2.5 rounded-full transition-all duration-300 ${
              activeTab === 'coding' 
                ? 'text-black bg-coding-primary' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <span className="relative z-10">Coding Thoughts</span>
            {activeTab === 'coding' && (
              <motion.div
                className="absolute inset-0 rounded-full bg-coding-primary"
                layoutId="activeTabBackground"
                transition={{ type: 'spring', duration: 0.6 }}
              />
            )}
          </button>
        </div>
         </div>
      
      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'marketing' ? (
          <motion.div
            key="marketing"
            initial="inactive"
            animate="active"
            exit="inactive"
            variants={tabVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            {marketingArticles.map((article) => (
             <motion.div
                key={article.id}
                className="group card-marketing flex flex-col h-full"
                whileHover={{ y: -8 }}
              >
                <div className="h-1 w-full bg-marketing-primary"></div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center mb-3">
                    <span className="px-2 py-1 bg-marketing-primary/10 text-marketing-primary text-xs rounded">{article.category}</span>
                    <span className="ml-auto text-xs text-gray-400">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-marketing-primary transition-colors">{article.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 flex-grow">{article.excerpt}</p>
                  <div className="flex items-center mt-auto pt-4 border-t border-secondary-bg">
                    <span className="text-xs text-gray-400">{article.readTime}</span>
                    <button className="ml-auto text-marketing-primary font-medium flex items-center">
                      Read Article
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="ml-1">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                      </svg>
                    </button>
                        </div>
                        </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="coding"
            initial="inactive"
            animate="active"
            exit="inactive"
            variants={tabVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            {codingArticles.map((article) => (
              <motion.div 
                key={article.id}
                className="group card-coding flex flex-col h-full"
                whileHover={{ y: -8 }}
              >
                <div className="h-1 w-full bg-coding-primary"></div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center mb-3">
                    <span className="px-2 py-1 bg-coding-primary/10 text-coding-primary text-xs rounded">{article.category}</span>
                    <span className="ml-auto text-xs text-gray-400">{article.date}</span>
                        </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-coding-primary transition-colors">{article.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 flex-grow">{article.excerpt}</p>
                  <div className="flex items-center mt-auto pt-4 border-t border-secondary-bg">
                    <span className="text-xs text-gray-400">{article.readTime}</span>
                    <button className="ml-auto text-coding-primary font-medium flex items-center">
                      Read Article
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="ml-1">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                      </svg>
                    </button>
                        </div>
                        </div>
              </motion.div>
                 ))}
             </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function HomePage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to the portfolio of a dual-minded creator
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Blending emotional intelligence with technical precision
        </p>
        <div className="flex space-x-4 mt-6">
          <button className="btn-marketing">
            See Marketing Projects
          </button>
          <button className="btn-coding">
            See Coding Projects
          </button>
        </div>
      </section>

      {/* Featured Case Studies Section */}
      <section className="section">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Marketing Works & Dev Builds
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Marketing Case Studies */}
          <div className="space-y-6">
            <div className="card-marketing">
              <h3 className="text-xl font-bold">Curating AR experiences while traveling</h3>
              <p className="text-gray-400">A case study on creating immersive AR campaigns for tourism.</p>
              <button className="btn-marketing mt-4">Read More</button>
            </div>
            <div className="card-marketing">
              <h3 className="text-xl font-bold">Building profitable dropshipping dashboards</h3>
              <p className="text-gray-400">Optimizing e-commerce funnels for better ROI.</p>
              <button className="btn-marketing mt-4">Read More</button>
            </div>
          </div>

          {/* Coding Case Studies */}
          <div className="space-y-6">
            <div className="card-coding">
              <h3 className="text-xl font-bold">The global commerce platform</h3>
              <p className="text-gray-400">Developing scalable solutions for international e-commerce.</p>
              <button className="btn-coding mt-4">Read More</button>
            </div>
            <div className="card-coding">
              <h3 className="text-xl font-bold">Terrific: An app that helps you find a tutor</h3>
              <p className="text-gray-400">Creating a seamless user experience for education apps.</p>
              <button className="btn-coding mt-4">Read More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Diverse Services To Meet Needs
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Marketing Services */}
          <div className="space-y-6">
            <div className="card-marketing">
              <h3 className="text-xl font-bold">Copywriting</h3>
              <p className="text-gray-400">Crafting compelling content that resonates with your audience.</p>
            </div>
            <div className="card-marketing">
              <h3 className="text-xl font-bold">Brand Strategy</h3>
              <p className="text-gray-400">Building a cohesive and impactful brand identity.</p>
            </div>
            <div className="card-marketing">
              <h3 className="text-xl font-bold">Campaign Management</h3>
              <p className="text-gray-400">Executing data-driven marketing campaigns for maximum ROI.</p>
            </div>
          </div>

          {/* Coding Services */}
          <div className="space-y-6">
            <div className="card-coding">
              <h3 className="text-xl font-bold">Front-end Development</h3>
              <p className="text-gray-400">Creating responsive and visually appealing user interfaces.</p>
            </div>
            <div className="card-coding">
              <h3 className="text-xl font-bold">API Integration</h3>
              <p className="text-gray-400">Seamlessly connecting your application to external services.</p>
            </div>
            <div className="card-coding">
              <h3 className="text-xl font-bold">Web App Development</h3>
              <p className="text-gray-400">Building scalable and high-performance web applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What They Say About My Dual Impact
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="card-marketing">
            <p className="text-gray-400">"The marketing campaign exceeded our expectations and brought in a 30% increase in engagement!"</p>
            <span className="block mt-4 text-sm text-marketing-primary font-medium">Marketing Project</span>
          </div>
          <div className="card-coding">
            <p className="text-gray-400">"The web app was delivered on time and has been a game-changer for our operations."</p>
            <span className="block mt-4 text-sm text-coding-primary font-medium">Coding Project</span>
          </div>
          <div className="card-marketing">
            <p className="text-gray-400">"Their branding strategy helped us redefine our identity and connect with our audience."</p>
            <span className="block mt-4 text-sm text-marketing-primary font-medium">Marketing Project</span>
          </div>
          <div className="card-coding">
            <p className="text-gray-400">"The API integration was seamless and improved our workflow significantly."</p>
            <span className="block mt-4 text-sm text-coding-primary font-medium">Coding Project</span>
          </div>
        </div>
      </section>

      {/* Narrative/Articles Section */}
      <section className="section">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Insights From Both Worlds
        </h2>
        <Tabs />
      </section>

      {/* Call to Action Section */}
      <section
        className="relative section bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/CaseStudiesImages/CallToAction/NegroScrivania.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Collaborate?
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            Let’s create something extraordinary together.
          </p>
          <button
            className="btn-coding"
            onClick={() => window.location.href = '/contact'}
          >
            Get in Touch
          </button>
        </div>
      </section>
    </main>
  );
}
