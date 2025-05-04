// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from 'react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('html');

  const codeSnippets = {
    html: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AeroViaggi - Vola con Noi</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="header">
    <div class="container">
      <div class="logo">
        <img src="logo.png" alt="AeroViaggi Logo">
      </div>
      <nav class="main-nav">
        <ul>
          <li><a href="#destinazioni">Destinazioni</a></li>
          <li><a href="#offerte">Offerte</a></li>
          <li><a href="#servizi">Servizi</a></li>
          <li><a href="#contatti">Contatti</a></li>
        </ul>
      </nav>
      <div class="header-cta">
        <a href="#prenota" class="btn btn-primary">Prenota Ora</a>
      </div>
    </div>
  </header>
  
  <section class="hero">
    <!-- Hero content -->
  </section>
  
  <!-- Altre sezioni -->
</body>
</html>`,
    css: `.header {
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hero {
  height: 80vh;
  background-image: url('hero-bg.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  color: #ffffff;
}

.btn-primary {
  background-color: #0052cc;
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #003d99;
}

/* Media queries per responsive */
@media (max-width: 768px) {
  .header .container {
    flex-direction: column;
    padding: 15px;
  }
}`,
    js: `document.addEventListener('DOMContentLoaded', function() {
  // Inizializzazione del form di prenotazione
  const bookingForm = document.getElementById('booking-form');
  
  bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validazione form
    const departure = document.getElementById('departure').value;
    const arrival = document.getElementById('arrival').value;
    const date = document.getElementById('date').value;
    
    if (!departure || !arrival || !date) {
      showError('Compila tutti i campi richiesti');
      return;
    }
    
    // Invio dati al server
    submitBooking(departure, arrival, date);
  });
  
  // Funzione per mostrare errori
  function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    bookingForm.prepend(errorDiv);
    
    setTimeout(() => {
      errorDiv.remove();
    }, 3000);
  }
  
  // Funzione per inviare dati
  function submitBooking(departure, arrival, date) {
    // Simulazione API call
    console.log('Prenotazione inviata:', {departure, arrival, date});
    // Qui andrebbe la vera chiamata API
  }
});`
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Case Study: Progettazione Sito Web Compagnia Aerea</h1>
          <p className="text-xl mb-8">Un'analisi dettagliata del processo di sviluppo di un sito web moderno per una compagnia aerea utilizzando HTML, CSS e JavaScript</p>
          
          <nav className="bg-white/20 rounded-lg p-2 backdrop-blur-sm">
            <ul className="flex flex-wrap gap-2">
              <li><a href="#introduzione" className="px-4 py-2 rounded-button whitespace-nowrap cursor-pointer hover:bg-white/30 transition">Introduzione</a></li>
              <li><a href="#struttura-codice" className="px-4 py-2 rounded-button whitespace-nowrap cursor-pointer hover:bg-white/30 transition">Struttura del Codice</a></li>
              <li><a href="#design-system" className="px-4 py-2 rounded-button whitespace-nowrap cursor-pointer hover:bg-white/30 transition">Design System</a></li>
              <li><a href="#componenti" className="px-4 py-2 rounded-button whitespace-nowrap cursor-pointer hover:bg-white/30 transition">Componenti</a></li>
              <li><a href="#responsive" className="px-4 py-2 rounded-button whitespace-nowrap cursor-pointer hover:bg-white/30 transition">Implementazione Responsive</a></li>
              <li><a href="#performance" className="px-4 py-2 rounded-button whitespace-nowrap cursor-pointer hover:bg-white/30 transition">Performance</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Sezione Introduttiva */}
        <section id="introduzione" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Introduzione al Progetto</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-gray-700 mb-4">
                Questo case study illustra il processo di progettazione e sviluppo di un sito web moderno per una compagnia aerea italiana. Il progetto è stato realizzato utilizzando tecnologie web standard come HTML5, CSS3 e JavaScript, senza dipendere da framework esterni per garantire prestazioni ottimali e massima compatibilità.
              </p>
              <p className="text-gray-700 mb-4">
                L'obiettivo principale era creare un'interfaccia utente intuitiva che permettesse ai visitatori di esplorare destinazioni, confrontare tariffe e prenotare voli in modo semplice e veloce. Particolare attenzione è stata dedicata all'esperienza mobile, essenziale per il settore dei viaggi dove molte prenotazioni avvengono da dispositivi mobili.
              </p>
              <p className="text-gray-700">
                Il design segue i principi dell'UI/UX moderna con un focus sulla chiarezza visiva, accessibilità e velocità di caricamento, elementi cruciali per ridurre il tasso di abbandono e aumentare le conversioni.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Dati del Progetto</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-calendar-alt text-blue-600 mt-1 mr-3"></i>
                  <div>
                    <span className="font-medium">Durata:</span> 8 settimane
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-tools text-blue-600 mt-1 mr-3"></i>
                  <div>
                    <span className="font-medium">Strumenti:</span> VS Code, Figma, Chrome DevTools
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-code text-blue-600 mt-1 mr-3"></i>
                  <div>
                    <span className="font-medium">Tecnologie:</span> HTML5, CSS3, JavaScript (ES6+)
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-mobile-alt text-blue-600 mt-1 mr-3"></i>
                  <div>
                    <span className="font-medium">Approccio:</span> Mobile-first, Responsive
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-tachometer-alt text-blue-600 mt-1 mr-3"></i>
                  <div>
                    <span className="font-medium">Performance:</span> 95/100 Lighthouse
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-10 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-[400px] bg-gray-100">
              <img 
                src="https://readdy.ai/api/search-image?query=modern%20airline%20website%20homepage%20with%20booking%20form%2C%20hero%20image%20showing%20airplane%20in%20sky%2C%20clean%20interface%20with%20blue%20color%20scheme%2C%20professional%20UI%20design%2C%20high%20quality%203D%20rendering&width=800&height=400&seq=1&orientation=landscape" 
                alt="Anteprima del sito web della compagnia aerea" 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Anteprima del Risultato Finale</h3>
                <p>Homepage del sito web con sistema di prenotazione voli integrato</p>
              </div>
            </div>
          </div>
        </section>

        {/* Struttura del Codice */}
        <section id="struttura-codice" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Struttura del Codice</h2>
          
          <p className="text-gray-700 mb-6">
            Il sito è stato sviluppato seguendo le best practices di organizzazione del codice, con una chiara separazione tra struttura (HTML), presentazione (CSS) e comportamento (JavaScript). Questo approccio facilita la manutenzione e l'aggiornamento del sito nel tempo.
          </p>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
            <div className="border-b border-gray-200">
              <div className="flex">
                <button 
                  className={`px-6 py-3 font-medium text-sm focus:outline-none whitespace-nowrap cursor-pointer ${activeTab === 'html' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('html')}
                >
                  HTML
                </button>
                <button 
                  className={`px-6 py-3 font-medium text-sm focus:outline-none whitespace-nowrap cursor-pointer ${activeTab === 'css' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('css')}
                >
                  CSS
                </button>
                <button 
                  className={`px-6 py-3 font-medium text-sm focus:outline-none whitespace-nowrap cursor-pointer ${activeTab === 'js' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('js')}
                >
                  JavaScript
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {activeTab === 'html' && 'Struttura HTML della Homepage'}
                  {activeTab === 'css' && 'Stili CSS Principali'}
                  {activeTab === 'js' && 'Funzionalità JavaScript'}
                </h3>
                <button className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 py-1 px-3 rounded-button whitespace-nowrap cursor-pointer flex items-center">
                  <i className="far fa-copy mr-2"></i> Copia Codice
                </button>
              </div>
              
              <div className="bg-gray-900 rounded-lg overflow-auto">
                <pre className="text-gray-300 p-4 text-sm leading-relaxed overflow-x-auto">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>
              
              <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 text-blue-700">
                {activeTab === 'html' && (
                  <p>
                    <strong>Nota:</strong> La struttura HTML utilizza tag semantici come <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code> e <code>&lt;section&gt;</code> per migliorare l'accessibilità e il SEO. L'organizzazione in container e componenti facilita il layout responsive.
                  </p>
                )}
                {activeTab === 'css' && (
                  <p>
                    <strong>Nota:</strong> Gli stili CSS seguono una metodologia modulare con classi riutilizzabili. L'uso di Flexbox per il layout principale garantisce allineamenti precisi e adattabilità ai diversi dispositivi.
                  </p>
                )}
                {activeTab === 'js' && (
                  <p>
                    <strong>Nota:</strong> Il JavaScript implementa la validazione del form di prenotazione e gestisce le interazioni utente. L'approccio event-driven mantiene il codice organizzato e facilmente estendibile.
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
{`📁 progetto-aeroviaggi/
├── 📄 index.html
├── 📁 css/
│   ├── 📄 styles.css
│   ├── 📄 normalize.css
│   └── 📄 responsive.css
├── 📁 js/
│   ├── 📄 main.js
│   ├── 📄 booking.js
│   └── 📄 slider.js
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
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <div>
                    <span className="font-medium">Separazione delle Responsabilità</span>
                    <p className="text-gray-600 text-sm">HTML per struttura, CSS per stile, JavaScript per comportamento</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <div>
                    <span className="font-medium">Approccio Component-Based</span>
                    <p className="text-gray-600 text-sm">Componenti modulari e riutilizzabili</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <div>
                    <span className="font-medium">Progressive Enhancement</span>
                    <p className="text-gray-600 text-sm">Funzionalità base accessibili a tutti, miglioramenti per browser moderni</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <div>
                    <span className="font-medium">Accessibilità</span>
                    <p className="text-gray-600 text-sm">Conformità WCAG 2.1 AA per garantire l'accesso a tutti gli utenti</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Design System */}
        <section id="design-system" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Layout e Design System</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Palette Colori</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="h-20 rounded-lg bg-[#0052cc] mb-2"></div>
                  <p className="text-sm font-medium">Primario</p>
                  <p className="text-xs text-gray-500">#0052CC</p>
                </div>
                <div>
                  <div className="h-20 rounded-lg bg-[#00875a] mb-2"></div>
                  <p className="text-sm font-medium">Secondario</p>
                  <p className="text-xs text-gray-500">#00875A</p>
                </div>
                <div>
                  <div className="h-20 rounded-lg bg-[#253858] mb-2"></div>
                  <p className="text-sm font-medium">Testo Principale</p>
                  <p className="text-xs text-gray-500">#253858</p>
                </div>
                <div>
                  <div className="h-20 rounded-lg bg-[#ff5630] mb-2"></div>
                  <p className="text-sm font-medium">Accent/CTA</p>
                  <p className="text-xs text-gray-500">#FF5630</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700 text-sm">
                La palette utilizza il blu come colore primario per trasmettere affidabilità e professionalità, con accenti di verde per sostenibilità e arancione per call-to-action.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Typography</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-3xl font-bold text-gray-800">Titolo Principale</h4>
                  <p className="text-sm text-gray-500">Montserrat Bold, 32px</p>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-gray-800">Sottotitolo</h4>
                  <p className="text-sm text-gray-500">Montserrat SemiBold, 24px</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Titolo Sezione</h4>
                  <p className="text-sm text-gray-500">Montserrat Medium, 18px</p>
                </div>
                <div>
                  <p className="text-base text-gray-700">Testo del paragrafo principale con dimensione standard per la lettura confortevole su tutti i dispositivi.</p>
                  <p className="text-sm text-gray-500">Open Sans Regular, 16px</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700 text-sm">
                Il sistema tipografico combina Montserrat per titoli e Open Sans per il corpo del testo, garantendo leggibilità e gerarchia visiva chiara.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Wireframes e Mockup</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="bg-gray-100 rounded-lg p-2 mb-2">
                    <img 
                      src="https://readdy.ai/api/search-image?query=wireframe%20of%20airline%20website%20homepage%20with%20header%2C%20hero%20section%2C%20search%20form%2C%20and%20featured%20destinations%2C%20clean%20minimalist%20design%2C%20professional%20UI%20mockup%20on%20white%20background&width=400&height=300&seq=2&orientation=landscape" 
                      alt="Wireframe della homepage" 
                      className="w-full h-[200px] object-cover object-top rounded"
                    />
                  </div>
                  <p className="text-sm text-center text-gray-700">Wireframe Iniziale</p>
                </div>
                <div>
                  <div className="bg-gray-100 rounded-lg p-2 mb-2">
                    <img 
                      src="https://readdy.ai/api/search-image?query=high%20fidelity%20mockup%20of%20airline%20website%20homepage%20with%20blue%20color%20scheme%2C%20hero%20image%20of%20airplane%2C%20search%20booking%20form%2C%20and%20destination%20cards%2C%20professional%20UI%20design%20on%20white%20background&width=400&height=300&seq=3&orientation=landscape" 
                      alt="Mockup finale della homepage" 
                      className="w-full h-[200px] object-cover object-top rounded"
                    />
                  </div>
                  <p className="text-sm text-center text-gray-700">Mockup Finale</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                Il processo di design è iniziato con wireframe a bassa fedeltà per definire la struttura e il layout, seguiti da mockup dettagliati che hanno incorporato la palette colori, la tipografia e gli elementi visivi definitivi.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Grid System</h3>
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <div className="grid grid-cols-12 gap-2 mb-2">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="h-8 bg-blue-500 rounded"></div>
                  ))}
                </div>
                <div className="grid grid-cols-6 gap-2 mb-2">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-8 bg-blue-400 rounded"></div>
                  ))}
                </div>
                <div className="grid grid-cols-4 gap-2 mb-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-8 bg-blue-300 rounded"></div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-2 mb-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-8 bg-blue-200 rounded"></div>
                  ))}
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Desktop</span>
                  <span className="text-gray-500">≥ 1024px</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Tablet</span>
                  <span className="text-gray-500">768px - 1023px</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Mobile</span>
                  <span className="text-gray-500">≤ 767px</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Componenti Principali */}
        <section id="componenti" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Componenti Principali</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Header e Navigazione</h3>
                <p className="text-gray-700 mb-4">
                  L'header è stato progettato per essere sempre visibile (fixed) durante lo scrolling, fornendo accesso costante alla navigazione principale e al pulsante di prenotazione. La struttura responsive si adatta ai diversi dispositivi.
                </p>
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <pre className="text-sm text-gray-700 overflow-x-auto">
{`.header {
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
}

.main-nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.main-nav a {
  color: #253858;
  text-decoration: none;
  padding: 1rem;
  display: block;
  transition: color 0.3s;
}

.main-nav a:hover {
  color: #0052cc;
}`}
                  </pre>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <i className="fas fa-mobile-alt text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700">
                      Su dispositivi mobili, la navigazione si trasforma in un menu hamburger che si apre in overlay per preservare lo spazio.
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 p-4 bg-gray-50">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    <i className="fas fa-code mr-2"></i> Implementazione: HTML, CSS, JavaScript
                  </div>
                  <div className="text-sm text-gray-500">
                    <i className="fas fa-universal-access mr-2"></i> WCAG AA Compliant
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Hero Section</h3>
                <p className="text-gray-700 mb-4">
                  La hero section presenta un'immagine di sfondo suggestiva con un overlay che migliora la leggibilità del testo. Include un titolo d'impatto, un sottotitolo e una call-to-action principale.
                </p>
                <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <img 
                    src="https://readdy.ai/api/search-image?query=airline%20website%20hero%20section%20with%20airplane%20flying%20through%20clouds%2C%20blue%20sky%20background%2C%20overlay%20with%20text%20and%20search%20form%2C%20professional%20UI%20design%20with%20clean%20layout&width=500&height=250&seq=4&orientation=landscape" 
                    alt="Hero section del sito web" 
                    className="w-full h-[200px] object-cover object-top"
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <i className="fas fa-paint-brush text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700">
                      L'overlay gradiente garantisce la leggibilità del testo bianco su qualsiasi immagine di sfondo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 p-4 bg-gray-50">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    <i className="fas fa-image mr-2"></i> Background: Immagine ottimizzata WebP
                  </div>
                  <div className="text-sm text-gray-500">
                    <i className="fas fa-adjust mr-2"></i> Contrasto: 4.5:1 ratio
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Form di Prenotazione</h3>
                <p className="text-gray-700 mb-4">
                  Il modulo di prenotazione è il componente principale per la conversione. È stato progettato per essere intuitivo, con validazione in tempo reale e suggerimenti contestuali.
                </p>
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Partenza</label>
                      <div className="relative">
                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-button whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Roma" />
                        <i className="fas fa-plane-departure absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Destinazione</label>
                      <div className="relative">
                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-button whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Milano" />
                        <i className="fas fa-plane-arrival absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Data Partenza</label>
                      <div className="relative">
                        <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-button whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Passeggeri</label>
                      <div className="relative">
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-button whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none">
                          <option>1 Adulto</option>
                          <option>2 Adulti</option>
                          <option>3 Adulti</option>
                          <option>4+ Adulti</option>
                        </select>
                        <i className="fas fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-button whitespace-nowrap cursor-pointer transition">
                    Cerca Voli
                  </button>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <i className="fas fa-check-circle text-green-500 text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700">
                      La validazione JavaScript controlla i dati inseriti prima dell'invio, mostrando messaggi di errore contestuali.
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 p-4 bg-gray-50">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    <i className="fas fa-code mr-2"></i> Validazione: JavaScript
                  </div>
                  <div className="text-sm text-gray-500">
                    <i className="fas fa-universal-access mr-2"></i> Accessibile via tastiera
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Card Destinazioni</h3>
                <p className="text-gray-700 mb-4">
                  Le card delle destinazioni presentano mete popolari con immagini accattivanti, prezzi e un pulsante di azione rapida. Il design è ottimizzato per il touch su dispositivi mobili.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                    <div className="h-32 bg-gray-200 relative">
                      <img 
                        src="https://readdy.ai/api/search-image?query=venice%20italy%20canal%20with%20gondolas%2C%20beautiful%20architecture%2C%20travel%20destination%2C%20sunny%20day%2C%20professional%20travel%20photography%20with%20clean%20background&width=200&height=130&seq=5&orientation=landscape" 
                        alt="Venezia" 
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute top-2 right-2 bg-white text-blue-600 text-xs font-bold px-2 py-1 rounded-full">
                        da €99
                      </div>
                    </div>
                    <div className="p-3">
                      <h4 className="font-medium text-gray-800">Venezia</h4>
                      <p className="text-xs text-gray-500 mb-2">Voli giornalieri</p>
                      <button className="text-xs bg-transparent hover:bg-blue-50 text-blue-600 py-1 px-2 border border-blue-600 rounded-button whitespace-nowrap cursor-pointer">
                        Scopri
                      </button>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                    <div className="h-32 bg-gray-200 relative">
                      <img 
                        src="https://readdy.ai/api/search-image?query=rome%20italy%20colosseum%2C%20ancient%20architecture%2C%20travel%20destination%2C%20sunny%20day%2C%20professional%20travel%20photography%20with%20clean%20background&width=200&height=130&seq=6&orientation=landscape" 
                        alt="Roma" 
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute top-2 right-2 bg-white text-blue-600 text-xs font-bold px-2 py-1 rounded-full">
                        da €79
                      </div>
                    </div>
                    <div className="p-3">
                      <h4 className="font-medium text-gray-800">Roma</h4>
                      <p className="text-xs text-gray-500 mb-2">Voli giornalieri</p>
                      <button className="text-xs bg-transparent hover:bg-blue-50 text-blue-600 py-1 px-2 border border-blue-600 rounded-button whitespace-nowrap cursor-pointer">
                        Scopri
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <i className="fas fa-th text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700">
                      Le card utilizzano CSS Grid per un layout responsive che si adatta automaticamente da 4 colonne su desktop a 2 su tablet e 1 su mobile.
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 p-4 bg-gray-50">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    <i className="fas fa-th-large mr-2"></i> Layout: CSS Grid
                  </div>
                  <div className="text-sm text-gray-500">
                    <i className="fas fa-image mr-2"></i> Immagini: Lazy Loading
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementazione Responsive */}
        <section id="responsive" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Implementazione Responsive</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Approccio Mobile-First</h3>
            <p className="text-gray-700 mb-6">
              Il sito è stato sviluppato seguendo la metodologia mobile-first, partendo dal design per dispositivi mobili e progressivamente migliorando l'esperienza per schermi più grandi. Questo approccio garantisce prestazioni ottimali su tutti i dispositivi.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-32 border-4 border-gray-300 rounded-lg flex items-center justify-center">
                    <div className="w-14 h-28 bg-gray-100 rounded relative overflow-hidden">
                      <img 
                        src="https://readdy.ai/api/search-image?query=mobile%20view%20of%20airline%20website%20with%20single%20column%20layout%2C%20booking%20form%20and%20destination%20cards%20stacked%20vertically%2C%20professional%20UI%20design%20mockup&width=56&height=112&seq=7&orientation=portrait" 
                        alt="Vista mobile" 
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
                <h4 className="font-medium text-center mb-2">Mobile</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-0.5 mr-1"></i>
                    <span>Layout a singola colonna</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-0.5 mr-1"></i>
                    <span>Menu hamburger</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-0.5 mr-1"></i>
                    <span>Form semplificati</span>
                  </li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-center mb-4">
                  <div className="w-24 h-32 border-4 border-gray-300 rounded-lg flex items-center justify-center">
                    <div className="w-20 h-28 bg-gray-100 rounded relative overflow-hidden">
                      <img 
                        src="https://readdy.ai/api/search-image?query=tablet%20view%20of%20airline%20website%20with%20two%20column%20layout%2C%20booking%20form%20and%20destination%20cards%20in%20grid%2C%20professional%20UI%20design%20mockup&width=80&height=112&seq=8&orientation=landscape" 
                        alt="Vista tablet" 
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
                <h4 className="font-medium text-center mb-2">Tablet</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-0.5 mr-1"></i>
                    <span>Layout a due colonne</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-0.5 mr-1"></i>
                    <span>Menu compatto</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-0.5 mr-1"></i>
                    <span>Card in griglia 2x2</span>
                  </li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-center mb-4">
                  <div className="w-40 h-32 border-4 border-gray-300 rounded-lg flex items-center justify-center">
                    <div className="w-36 h-28 bg-gray-100 rounded relative overflow-hidden">
                      <img 
                        src="https://readdy.ai/api/search-image?query=desktop%20view%20of%20airline%20website%20with%20multi%20column%20layout%2C%20horizontal%20booking%20form%20and%20destination%20cards%20in%20grid%2C%20professional%20UI%20design%20mockup&width=144&height=112&seq=9&orientation=landscape" 
                        alt="Vista desktop" 
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
                <h4 className="font-medium text-center mb-2">Desktop</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-0.5 mr-1"></i>
                    <span>Layout multi-colonna</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-0.5 mr-1"></i>
                    <span>Menu orizzontale completo</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-0.5 mr-1"></i>
                    <span>Card in griglia 4x2</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Media Queries</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm text-gray-700 overflow-x-auto">
{`/* Base styles (Mobile First) */
.container {
  padding: 0 1rem;
}

.destinations-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

/* Tablet (768px and up) */
@media (min-width: 768px) {
  .container {
    padding: 0 2rem;
  }
  
  .destinations-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .booking-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
}

/* Desktop (1024px and up) */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .destinations-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}`}
                </pre>
              </div>
              <p className="mt-4 text-gray-700 text-sm">
                Le media queries sono utilizzate per adattare il layout ai diversi breakpoint, modificando la disposizione degli elementi, le dimensioni e altri aspetti visivi.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Best Practices Responsive</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <i className="fas fa-mobile-alt text-blue-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Viewport Meta Tag</h4>
                    <p className="text-sm text-gray-600">
                      <code className="bg-gray-100 px-1 py-0.5 rounded">{'<meta name="viewport" content="width=device-width, initial-scale=1">'}</code> per garantire il corretto scaling su dispositivi mobili.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <i className="fas fa-text-height text-blue-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Unità Relative</h4>
                    <p className="text-sm text-gray-600">
                      Utilizzo di <code className="bg-gray-100 px-1 py-0.5 rounded">rem</code> e <code className="bg-gray-100 px-1 py-0.5 rounded">em</code> per dimensioni tipografiche e <code className="bg-gray-100 px-1 py-0.5 rounded">%</code> o <code className="bg-gray-100 px-1 py-0.5 rounded">vw/vh</code> per layout fluidi.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <i className="fas fa-image text-blue-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Immagini Responsive</h4>
                    <p className="text-sm text-gray-600">
                      Tag <code className="bg-gray-100 px-1 py-0.5 rounded">{'<picture>'}</code> e attributo <code className="bg-gray-100 px-1 py-0.5 rounded">srcset</code> per caricare immagini ottimizzate in base al dispositivo.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <i className="fas fa-hand-pointer text-blue-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Touch-friendly</h4>
                    <p className="text-sm text-gray-600">
                      Target di tocco di almeno 44x44px e spaziatura adeguata tra elementi interattivi per prevenire errori di tocco.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Performance e Ottimizzazione */}
        <section id="performance" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Performance e Ottimizzazione</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Lighthouse Scores</h3>
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 font-bold">95</span>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Performance</span>
                    <span className="text-sm font-medium text-green-600">95/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Accessibilità</span>
                    <span className="text-sm font-medium text-green-600">98/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Best Practices</span>
                    <span className="text-sm font-medium text-green-600">92/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">SEO</span>
                    <span className="text-sm font-medium text-green-600">100/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Tecniche di Ottimizzazione</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Ottimizzazione Immagini</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span>Utilizzo formato WebP con fallback JPG</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span>Compressione ottimizzata per web</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span>Lazy loading per immagini sotto la fold</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span>Dimensioni responsive con srcset</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Ottimizzazione JavaScript</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span>Minificazione e compressione</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span>Caricamento asincrono con async/defer</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span>Code splitting per caricamento on-demand</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span>Ottimizzazione event listeners</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Ottimizzazione CSS</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span>Critical CSS inline nel head</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span>Minificazione e compressione</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span>Riduzione delle specificità</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span>Eliminazione CSS inutilizzato</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Altre Ottimizzazioni</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span>Cache HTTP con ETag e Cache-Control</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span>Compressione GZIP/Brotli</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span>Preload di risorse critiche</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span>Ottimizzazione font con font-display: swap</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Suggerimenti per Miglioramenti Futuri</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  <i className="fas fa-server text-blue-600"></i>
                </div>
                <h4 className="font-medium text-gray-800 mb-2">Implementazione SSR</h4>
                <p className="text-sm text-gray-700">
                  L'implementazione del Server-Side Rendering potrebbe migliorare ulteriormente i tempi di caricamento percepiti e l'indicizzazione SEO, specialmente per le pagine di dettaglio delle destinazioni.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  <i className="fas fa-database text-blue-600"></i>
                </div>
                <h4 className="font-medium text-gray-800 mb-2">Caching Avanzato</h4>
                <p className="text-sm text-gray-700">
                  Implementare un sistema di caching più avanzato con Service Workers per consentire funzionalità offline e migliorare ulteriormente i tempi di caricamento per gli utenti abituali.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  <i className="fas fa-globe text-blue-600"></i>
                </div>
                <h4 className="font-medium text-gray-800 mb-2">CDN Globale</h4>
                <p className="text-sm text-gray-700">
                  Distribuire le risorse statiche attraverso una CDN globale per ridurre la latenza e migliorare i tempi di caricamento per utenti internazionali, essenziale per un sito di compagnia aerea.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusioni */}
        <section id="conclusioni" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Conclusioni e Risorse</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Riepilogo del Progetto</h3>
            <p className="text-gray-700 mb-4">
              Questo case study ha illustrato il processo di progettazione e sviluppo di un sito web moderno per una compagnia aerea utilizzando tecnologie web standard. Abbiamo esaminato la struttura del codice, il design system, i componenti principali, l'implementazione responsive e le tecniche di ottimizzazione delle performance.
            </p>
            <p className="text-gray-700 mb-4">
              Il progetto dimostra come sia possibile creare un'esperienza utente di alta qualità utilizzando HTML, CSS e JavaScript vanilla, senza dipendere da framework complessi. L'attenzione ai dettagli di design, accessibilità e performance ha portato a un prodotto finale che soddisfa gli standard moderni del web.
            </p>
            <p className="text-gray-700">
              Le tecniche e le best practices illustrate in questo case study possono essere applicate a una vasta gamma di progetti web, indipendentemente dal settore o dalle dimensioni.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Risorse e Librerie</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-book text-blue-600 mt-1 mr-3"></i>
                  <div>
                    <h4 className="font-medium text-gray-800">Documentazione</h4>
                    <p className="text-sm text-gray-700">MDN Web Docs per riferimenti HTML, CSS e JavaScript</p>
                    <a href="#" className="text-sm text-blue-600 hover:underline">Visita MDN</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-paint-brush text-blue-600 mt-1 mr-3"></i>
                  <div>
                    <h4 className="font-medium text-gray-800">Design Resources</h4>
                    <p className="text-sm text-gray-700">Figma per wireframing e UI design</p>
                    <a href="#" className="text-sm text-blue-600 hover:underline">Esplora Figma</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-code text-blue-600 mt-1 mr-3"></i>
                  <div>
                    <h4 className="font-medium text-gray-800">Strumenti di Sviluppo</h4>
                    <p className="text-sm text-gray-700">VS Code, Chrome DevTools, Lighthouse</p>
                    <a href="#" className="text-sm text-blue-600 hover:underline">Scopri gli strumenti</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-images text-blue-600 mt-1 mr-3"></i>
                  <div>
                    <h4 className="font-medium text-gray-800">Asset Grafici</h4>
                    <p className="text-sm text-gray-700">Unsplash per immagini, Font Awesome per icone</p>
                    <a href="#" className="text-sm text-blue-600 hover:underline">Scarica gli asset</a>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Domande Frequenti</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Perché non utilizzare un framework come React o Vue?</h4>
                  <p className="text-sm text-gray-700">
                    Per questo progetto, l'utilizzo di tecnologie web standard ha permesso di ottenere prestazioni ottimali senza il sovraccarico di un framework. Per siti più complessi o applicazioni con molte interazioni, un framework potrebbe essere più appropriato.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Come gestire l'internazionalizzazione del sito?</h4>
                  <p className="text-sm text-gray-700">
                    Per un sito multilingua, consigliamo l'utilizzo di file di traduzione JSON e un sistema di routing basato sulla lingua. Questo approccio mantiene il codice pulito e facilita l'aggiunta di nuove lingue.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Il sito è compatibile con browser meno recenti?</h4>
                  <p className="text-sm text-gray-700">
                    Il sito è ottimizzato per browser moderni, ma include fallback per garantire una buona esperienza anche su browser meno recenti. Utilizziamo Babel per la transpilazione JavaScript e Autoprefixer per la compatibilità CSS.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Come integrare un sistema di prenotazione reale?</h4>
                  <p className="text-sm text-gray-700">
                    Per un sistema di prenotazione reale, consigliamo l'integrazione con API di prenotazione tramite AJAX. Il form attuale può essere facilmente adattato per inviare richieste a un endpoint API.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Repository</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white flex items-center cursor-pointer">
                    <i className="fab fa-github mr-2"></i> GitHub Repository
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white flex items-center cursor-pointer">
                    <i className="fab fa-codepen mr-2"></i> CodePen Demo
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white flex items-center cursor-pointer">
                    <i className="fas fa-file-code mr-2"></i> Scarica Codice Sorgente
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contatti</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white flex items-center cursor-pointer">
                    <i className="fas fa-envelope mr-2"></i> Email
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white flex items-center cursor-pointer">
                    <i className="fab fa-linkedin mr-2"></i> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white flex items-center cursor-pointer">
                    <i className="fas fa-globe mr-2"></i> Portfolio
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Altri Progetti</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white cursor-pointer">E-commerce Responsive</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white cursor-pointer">Dashboard Admin</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white cursor-pointer">App Meteo Progressive</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-300 mb-4">Iscriviti per ricevere aggiornamenti sui nuovi case study e tutorial.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="La tua email" 
                  className="px-3 py-2 bg-gray-700 text-white rounded-l-button whitespace-nowrap border-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-button whitespace-nowrap cursor-pointer transition text-sm">
                  Iscriviti
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 Case Study Sviluppo Web. Tutti i diritti riservati.
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

