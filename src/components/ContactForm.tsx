'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  nome: string;
  email: string;
  messaggio: string;
}

const ContactForm = () => {
  const [marketingForm, setMarketingForm] = useState<FormData>({
    nome: '',
    email: '',
    messaggio: ''
  });

  const handleMarketingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Gestione invio form marketing
    console.log('Marketing form submitted:', marketingForm);
  };

  const handleMarketingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMarketingForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contatti" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Contattami</h2>
        <div className="flex justify-center">
          {/* Marketing Form */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8 max-w-xl w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-marketing-primary mb-6"><span className="text-gray-700">Per Progetti </span>Marketing <span className="text-gray-700">& </span> <span className='text-2xl font-bold text-coding-primary mb-8'>Coding</span></h3>
            <form onSubmit={handleMarketingSubmit}>
              <div className="mb-6">
                <label htmlFor="marketing-nome" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="marketing-nome"
                  name="nome"
                  value={marketingForm.nome}
                  onChange={handleMarketingChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-marketing-primary focus:border-transparent"
                  placeholder="Il tuo nome"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="marketing-email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="marketing-email"
                  name="email"
                  value={marketingForm.email}
                  onChange={handleMarketingChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-marketing-primary focus:border-transparent"
                  placeholder="La tua email"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="marketing-messaggio" className="block text-sm font-medium text-gray-700 mb-2">
                  Messaggio
                </label>
                <textarea
                  id="marketing-messaggio"
                  name="messaggio"
                  value={marketingForm.messaggio}
                  onChange={handleMarketingChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-marketing-primary focus:border-transparent"
                  placeholder="Descrivi il tuo progetto di marketing"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-marketing-primary to-yellow-400 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Invia Richiesta
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 