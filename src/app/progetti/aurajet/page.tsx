'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import './preview.css';

const AurajetPage = () => {
  type TabType = 'html' | 'css';
  const [activeTab, setActiveTab] = React.useState<TabType>('html');

  const codeSnippets: Record<TabType, string> = {
    html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/remixicon@3.4.0/fonts/remixicon.css"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
    <title>Titolo ottimizzato seo</title>
  </head>
  <body>
    <nav>
      <div class="nav__logo">Aura Jet</div> 
      <ul class="nav__links">
        <li class="link"><a href="#">Home</a></li>
        <li class="link"><a href="#">About</a></li>
        <li class="link"><a href="#">Offers</a></li>
        <li class="link"><a href="#">Seats</a></li>
        <li class="link"><a href="#">Destinations</a></li>
      </ul>
      <button class="btn">Contact</button>
    </nav>
    <header class="section__container header__container">
      <h1 class="section__header">Find And Book<br />A Great Experience</h1>
      <img src="images/header.jpg" alt="header" />
    </header>

    <section class="section__container booking__container">
      <form>
        <div class="form__group">
          <span><i class="ri-map-pin-line"></i></span>
          <div class="input__content">
            <div class="input__group">
              <input type="text" />
              <label>Location</label>
            </div>
            <p>Where are you going?</p>
          </div>
        </div>
        <div class="form__group">
          <span><i class="ri-user-3-line"></i></span>
          <div class="input__content">
            <div class="input__group">
              <input type="number" />
              <label>Travellers</label>
            </div>
            <p>Add guests</p>
          </div>
        </div>
        <div class="form__group">
          <span><i class="ri-calendar-line"></i></span>
          <div class="input__content">
            <div class="input__group">
              <input type="text" />
              <label>Departure</label>
            </div>
            <p>Add date</p>
          </div>
        </div>
        <div class="form__group">
          <span><i class="ri-calendar-line"></i></span>
          <div class="input__content">
            <div class="input__group">
              <input type="text" />
              <label>Return</label>
            </div>
            <p>Add date</p>
          </div>
        </div>
        <button class="btn"><i class="ri-search-line"></i></button>
      </form>
    </section>

    <section class="section__container lounge__container">
      <div class="lounge__image">
        <img src="images/lounge-1.jpg" alt="lounge" />
        <img src="images/lounge-2.jpg" alt="lounge" />
      </div>
      <div class="lounge__content">
        <h2 class="section__header">Unaccompanied Minor Lounge</h2>
        <div class="lounge__grid">
          <div class="lounge__details">
            <h4>Experience Tranquility</h4>
            <p>
              Serenity Haven offers a tranquil escape, featuring comfortable
              seating, calming ambiance, and attentive service.
            </p>
          </div>
          <div class="lounge__details">
            <h4>Elevate Your Experience</h4>
            <p>
              Designed for discerning travelers, this exclusive lounge offers
              premium amenities, assistance, and private workspaces.
            </p>
          </div>
          <div class="lounge__details">
            <h4>A Welcoming Space</h4>
            <p>
              Creating a family-friendly atmosphere, The Family Zone is the
              perfect haven for parents and children.
            </p>
          </div>
          <div class="lounge__details">
            <h4>A Culinary Delight</h4>
            <p>
              Immerse yourself in a world of flavors, offering international
              cuisines, gourmet dishes, and carefully curated beverages.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section__container travellers__container">
      <h2 class="section__header">Best travellers of the month</h2>
      <div class="travellers__grid">
        <div class="travellers__card">
          <img src="images/traveller-1.jpg" alt="traveller" />
          <div class="travellers__card__content">
            <img src="images/ludo.jpeg" alt="client" />
            <h4>Ludovic De Maso</h4>
            <p>Dubai</p>
          </div>
        </div>
        <div class="travellers__card">
          <img src="images/traveller-2.jpg" alt="traveller" />
          <div class="travellers__card__content">
            <img src="images/paolo.jpeg" alt="client" />
            <h4>Paolo Baroni</h4>
            <p>Paris</p>
          </div>
        </div>
        <div class="travellers__card">
          <img src="images/traveller-3.jpg" alt="traveller" />
          <div class="travellers__card__content">
            <img src="images/io.jpeg" alt="client" />
            <h4>Francesco Caro</h4>
            <p>Singapore</p>
          </div>
        </div>
        <div class="travellers__card">
          <img src="images/traveller-4.jpg" alt="traveller" />
          <div class="travellers__card__content">
            <img src="images/bello.jpeg" alt="client" />
            <h4>Gabriele Belloni</h4>
            <p>Malaysia</p>
          </div>
        </div>
      </div>
    </section>

    {/* Design System */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Design System</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Palette Colori</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="h-20 rounded-lg bg-[#3d5cb8] mb-2"></div>
                <p className="text-sm font-medium">Primario</p>
                <p className="text-xs text-gray-500">#3d5cb8</p>
              </div>
              <div>
                <div className="h-20 rounded-lg bg-[#334c99] mb-2"></div>
                <p className="text-sm font-medium">Primario Dark</p>
                <p className="text-xs text-gray-500">#334c99</p>
              </div>
              <div>
                <div className="h-20 rounded-lg bg-[#0f172a] mb-2"></div>
                <p className="text-sm font-medium">Testo Scuro</p>
                <p className="text-xs text-gray-500">#0f172a</p>
              </div>
              <div>
                <div className="h-20 rounded-lg bg-[#64748b] mb-2"></div>
                <p className="text-sm font-medium">Testo Chiaro</p>
                <p className="text-xs text-gray-500">#64748b</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700 text-sm">
              La palette utilizza tonalità di blu per trasmettere affidabilità e professionalità, con varianti più chiare e scure per creare gerarchia visiva.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Typography</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-3xl font-bold text-gray-800">Titolo Principale</h4>
                <p className="text-sm text-gray-500">Poppins Bold, 2.5rem</p>
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-gray-800">Sottotitolo</h4>
                <p className="text-sm text-gray-500">Poppins SemiBold, 1.5rem</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800">Titolo Sezione</h4>
                <p className="text-sm text-gray-500">Poppins Medium, 1.2rem</p>
              </div>
              <div>
                <p className="text-base text-gray-700">Testo del paragrafo principale con dimensione standard.</p>
                <p className="text-sm text-gray-500">Poppins Regular, 1rem</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700 text-sm">
              Il sistema tipografico utilizza Poppins per tutti gli elementi, garantendo coerenza e leggibilità su tutti i dispositivi.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Componenti UI</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="bg-gray-100 rounded-lg p-4 mb-2">
                  <button className="btn w-full">Prenota Ora</button>
                </div>
                <p className="text-sm text-center text-gray-700">Pulsante Primario</p>
              </div>
              <div>
                <div className="bg-gray-100 rounded-lg p-4 mb-2">
                  <div className="form__group">
                    <span><i className="ri-map-pin-line text-[#3d5cb8]"></i></span>
                    <div className="input__content">
                      <input type="text" placeholder="Location" className="w-full px-3 py-2 border border-gray-300 rounded" />
                    </div>
                  </div>
                </div>
                <p className="text-sm text-center text-gray-700">Campo Input</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700">
              I componenti UI sono stati progettati per essere intuitivi e coerenti in tutto il sito, con particolare attenzione all&apos;accessibilità e al feedback visivo.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Spaziature</h3>
            <div className="space-y-4">
              <div>
                <div className="h-8 bg-blue-100 rounded mb-1"></div>
                <p className="text-sm text-gray-600">Container Padding: 1rem</p>
              </div>
              <div>
                <div className="h-8 bg-blue-200 rounded mb-1"></div>
                <p className="text-sm text-gray-600">Section Margin: 2rem</p>
              </div>
              <div>
                <div className="h-8 bg-blue-300 rounded mb-1"></div>
                <p className="text-sm text-gray-600">Component Gap: 1rem</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700 text-sm">
              Sistema di spaziatura consistente per mantenere armonia visiva e ritmo nella composizione.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Preview del Sito Web */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Preview del Sito che ho Costruito</h2>
        <div className="rounded-lg overflow-hidden shadow-xl">
          <iframe 
            src="https://fcaro05.github.io/Aurajet.com/"
            width="100%"
            height="600"
            style={{ border: 'none' }}
            title="Aurajet Website Preview"
          />
        </div>
      </div>
    </section>

    {/* Conclusioni */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Conclusioni</h2>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Riepilogo del Progetto</h3>
          <p className="text-gray-700 mb-4">
            Questo case study ha illustrato lo sviluppo di un sito web moderno per Aurajet utilizzando tecnologie web standard. Il progetto dimostra come sia possibile creare un&apos;esperienza utente di alta qualità utilizzando HTML, CSS e JavaScript vanilla, senza dipendere da framework complessi.
          </p>
          <p className="text-gray-700 mb-4">
            L&apos;attenzione ai dettagli di design, accessibilità e performance ha portato a un prodotto finale che soddisfa gli standard moderni del web e offre un&apos;esperienza utente ottimale su tutti i dispositivi.
          </p>
          <p className="text-gray-700">
            Le tecniche e le best practices illustrate in questo case study possono essere applicate a una vasta gamma di progetti web, indipendentemente dal settore o dalle dimensioni.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Punti Chiave</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="ri-check-line text-green-500 mt-1 mr-3"></i>
                <div>
                  <span className="font-medium">Design System Coerente</span>
                  <p className="text-gray-600 text-sm">Palette colori, tipografia e componenti UI standardizzati</p>
                </div>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-green-500 mt-1 mr-3"></i>
                <div>
                  <span className="font-medium">Performance Ottimizzata</span>
                  <p className="text-gray-600 text-sm">Caricamento veloce e ottimizzazione delle risorse</p>
                </div>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-green-500 mt-1 mr-3"></i>
                <div>
                  <span className="font-medium">Accessibilità</span>
                  <p className="text-gray-600 text-sm">Conformità WCAG 2.1 AA e navigazione intuitiva</p>
                </div>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-green-500 mt-1 mr-3"></i>
                <div>
                  <span className="font-medium">Codice Pulito</span>
                  <p className="text-gray-600 text-sm">Struttura modulare e manutenibile</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Sviluppi Futuri</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Integrazione API di Prenotazione</h4>
                <p className="text-sm text-gray-700">
                  Implementazione di un sistema di prenotazione real-time con gestione delle disponibilità e dei prezzi dinamici.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Area Personale Utenti</h4>
                <p className="text-sm text-gray-700">
                  Sviluppo di un&apos;area riservata per la gestione delle prenotazioni e delle preferenze personali.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Sistema di Notifiche</h4>
                <p className="text-sm text-gray-700">
                  Implementazione di notifiche push per aggiornamenti su voli e offerte speciali.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
</html>`,
    css: `@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap");

:root {
  --primary-color: #3d5cb8;
  --primary-color-dark: #334c99;
  --text-dark: #0f172a;
  --text-light: #64748b;
  --extra-light: #f1f5f9;
  --white: #ffffff;
  --max-width: 1200px;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.section__container {
  max-width: var(--max-width);
  margin: auto;
  padding: 5rem 1rem;
}

.section__header {
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 3rem;
  color: var(--text-dark);
}

.btn {
  padding: 0.75rem 2rem;
  outline: none;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  color: var(--white);
  background-color: var(--primary-color);
  border-radius: 2rem;
  cursor: pointer;
  transition: 0.3s;
}

.btn:hover {
  background-color: var(--primary-color-dark);
}

a {
  text-decoration: none;
}

img {
  width: 100%;
  display: flex;
}

body {
  font-family: "Poppins", sans-serif;
}

nav {
  max-width: var(--max-width);
  margin: auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.nav__logo {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-dark);
}

.nav__links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.link a {
  font-weight: 500;
  color: var(--text-light);
  transition: 0.3s;
}

.link a:hover {
  color: var(--text-dark);
}

.header__container .section__header {
  text-align: center;
  font-size: 3rem;
  line-height: 4rem;
}

.booking__container {
  border-radius: 2rem;
  border: 1px solid var(--extra-light);
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);
}

.booking__nav {
  max-width: 600px;
  margin: auto;
  display: flex;
  align-items: center;
  background-color: var(--extra-light);
  border-radius: 5px;
}

.booking__nav span {
  flex: 1;
  padding: 1rem 2rem;
  font-weight: 500;
  color: var(--text-light);
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
}

.booking__nav span:nth-child(2) {
  color: var(--white);
  background-color: var(--primary-color);
}

.booking__container form {
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr) auto;
  gap: 1rem;
}

.booking__container .input__content {
  width: 100%;
}

.booking__container .form__group {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.booking__container .form__group span {
  padding: 10px;
  font-size: 1.5rem;
  color: var(--text-dark);
  background-color: var(--extra-light);
  border-radius: 1rem;
}

.booking__container .input__group {
  width: 100%;
  position: relative;
}

.booking__container label {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--text-dark);
  pointer-events: none;
  transition: 0.3s;
}

.booking__container input {
  width: 100%;
  padding: 10px 0;
  font-size: 1rem;
  outline: none;
  border: none;
  border-bottom: 1px solid var(--primary-color);
  color: var(--text-dark);
}

.booking__container input:focus ~ label {
  font-size: 0.8rem;
  top: 0;
}

.booking__container .form__group p {
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: var(--text-light);
}

.booking__container .btn {
  padding: 1rem;
  font-size: 1.5rem;
}

.plan__container .subheader {
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 600;
  color: var(--text-dark);
  letter-spacing: 5px;
}

.plan__container .section__header {
  text-align: center;
  font-size: 3rem;
  line-height: 4rem;
  margin-bottom: 1rem;
}

.plan__container .description {
  text-align: center;
  color: var(--text-light);
}

.plan__grid {
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.plan__content .number {
  display: inline-block;
  padding: 5px 15px;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--white);
  background-color: var(--primary-color);
  border-radius: 2rem;
}

.plan__content .number:nth-child(4) {
  background-color: #e98b6d;
}

.plan__content .number:nth-child(7) {
  background-color: #ffcca3;
}

.plan__content h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
}

.plan__content p {
  margin-bottom: 2rem;
  color: var(--text-light);
}

.plan__image {
  position: relative;
}

.plan__image img {
  position: absolute;
  width: 16rem;
  height: 22.5rem;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
}

.plan__image img:nth-child(1) {
  top: 0;
  right: 0;
}

.plan__image img:nth-child(2) {
  top: 10rem;
  right: 16rem;
}

.plan__image img:nth-child(3) {
  top: 20rem;
  right: 0;
}

.memories {
  background-color: var(--extra-light);
}

.memories__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.memories__header .section__header {
  max-width: 50rem;
}

.memories__header .view__all {
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-dark);
  background: transparent;
  border: 1px solid var(--text-light);
  border-radius: 2rem;
  cursor: pointer;
}

.memories__grid {
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;
}

.memories__card {
  padding: 3rem 2rem;
  text-align: center;
  border-radius: 5rem;
  background-color: var(--white);
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
}

.memories__card span {
  display: inline-block;
  padding: 1rem;
  font-size: 3rem;
  color: var(--white);
  background-color: var(--primary-color);
  border-radius: 2rem;
}

.memories__card:nth-child(2) span {
  background-color: #e98b6d;
}

.memories__card:nth-child(3) span {
  background-color: #ffcca3;
}

.memories__card h4 {
  margin: 2rem 0 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-dark);
}

