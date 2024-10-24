import React, { FC } from 'react';
import { FiSun } from 'react-icons/fi';
import './WeatherCard.scss';

type WeatherCardProps = {
  id: number;
  isExpended: boolean;
  onClick: () => void;
};

const WeatherCard: FC<WeatherCardProps> = ({ isExpended, onClick }) => {
  return (
    <div className={`${isExpended ? 'active' : ''} card-container`} onClick={onClick}>
      <video src="/assets/videos/snowy.webm" autoPlay loop muted className="card-video-bg"></video>
      <span className="card-date" style={{ fontSize: `${isExpended ? '35px' : '52px'}` }}>
        24
      </span>
      <span className="card-icon">
        <FiSun size={isExpended ? 150 : 90} color="#fff" style={{ transition: 'all .4s ease-in-out' }} />
      </span>
      <span className="card-temperature" style={{ fontSize: `${isExpended ? '52px' : '32px'}` }}>
        21 °C
      </span>
      <div className="card-info-group" style={{ opacity: `${isExpended ? '1' : '0'}` }}>
        <span className="card-info-item">Hissedilen Sıcaklık: 23</span>
        <span className="card-info-item">Rüzgar Hızı: 3 m/s</span>
        <span className="card-info-item">Nemlilik: 32%</span>
      </div>
    </div>
  );
};

export default WeatherCard;
