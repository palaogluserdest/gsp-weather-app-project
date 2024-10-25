'use client';
import { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import './page.scss';

const Home = () => {
  const [expendedCard, setExpendedCard] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const cards: number[] = [1, 2, 3, 4, 5];

  const handleClick = (index: number) => {
    setExpendedCard(expendedCard === index ? null : index);
    setIsMounted(true);
  };

  return (
    <div className="weather-cards">
      {cards.map((card, index) => (
        <WeatherCard
          key={index}
          id={index}
          isExpended={expendedCard === index}
          isMounted={isMounted}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Home;