.memories__card p {
  color: var(--text-light);
  line-height: 1.75rem;
}

.lounge__container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.lounge__grid {
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.lounge__image {
  position: relative;
}

.lounge__image img {
  position: absolute;
  width: 17.5rem;
  height: 25rem;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
}

.lounge__image img:nth-child(1) {
  top: 0;
  left: 5rem;
}

.lounge__image img:nth-child(2) {
  bottom: 0;
  right: 5rem;
}

.lounge__details h4 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-dark);
}

.lounge__details p {
  color: var(--text-light);
}

.travellers__grid {
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.travellers__card {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
}

.travellers__card__content {
  position: relative;
  padding: 1rem;
  text-align: center;
}

.travellers__card__content img {
  position: absolute;
  top: -30%;
  left: 50%;
  transform: translateX(-50%);
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  border: 5px solid var(--white);
}

.travellers__card__content h4 {
  margin-top: 2.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-dark);
}

.travellers__card__content p {
  color: var(--text-light);
}

.subscribe {
  background-color: var(--primary-color);
}

.subscribe__container {
  text-align: center;
}

.subscribe__form {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 40rem;
  margin-inline: auto;
}

.subscribe__form input {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  outline: none;
  border: none;
  border-radius: 2rem;
}

.footer {
  background-color: var(--text-dark);
}

