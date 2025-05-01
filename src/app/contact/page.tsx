'use client';
import Image from 'next/image';
import Accordion from '@/components/Accordion';
import { useTheme } from '@/context/ThemeContext';
import clsx from 'clsx';
import { motion } from 'framer-motion';

// Dati per le FAQ
const faqItems = [
  {
    question: "Are you available?",
    answer: "Yes, I am currently available for freelance projects and collaborations. Feel free to reach out to discuss your ideas!"
  },
  {
    question: "How to start a project?",
    answer: "Starting a project is simple! Just send me a message through the contact form or email detailing your project scope, goals, and timeline. We can then schedule a call to discuss further."
  },
  {
    question: "Do you code or design?",
    answer: "I specialize in both! My unique skillset bridges the gap between creative design and technical implementation, allowing me to handle projects from concept to launch."
  },
  {
    question: "How much do you charge?",
    answer: "Project costs vary based on complexity, scope, and timeline. I offer customized quotes after understanding your specific needs. Let's chat to determine the best fit for your budget."
  }
];

export default function ContactPage() {
  const { theme } = useTheme();
  const isMarketing = theme === 'marketing';

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-24 md:py-32">

        {/* Sezione FAQ */}
        <section className="mb-24 md:mb-32">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <Accordion items={faqItems} />
        </section>

        {/* Sezione Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Still have questions?</h2>
          <div className="flex justify-center my-10">
             <div className="w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center overflow-hidden relative border-4 border-[color:var(--primary)] transition-colors duration-300">
                <Image src="/CaseStudiesImages/CallToAction/NegroScrivania.jpeg" alt="Contattami" layout="fill" objectFit="cover" />
            </div>
          </div>
          <motion.button className="btn-primary">
            Let's Talk
          </motion.button>
        </section>

      </div>
    </main>
  );
} 