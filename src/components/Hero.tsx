'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="split-layout relative min-h-screen">
      {/* Vertical Divider Line */}
      <div className="absolute top-0 bottom-0 left-1/2 w-[3px] bg-white/90 transform -translate-x-1/2 z-10" />

      {/* VS Circle Container - per garantire il centramento perfetto */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <motion.div 
          className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-2xl font-bold shadow-xl pointer-events-auto"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2
          }}
        >
          VS
        </motion.div>
      </div>

      {/* Marketing Side */}
      <motion.div 
        className="split-layout-marketing"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Background Shapes Marketing */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute w-16 h-16 rounded-lg bg-white/10 -top-10 left-1/4"
            animate={{ 
              rotate: 360,
              x: [0, 30, 0],
              y: [0, 20, 0]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute w-12 h-12 rounded-lg bg-white/10 top-1/3 -left-10"
            animate={{ 
              rotate: -360,
              x: [0, 20, 0],
              y: [0, -30, 0]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute w-20 h-20 rounded-lg bg-white/10 bottom-1/4 right-1/4"
            animate={{ 
              rotate: 360,
              x: [0, -30, 0],
              y: [0, 40, 0]
            }}
            transition={{ 
              duration: 18,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute w-14 h-14 rounded-lg bg-white/10 top-1/4 right-1/3"
            animate={{ 
              rotate: -180,
              x: [0, -20, 0],
              y: [0, 25, 0]
            }}
            transition={{ 
              duration: 16,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute w-10 h-10 rounded-lg bg-white/10 bottom-1/3 left-1/3"
            animate={{ 
              rotate: 180,
              x: [0, 25, 0],
              y: [0, -20, 0]
            }}
            transition={{ 
              duration: 14,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute w-8 h-8 rounded-lg bg-white/10 top-2/3 right-1/4"
            animate={{ 
              rotate: -360,
              x: [0, -15, 0],
              y: [0, 15, 0]
            }}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="split-content">
          <motion.h1 
            className="text-6xl font-bold text-white mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Marketing
          </motion.h1>
          <motion.p 
            className="text-white/90 text-xl mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Strategie creative e campagne efficaci per far crescere il tuo business.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link href="#progetti" className="btn btn-marketing">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Scopri le mie strategie
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Coding Side */}
      <motion.div 
        className="split-layout-coding"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Background Shapes Coding */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute w-16 h-16 rounded-lg bg-white/10 -top-20 right-1/4"
            animate={{ 
              rotate: -360,
              x: [0, -30, 0],
              y: [0, 25, 0]
            }}
            transition={{ 
              duration: 22,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute w-12 h-12 rounded-lg bg-white/10 top-1/3 -right-10"
            animate={{ 
              rotate: 360,
              x: [0, -20, 0],
              y: [0, -20, 0]
            }}
            transition={{ 
              duration: 17,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute w-20 h-20 rounded-lg bg-white/10 bottom-1/4 left-1/4"
            animate={{ 
              rotate: -360,
              x: [0, 30, 0],
              y: [0, 20, 0]
            }}
            transition={{ 
              duration: 19,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute w-14 h-14 rounded-lg bg-white/10 top-1/4 left-1/3"
            animate={{ 
              rotate: 180,
              x: [0, 25, 0],
              y: [0, -25, 0]
            }}
            transition={{ 
              duration: 16,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute w-10 h-10 rounded-lg bg-white/10 bottom-1/3 right-1/3"
            animate={{ 
              rotate: -180,
              x: [0, -20, 0],
              y: [0, 20, 0]
            }}
            transition={{ 
              duration: 14,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute w-8 h-8 rounded-lg bg-white/10 top-2/3 left-1/4"
            animate={{ 
              rotate: 360,
              x: [0, 15, 0],
              y: [0, -15, 0]
            }}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="split-content">
          <motion.h1 
            className="text-6xl font-mono font-bold text-white mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Coding
          </motion.h1>
          <motion.p 
            className="text-white/90 text-xl mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Soluzioni tecniche innovative e sviluppo web all'avanguardia.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link href="#progetti" className="btn btn-coding">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Esplora i miei progetti
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 