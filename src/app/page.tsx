'use client';
import { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';
import { FaRegStar } from 'react-icons/fa6';
import './page.scss';

const Home = () => {
  const [expendedCard, setExpendedCard] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isRefresh, setIsRefresh] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const cards: number[] = [1, 2, 3, 4, 5];

  const handleClick = (index: number) => {
    setExpendedCard(expendedCard === index ? null : index);
    setIsMounted(true);
  };

  return (
    <>
      <div className="search-bar-container">
        <SearchBar setInputValue={setInputValue} setIsRefresh={setIsRefresh} />
      </div>
      <div className="weather-cards">
        {inputValue && !isRefresh && (
          <>
            <div className="weather-location-group">
              <h1 className={`${inputValue ? 'slide-from-up-main-animation' : ''} weather-location`}>
                {inputValue.toLocaleUpperCase('tr')}
              </h1>
              <button className="favorite-btn">
                <FaRegStar size={40} fill="#fff" stroke="#fff" />
              </button>
            </div>
            <div className="cards-wrapper">
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
          </>
        )}
      </div>
    </>
  );
};

export default Home;