.footer__container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.footer__col h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--white);
}

.footer__col h4 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--white);
}

.footer__col p {
  margin-bottom: 1rem;
  color: var(--extra-light);
  cursor: pointer;
  transition: 0.3s;
}

.footer__col p:hover {
  color: var(--white);
}

.footer__bar {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border-top: 1px solid var(--text-light);
}

.footer__bar p {
  font-size: 0.9rem;
  color: var(--extra-light);
}

.socials {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.socials span {
  font-size: 0.9rem;
  color: var(--extra-light);
  cursor: pointer;
  transition: 0.3s;
}

@media (width < 1200px) {
  .section__container.header__container,
  .section__container.booking__container {
    margin-inline: 1rem;
  }

  .memories__grid {
    gap: 3rem;
  }
}

@media (width < 900px) {
  nav .btn {
    display: none;
  }

  .header__container img {
    min-height: 500px;
    object-position: right;
  }

  .booking__container form {
    grid-template-columns: repeat(2, 1fr);
  }

  .plan__grid {
    grid-template-columns: repeat(1, 1fr);
  }

  .plan__image {
    min-height: 600px;
    grid-row: 1;
  }

  .memories__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .lounge__container {
    grid-template-columns: repeat(1, 1fr);
  }

  .lounge__image {
    min-height: 600px;
    grid-row: 1;
  }

  .travellers__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer__container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (width < 600px) {
  .nav__links {
    display: none;
  }

  .booking__nav span {
    padding: 1rem 0.5rem;
  }

  .booking__container form {
    grid-template-columns: repeat(1, 1fr);
  }

  .memories__header {
    flex-direction: column;
  }

  .memories__grid {
    grid-template-columns: repeat(1, 1fr);
  }

  .lounge__grid {
    grid-template-columns: repeat(1, 1fr);
  }

  .travellers__grid {
    grid-template-columns: repeat(1, 1fr);
  }

  .footer__container {
    grid-template-columns: repeat(1, 1fr);
  }

  .footer__bar {
    flex-direction: column;
    text-align: center;
  }
}

.bg-gray-900.rounded-lg.overflow-auto.max-h-[500px] {
  max-height: 500px;
}

.text-gray-300.p-4.text-sm.leading-relaxed {
  padding: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #d1d5db;
}

.text-gray-300.p-4.text-sm.leading-relaxed code {
  color: #d1d5db;
}

.text-gray-300.p-4.text-sm.leading-relaxed code:nth-child(1) {
  color: #3d5cb8;
}

.text-gray-300.p-4.text-sm.leading-relaxed code:nth-child(2) {
  color: #3d5cb8;
}

.text-gray-300.p-4.text-sm.leading-relaxed code:nth-child(3) {
  color: #3d5cb8;
}

.text-gray-300.p-4.text-sm.leading-relaxed code:nth-child(4) {
  color: #3d5cb8;
}

.text-gray-300.p-4.text-sm.leading-relaxed code:nth-child(5) {
  color: #3d5cb8;
}

.text-gray-300.p-4.text-sm.leading-relaxed code:nth-child(6) {
  color: #3d5cb8;
}

.text-gray-300.p-4.text-sm.leading-relaxed code:nth-child(7) {
  color: #3d5cb8;
}

.text-gray-300.p-4.text-sm.leading-relaxed code:nth-child(8) {
  color: #3d5cb8;
}

.text-gray-300.p-4.text-sm.leading-relaxed code:nth-child(9) {
  color: #3d5cb8;
}

.text-gray-300.p-4.text-sm.leading-relaxed code:nth-child(10) {
  color: #3d5cb8;
}

.text-gray-300.p-4.text-sm.leading-relaxed code:nth-child(11) {
  color: #3d5cb8;
}

.text-gray-300.p-4.text-sm.leading-relaxed code:nth-child(12) {
  color: #3d5cb8;
}

.text-gray-300.p-4.text-sm.leading-relaxed code:nth-child(13) {
  color: #3d5cb8;
}

.text-gray-300.p-4.text-sm.leading-relaxed code:nth-child(14) {
  color: #3d5cb8;
}

.text-gray-300.p-4.text-sm.leading-relaxed code:nth-child(15) {
  color: #3d5cb8;
}

.text-gray-300.p-4.text-sm.leading-relaxed code:nth-child(16) {
  color: #3d5cb8;
}

.text-gray-300.p-4.text-sm.leading-relaxed code:nth-child(17) {
  color: #3d5cb8;
}

.text-gray-300.p-4.text-sm.leading-relaxed code:nth-child(18) {
  color: #3d5cb8;
}

.text-gray-300.p-4.text-sm.leading-relaxed code:nth-child(19) {
  color: #3d5cb8;
}

.text-gray-300.p-4.text-sm.leading-relaxed code:nth-child(20) {
  color: #3d5cb8;
}

.text-gray-300.p-4.text-sm.leading-relaxed code:nth-child(21) {
  color: #3d5cb8;
}

.text-gray-300.p-4.text-sm.leading-relaxed code:nth-child(22) {
  color: #3d5cb8;
}

.text-gray-300.p-4.text-sm.leading-relaxed code:nth-child(23) {
  color: #3d5cb8;
}

.text-gray-300.p-4.text-sm.leading-relaxed code:nth-child(24) {
/* Altri stili */`
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-64px)] flex items-center overflow-hidden py-16">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat brightness-50"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80")'
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-12 gap-8 items-center">
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
                  Case Study – Web Development
                </motion.span>
                
                <motion.h1 
                  className="text-6xl font-bold text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Aurajet Airlines
                </motion.h1>

                <motion.p 
                  className="text-xl text-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Sviluppo di un sito web moderno per una compagnia aerea utilizzando HTML, CSS e JavaScript vanilla
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
                    2024
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm border border-white/20">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12v7m0 0l3-3m-3 3l-3-3" />
                    </svg>
                    Web Development
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm border border-white/20">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Performance
                  </span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="md:col-span-5 pl-16"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative aspect-[3/4] max-h-[600px] rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm p-8 border border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80"
                  alt="Aurajet Preview"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>

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

      {/* Introduzione */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Introduzione al Progetto</h2>
              <p className="text-gray-700 mb-4">
                Questo case study illustra lo sviluppo di un sito web moderno per Aurajet, una compagnia aerea italiana. Il progetto è stato realizzato utilizzando tecnologie web standard come HTML5, CSS3 e JavaScript, con un focus particolare sulla user experience e le performance.
              </p>
              <p className="text-gray-700 mb-4">
                L&apos;obiettivo principale era creare un&apos;interfaccia utente intuitiva che permettesse ai visitatori di esplorare destinazioni, confrontare tariffe e prenotare voli in modo semplice e veloce. Il design segue i principi dell&apos;UI/UX moderna con particolare attenzione all&apos;accessibilità e alla velocità di caricamento.
              </p>
              <p className="text-gray-700">
                Il sito è stato sviluppato seguendo le best practices di organizzazione del codice, con una chiara separazione tra struttura (HTML), presentazione (CSS) e comportamento (JavaScript).
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Dati del Progetto</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="ri-calendar-line text-blue-600 mt-1 mr-3"></i>
                  <div>
                    <span className="font-medium">Durata:</span> 4 settimane
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-code-line text-blue-600 mt-1 mr-3"></i>
                  <div>
                    <span className="font-medium">Tecnologie:</span> HTML5, CSS3, JavaScript (ES6+)
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-smartphone-line text-blue-600 mt-1 mr-3"></i>
                  <div>
                    <span className="font-medium">Approccio:</span> Mobile-first, Responsive
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-speed-line text-blue-600 mt-1 mr-3"></i>
                  <div>
                    <span className="font-medium">Performance:</span> 95/100 Lighthouse
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Struttura del Codice */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Struttura del Codice</h2>
          
          <p className="text-gray-700 mb-6">
            Il sito è stato sviluppato seguendo le best practices di organizzazione del codice, con una chiara separazione tra struttura (HTML), presentazione (CSS) e comportamento (JavaScript). Questo approccio facilita la manutenzione e l&apos;aggiornamento del sito nel tempo.
          </p>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
            <div className="border-b border-gray-200">
              <div className="flex">
                <button 
                  className={`px-6 py-3 font-medium text-sm focus:outline-none ${activeTab === 'html' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('html')}
                >
                  HTML
                </button>
                <button 
                  className={`px-6 py-3 font-medium text-sm focus:outline-none ${activeTab === 'css' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('css')}
                >
                  CSS
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {activeTab === 'html' && 'Struttura HTML della Homepage'}
                  {activeTab === 'css' && 'Stili CSS Principali'}
                </h3>
                <button className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 py-1 px-3 rounded flex items-center">
                  <i className="ri-file-copy-line mr-2"></i> Copia Codice
                </button>
              </div>
              
              <div className="bg-gray-900 rounded-lg overflow-auto max-h-[700px]">
                <pre className="text-gray-300 p-4 text-sm leading-relaxed overflow-x-auto">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>
              
              <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 text-blue-700">
                {activeTab === 'html' && (
                  <p>
                    <strong>Nota:</strong> La struttura HTML utilizza tag semantici come <code>&lt;nav&gt;</code>, <code>&lt;header&gt;</code> e <code>&lt;section&gt;</code> per migliorare l&apos;accessibilità e il SEO. L&apos;organizzazione in container e componenti facilita il layout responsive.
                  </p>
                )}
                {activeTab === 'css' && (
                  <p>
                    <strong>Nota:</strong> Gli stili CSS seguono una metodologia modulare con classi riutilizzabili. L&apos;uso di variabili CSS personalizzate (custom properties) permette una facile personalizzazione dei colori e delle dimensioni.
                  </p>
                )}
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Organizzazione dei File</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm text-gray-700">
{`📁 aurajet-website/
├── 📄 index.html
├── 📁 css/
│   ├── 📄 styles.css
│   └── 📄 responsive.css
├── 📁 js/
│   ├── 📄 main.js
│   └── 📄 booking.js
└── 📁 assets/
    ├── 📁 images/
    └── 📁 fonts/`}
                </pre>
              </div>
              <p className="mt-4 text-gray-700">
                La struttura dei file è organizzata in modo da separare chiaramente le diverse responsabilità e facilitare la manutenzione. I file CSS e JavaScript sono suddivisi per funzionalità.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Principi di Sviluppo</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="ri-check-line text-green-500 mt-1 mr-3"></i>
                  <div>
                    <span className="font-medium">Separazione delle Responsabilità</span>
                    <p className="text-gray-600 text-sm">HTML per struttura, CSS per stile, JavaScript per comportamento</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-green-500 mt-1 mr-3"></i>
                  <div>
                    <span className="font-medium">Approccio Component-Based</span>
                    <p className="text-gray-600 text-sm">Componenti modulari e riutilizzabili</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-green-500 mt-1 mr-3"></i>
                  <div>
                    <span className="font-medium">Progressive Enhancement</span>
                    <p className="text-gray-600 text-sm">Funzionalità base accessibili a tutti, miglioramenti per browser moderni</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-green-500 mt-1 mr-3"></i>
                  <div>
                    <span className="font-medium">Accessibilità</span>
                    <p className="text-gray-600 text-sm">Conformità WCAG 2.1 AA per garantire l&apos;accesso a tutti gli utenti</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design System */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Design System</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Palette Colori</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="h-20 rounded-lg bg-[#3d5cb8] mb-2"></div>
                  <p className="text-sm font-medium">Primario</p>
                  <p className="text-xs text-gray-500">#3d5cb8</p>
                </div>
                <div>
                  <div className="h-20 rounded-lg bg-[#334c99] mb-2"></div>
                  <p className="text-sm font-medium">Primario Dark</p>
                  <p className="text-xs text-gray-500">#334c99</p>
                </div>
                <div>
                  <div className="h-20 rounded-lg bg-[#0f172a] mb-2"></div>
                  <p className="text-sm font-medium">Testo Scuro</p>
                  <p className="text-xs text-gray-500">#0f172a</p>
                </div>
                <div>
                  <div className="h-20 rounded-lg bg-[#64748b] mb-2"></div>
                  <p className="text-sm font-medium">Testo Chiaro</p>
                  <p className="text-xs text-gray-500">#64748b</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700 text-sm">
                La palette utilizza tonalità di blu per trasmettere affidabilità e professionalità, con varianti più chiare e scure per creare gerarchia visiva.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Typography</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-3xl font-bold text-gray-800">Titolo Principale</h4>
                  <p className="text-sm text-gray-500">Poppins Bold, 2.5rem</p>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-gray-800">Sottotitolo</h4>
                  <p className="text-sm text-gray-500">Poppins SemiBold, 1.5rem</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Titolo Sezione</h4>
                  <p className="text-sm text-gray-500">Poppins Medium, 1.2rem</p>
                </div>
                <div>
                  <p className="text-base text-gray-700">Testo del paragrafo principale con dimensione standard.</p>
                  <p className="text-sm text-gray-500">Poppins Regular, 1rem</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700 text-sm">
                Il sistema tipografico utilizza Poppins per tutti gli elementi, garantendo coerenza e leggibilità su tutti i dispositivi.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Componenti UI</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="bg-gray-100 rounded-lg p-4 mb-2">
                    <button className="btn w-full">Prenota Ora</button>
                  </div>
                  <p className="text-sm text-center text-gray-700">Pulsante Primario</p>
                </div>
                <div>
                  <div className="bg-gray-100 rounded-lg p-4 mb-2">
                    <div className="form__group">
                      <span><i className="ri-map-pin-line text-[#3d5cb8]"></i></span>
                      <div className="input__content">
                        <input type="text" placeholder="Location" className="w-full px-3 py-2 border border-gray-300 rounded" />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-center text-gray-700">Campo Input</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                I componenti UI sono stati progettati per essere intuitivi e coerenti in tutto il sito, con particolare attenzione all&apos;accessibilità e al feedback visivo.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Spaziature</h3>
              <div className="space-y-4">
                <div>
                  <div className="h-8 bg-blue-100 rounded mb-1"></div>
                  <p className="text-sm text-gray-600">Container Padding: 1rem</p>
                </div>
                <div>
                  <div className="h-8 bg-blue-200 rounded mb-1"></div>
                  <p className="text-sm text-gray-600">Section Margin: 2rem</p>
                </div>
                <div>
                  <div className="h-8 bg-blue-300 rounded mb-1"></div>
                  <p className="text-sm text-gray-600">Component Gap: 1rem</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700 text-sm">
                Sistema di spaziatura consistente per mantenere armonia visiva e ritmo nella composizione.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preview del Sito Web */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Preview del Sito che ho Costruito</h2>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <iframe 
              src="https://fcaro05.github.io/Aurajet.com/"
              width="100%"
              height="600"
              style={{ border: 'none' }}
              title="Aurajet Website Preview"
            />
          </div>
        </div>
      </section>

      {/* Conclusioni */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Conclusioni</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Riepilogo del Progetto</h3>
            <p className="text-gray-700 mb-4">
              Questo case study ha illustrato lo sviluppo di un sito web moderno per Aurajet utilizzando tecnologie web standard. Il progetto dimostra come sia possibile creare un&apos;esperienza utente di alta qualità utilizzando HTML, CSS e JavaScript vanilla, senza dipendere da framework complessi.
            </p>
            <p className="text-gray-700 mb-4">
              L&apos;attenzione ai dettagli di design, accessibilità e performance ha portato a un prodotto finale che soddisfa gli standard moderni del web e offre un&apos;esperienza utente ottimale su tutti i dispositivi.
            </p>
            <p className="text-gray-700">
              Le tecniche e le best practices illustrate in questo case study possono essere applicate a una vasta gamma di progetti web, indipendentemente dal settore o dalle dimensioni.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Punti Chiave</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="ri-check-line text-green-500 mt-1 mr-3"></i>
                  <div>
                    <span className="font-medium">Design System Coerente</span>
                    <p className="text-gray-600 text-sm">Palette colori, tipografia e componenti UI standardizzati</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-green-500 mt-1 mr-3"></i>
                  <div>
                    <span className="font-medium">Performance Ottimizzata</span>
                    <p className="text-gray-600 text-sm">Caricamento veloce e ottimizzazione delle risorse</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-green-500 mt-1 mr-3"></i>
                  <div>
                    <span className="font-medium">Accessibilità</span>
                    <p className="text-gray-600 text-sm">Conformità WCAG 2.1 AA e navigazione intuitiva</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-green-500 mt-1 mr-3"></i>
                  <div>
                    <span className="font-medium">Codice Pulito</span>
                    <p className="text-gray-600 text-sm">Struttura modulare e manutenibile</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Sviluppi Futuri</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Integrazione API di Prenotazione</h4>
                  <p className="text-sm text-gray-700">
                    Implementazione di un sistema di prenotazione real-time con gestione delle disponibilità e dei prezzi dinamici.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Area Personale Utenti</h4>
                  <p className="text-sm text-gray-700">
                    Sviluppo di un&apos;area riservata per la gestione delle prenotazioni e delle preferenze personali.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Sistema di Notifiche</h4>
                  <p className="text-sm text-gray-700">
                    Implementazione di notifiche push per aggiornamenti su voli e offerte speciali.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AurajetPage; 