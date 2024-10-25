import React, { FC } from 'react';
import './WeatherCard.scss';
import DynamicIcon from '../shared/DynamicIcon';

type WeatherCardProps = {
  id: number;
  isExpended: boolean;
  isMounted: boolean;
  onClick: () => void;
};

const WeatherCard: FC<WeatherCardProps> = ({ isExpended, isMounted, onClick }) => {
  return (
    <div className={`${isExpended ? 'active' : ''} card-container`} onClick={onClick}>
      <video src="/assets/videos/rain.webm" autoPlay loop muted className="card-video-bg"></video>
      <span
        className={`${isMounted ? (isExpended ? ' slide-to-up-animation' : 'slide-from-up-animation') : ''} card-date-day`}
      >
        24
      </span>
      <span
        className={`${isMounted ? (isExpended ? ' slide-from-down-animation' : 'slide-to-down-animation') : ''} card-date-full`}
        style={{ opacity: '0' }}
      >
        24 October 2024
      </span>
      <span className="card-icon">
        <DynamicIcon
          icon="rainy"
          size={isExpended ? 150 : 90}
          color="#fff"
          style={{ transition: 'all .6s ease-in-out' }}
        />
      </span>
      <span className="card-temperature" style={{ fontSize: `${isExpended ? '52px' : '32px'}` }}>
        21 °C
      </span>
      <div
        className={`${isMounted ? (isExpended ? 'slide-left-to-right-animation' : 'slide-right-to-left-animation ') : ''} card-info-group`}
      >
        <span className="card-info-item">Hissedilen Sıcaklık: 20 °C</span>
        <span className="card-info-item">Rüzgar Hızı: 3 m/s</span>
        <span className="card-info-item">Nemlilik: 32%</span>
      </div>
    </div>
  );
};

export default WeatherCard;
