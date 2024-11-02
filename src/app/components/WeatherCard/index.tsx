import React, { FC } from 'react';
import './WeatherCard.scss';
import DynamicIcon from '../shared/DynamicIcon';
import { formatDate } from '@/app/utils/helpers';

type WeatherCardProps = {
  id: number;
  isExpended: boolean;
  isMounted: boolean;
  onClick: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  oneDay?: any;
};

const WeatherCard: FC<WeatherCardProps> = ({ oneDay, id, isExpended, isMounted, onClick }) => {
  const formatedDate = formatDate(oneDay.dt_txt.split(' ')[0]);
  const onlyDay = formatedDate.split(' ')[0];
  const wCode = oneDay.weather[0].id;

  const backgroundVideo = (weatherCode: number): string => {
    switch (true) {
      case weatherCode === 200 || weatherCode === 232:
        return '/assets/videos/thunderly.webm';
      case weatherCode === 300 || weatherCode === 321:
        return '/assets/videos/thunderly.webm';
      case weatherCode === 500 || weatherCode === 531:
        return '/assets/videos/rain.webm';
      case weatherCode === 600 || weatherCode === 622:
        return '/assets/videos/snowy.webm';
      case weatherCode === 701 || weatherCode === 781:
        return '/assets/videos/mistly.webm';
      case weatherCode === 800:
        return '/assets/videos/clear-weather.webm';
      case weatherCode === 801 || weatherCode === 802 || weatherCode === 803 || weatherCode === 804:
        return '/assets/videos/partly-cloudy.webm';
      default:
        return '/assets/images/background-picture.webp';
    }
  };

  return (
    <div
      className={`${isExpended ? 'active' : ''} card-container`}
      onClick={onClick}
      style={{ animationDelay: `${id * 0.2}s` }}
    >
      <video src={backgroundVideo(wCode)} autoPlay loop muted className="card-video-bg"></video>
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
        {Math.round(oneDay.main.temp)}°C
      </span>
    </div>
  );
};

export default WeatherCard;
