'use client';
import React, { FC, useEffect, useState } from 'react';
import './WeatherCard.scss';
import DynamicIcon, { iconName } from '../shared/DynamicIcon';
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
  const [windowSize, setWindowSize] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 100000);
  const formatedDate = formatDate(oneDay.dt_txt.split(' ')[0]);
  const onlyDay = formatedDate.split(' ')[0];
  const wCode = oneDay.weather[0].id;

  const backgroundVideo = (weatherCode: number): string => {
    switch (true) {
      case weatherCode === 200 || weatherCode === 232:
        return '/assets/videos/thunderly-2.webm';
      case weatherCode === 300 || weatherCode === 321:
        return '/assets/videos/thunderly-2.webm';
      case weatherCode === 500 || weatherCode === 531:
        return '/assets/videos/rain-2.webm';
      case weatherCode === 600 || weatherCode === 622:
        return '/assets/videos/snowy-2.webm';
      case weatherCode === 701 || weatherCode === 781:
        return '/assets/videos/mistly-2.webm';
      case weatherCode === 800:
        return '/assets/videos/clear-weather-2.webm';
      case weatherCode === 801 || weatherCode === 802 || weatherCode === 803 || weatherCode === 804:
        return '/assets/videos/partly-cloudy-2.webm';
      default:
        return '/assets/images/background-picture.webp';
    }
  };

  const weatherCardIcon = (weatherCode: number): iconName => {
    switch (true) {
      case weatherCode === 200 || weatherCode === 232:
        return 'tunderly';
      case weatherCode === 300 || weatherCode === 321:
        return 'tunderly';
      case weatherCode === 500 || weatherCode === 531:
        return 'rainy';
      case weatherCode === 600 || weatherCode === 622:
        return 'snowy';
      case weatherCode === 701 || weatherCode === 781:
        return 'mistly';
      case weatherCode === 800:
        return 'sunny';
      case weatherCode === 801 || weatherCode === 802 || weatherCode === 803 || weatherCode === 804:
        return 'partlyCloudy';
      default:
        return 'unknown';
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowSize]);

  return (
    <div
      className={`${isExpended && windowSize > 864 ? 'active' : ''} ${isExpended && windowSize <= 864 ? 'mobil-active' : ''} card-container`}
      onClick={onClick}
      style={{ animationDelay: `${id * 0.2}s` }}
    >
      <video playsInline autoPlay loop muted className="card-video-bg">
        <source src={backgroundVideo(wCode)} type="video/webm" />
      </video>
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
          icon={weatherCardIcon(wCode)}
          size={isExpended && windowSize > 864 ? 150 : isExpended && windowSize <= 864 ? 100 : 90}
          color="#fff"
          style={{
            transition: 'all .6s ease-in-out',
            marginTop: isExpended && windowSize > 864 ? '0' : isExpended && windowSize <= 864 ? '40px' : '0',
          }}
        />
      </span>
      <span
        className="card-temperature"
        style={{
          fontSize: isExpended && windowSize > 864 ? '82px' : isExpended && windowSize <= 864 ? ' 52px' : '32px',
          marginTop: isExpended && windowSize > 864 ? '0' : isExpended && windowSize <= 864 ? ' 40px' : '0',
        }}
      >
        {Math.round(oneDay.main.temp)}°C
      </span>
    </div>
  );
};

export default WeatherCard;
