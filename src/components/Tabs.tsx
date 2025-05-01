'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

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

export const Tabs = () => {
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
