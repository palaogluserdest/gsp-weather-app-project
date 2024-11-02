import React, { FC } from 'react';
import './WeatherCard.scss';
import DynamicIcon from '../shared/DynamicIcon';
import { formatDate } from '@/app/utils/helpers';

type WeatherCardProps = {
  id: number;
  isExpended: boolean;
  isMounted: boolean;
  onClick: () => void;
  oneDay?: any;
};

const WeatherCard: FC<WeatherCardProps> = ({ oneDay, id, isExpended, isMounted, onClick }) => {
  const formatedDate = formatDate(oneDay.dt_txt.split(' ')[0]);
  const onlyDay = formatedDate.split(' ')[0];

  return (
    <div
      className={`${isExpended ? 'active' : ''} card-container`}
      onClick={onClick}
      style={{ animationDelay: `${id * 0.2}s` }}
    >
      <video src="/assets/videos/clear-weather.webm" autoPlay loop muted className="card-video-bg"></video>
      <span
        className={`${isMounted ? (isExpended ? ' slide-to-up-animation' : 'slide-from-up-animation') : ''} card-date-day`}
      >
        {onlyDay}
      </span>
      <span
        className={`${isMounted ? (isExpended ? ' slide-from-down-animation' : 'slide-to-down-animation') : ''} card-date-full`}
        style={{ opacity: '0' }}
      >
        {formatedDate}
      </span>
      <span className="card-icon">
        <DynamicIcon
          icon="sunny"
          size={isExpended ? 150 : 90}
          color="#fff"
          style={{ transition: 'all .6s ease-in-out' }}
        />
      </span>
      <span className="card-temperature" style={{ fontSize: `${isExpended ? '82px' : '32px'}` }}>
        {Math.round(oneDay.main.temp)} °C
      </span>
    </div>
  );
};

export default WeatherCard;
