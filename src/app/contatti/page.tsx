'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contatti() {
  const [marketingForm, setMarketingForm] = useState({
    nome: '',
    email: '',
    messaggio: ''
  });

  const [codingForm, setCodingForm] = useState({
    nome: '',
    email: '',
    messaggio: ''
  });

  const handleMarketingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementare la logica di invio
    console.log('Marketing form:', marketingForm);
  };

  const handleCodingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementare la logica di invio
    console.log('Coding form:', codingForm);
  };

  return (
    <main className="min-h-screen pt-24 pb-12 px-4">
      <motion.h1 
        className="text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contattami
      </motion.h1>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Marketing Form */}
        <motion.div
          className="card card-marketing"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-[#4CAF50] mb-6">Per Progetti Marketing</h2>
          <form onSubmit={handleMarketingSubmit} className="space-y-6">
            <div>
              <label htmlFor="marketing-nome" className="block text-sm font-medium text-gray-700 mb-1">
                Nome
              </label>
              <input
                type="text"
                id="marketing-nome"
                className="input input-marketing"
                placeholder="Il tuo nome"
                value={marketingForm.nome}
                onChange={(e) => setMarketingForm({ ...marketingForm, nome: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="marketing-email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="marketing-email"
                className="input input-marketing"
                placeholder="La tua email"
                value={marketingForm.email}
                onChange={(e) => setMarketingForm({ ...marketingForm, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="marketing-messaggio" className="block text-sm font-medium text-gray-700 mb-1">
                Messaggio
              </label>
              <textarea
                id="marketing-messaggio"
                className="input input-marketing min-h-[150px]"
                placeholder="Descrivi il tuo progetto di marketing"
                value={marketingForm.messaggio}
                onChange={(e) => setMarketingForm({ ...marketingForm, messaggio: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="w-full btn bg-[#4CAF50] text-white hover:bg-opacity-90">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Invia Richiesta
            </button>
          </form>
        </motion.div>

        {/* Coding Form */}
        <motion.div
          className="card card-coding"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-[#6B46C1] mb-6">Per Progetti Coding</h2>
          <form onSubmit={handleCodingSubmit} className="space-y-6">
            <div>
              <label htmlFor="coding-nome" className="block text-sm font-medium text-gray-700 mb-1">
                Nome
              </label>
              <input
                type="text"
                id="coding-nome"
                className="input input-coding"
                placeholder="Il tuo nome"
                value={codingForm.nome}
                onChange={(e) => setCodingForm({ ...codingForm, nome: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="coding-email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="coding-email"
                className="input input-coding"
                placeholder="La tua email"
                value={codingForm.email}
                onChange={(e) => setCodingForm({ ...codingForm, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="coding-messaggio" className="block text-sm font-medium text-gray-700 mb-1">
                Messaggio
              </label>
              <textarea
                id="coding-messaggio"
                className="input input-coding min-h-[150px]"
                placeholder="Descrivi il tuo progetto di sviluppo"
                value={codingForm.messaggio}
                onChange={(e) => setCodingForm({ ...codingForm, messaggio: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="w-full btn bg-[#6B46C1] text-white hover:bg-opacity-90">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Invia Richiesta
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
} 