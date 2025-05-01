import React from 'react';
import AccordionItem from './AccordionItem';

interface FaqItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: FaqItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <div className="max-w-2xl mx-auto">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.question}>
          {item.answer}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion; 
