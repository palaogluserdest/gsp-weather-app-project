'use client';
import React, { FC, useState } from 'react';
import { FaSearchLocation } from 'react-icons/fa';
import './SearchBar.scss';
import { useAuth } from '@/app/hooks/useAuth';
import { filteredWeather, getLocation, getWeatherInfos } from '@/app/utils/api';
import { Bounce, toast } from 'react-toastify';
import { dailyWeatherInfosProps } from '@/app/types/types';

type SearchBarProps = {
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setIsRefresh: React.Dispatch<React.SetStateAction<boolean>>;
  setDailyWeather: React.Dispatch<React.SetStateAction<any>>;
  setDailyWeatherInfos: React.Dispatch<React.SetStateAction<dailyWeatherInfosProps[]>>;
};

const SearchBar: FC<SearchBarProps> = ({ setInputValue, setIsRefresh, setDailyWeather, setDailyWeatherInfos }) => {
  const [value, setValue] = useState<string>('');

  const { userData } = useAuth();

  const handleClickInput = async () => {
    const locationData = await getLocation(value);

    if (locationData[0]) {
      const lat = locationData[0].lat;
      const lon = locationData[0].lon;
      setInputValue(value);
      setIsRefresh(true);

      const weatherData = await getWeatherInfos(lat, lon);
      const dailyDate = filteredWeather(weatherData.list);

      const dailyWeatherInfoArray = dailyDate.map((daily: any) => ({
        maxTemp: daily.main.temp_max,
        minTemp: daily.main.temp_min,
        feelsLike: daily.main.feels_like,
        humidity: daily.main.humidity,
        windSpeed: daily.wind.speed,
      }));

      setDailyWeather(dailyDate);
      setDailyWeatherInfos(dailyWeatherInfoArray);

      setTimeout(() => {
        setIsRefresh(false);
        setValue('');
      }, 100);

      toast.success('Location was found', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
    } else {
      setInputValue('');
      setIsRefresh(false);
      toast.warn('Location was not found', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
    }
  };

  const handleKeyDownInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setInputValue(value);
      setIsRefresh(true);

      setTimeout(() => {
        setIsRefresh(false);
        setValue('');
      }, 100);
    }
  };

  const handleSearchFavorite = (location: string) => {
    setInputValue(location);
    setIsRefresh(true);

    setTimeout(() => {
      setIsRefresh(false);
    }, 100);
  };

  return (
    <>
      <div className="search-input-group">
        <input
          type="text"
          value={value}
          className="search-input"
          onKeyDown={handleKeyDownInput}
          onChange={(e) => setValue(e.target.value)}
          lang="tr"
        />
        <button className="search-button" onClick={handleClickInput}>
          <FaSearchLocation size={35} color="#000" />
        </button>
      </div>
      {userData?.isAuth && (
        <div className="favorite-locations">
          {userData.favorites.map((favorite, index) => (
            <button
              key={index}
              className="favorite-location-btn"
              onClick={() => handleSearchFavorite(favorite.toLocaleUpperCase('tr'))}
            >
              {favorite.toLocaleUpperCase('tr')}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchBar;
