'use client';
import { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import './page.scss';

const Home = () => {
  const [expendedCard, setExpendedCard] = useState<number | null>(null);

  const cards: number[] = [1, 2, 3, 4, 5];

  return (
    <div className="weather-cards">
      {cards.map((card, index) => (
        <WeatherCard
          key={index}
          id={index}
          isExpended={expendedCard === index}
          onClick={() => setExpendedCard(expendedCard === index ? null : index)}
        />
      ))}
    </div>
  );
};

export default Home;
