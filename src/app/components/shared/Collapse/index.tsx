'use client';
import React, { useState } from 'react';
import './Collapse.scss';

// Soru ve cevaplar için bir arayüz tanımlıyoruz
type CollapseItem = {
  question: string;
  answer: string;
};

type CollapseProps = {
  items: CollapseItem[];
};

const Collapse: React.FC<CollapseProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">F.A.Q</h1>
      {items.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleItem(index)}>
            {item.question}
          </div>
          {openIndex === index && <div className="faq-answer">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default Collapse;
