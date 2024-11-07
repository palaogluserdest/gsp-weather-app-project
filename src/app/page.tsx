'use client';
import { useEffect, useState } from 'react';
import WeatherCard from './components/WeatherCard';
import WeatherWidget from './components/WeatherWidget';
import SearchBar from './components/SearchBar';
import { FaRegStar } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';
import { addFavorite, checkFavorite, removeFavorite } from './utils/user';
import { useAuth } from './hooks/useAuth';
import './page.scss';
import { dailyWeatherInfosProps } from './types/types';

const Home = () => {
  const [expendedCard, setExpendedCard] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isRefresh, setIsRefresh] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isClick, setIsClick] = useState<boolean | null>(null);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [dailyWeather, setDailyWeather] = useState<any>(null);
  const [dailyWeatherInfos, setDailyWeatherInfos] = useState<dailyWeatherInfosProps[]>([]);
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
  const [cardOwnInfo, setCardOwnInfo] = useState<dailyWeatherInfosProps>({
    maxTemp: 0,
    minTemp: 0,
    feelsLike: 0,
    windSpeed: 0,
    humidity: 0,
  });

  const { userData } = useAuth();

  const handleClick = (index: number) => {
    setExpendedCard(expendedCard === index ? null : index);
    setIsMounted(true);

    setCardOwnInfo(dailyWeatherInfos[index]);

    switch (true) {
      case selectedCard === null:
        setIsClick(true);
        setSelectedCard(index);
        break;
      case selectedCard !== index:
        setIsClick(false);

        setTimeout(() => {
          setIsClick(true);
          setSelectedCard(index);
        }, 100);
        break;
      case selectedCard === index:
        setIsClick((prev) => !prev);
        break;
      default:
        break;
    }
  };

  const handleFavorite = async (location: string, userUid: string) => {
    setIsFavorite(await checkFavorite(location, userUid));

    if (isFavorite) {
      await removeFavorite(location, userUid);
    } else {
      await addFavorite(location, userUid);
    }
  };

  useEffect(() => {
    if (userData?.favorites.includes(inputValue.toLocaleUpperCase('tr'))) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [userData, inputValue]);

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
    <>
      <div className="search-bar-container">
        <SearchBar
          setInputValue={setInputValue}
          setIsRefresh={setIsRefresh}
          setDailyWeather={setDailyWeather}
          setDailyWeatherInfos={setDailyWeatherInfos}
        />
      </div>
      <div className="weather-cards">
        {inputValue && !isRefresh && (
          <>
            <div className="weather-location-group">
              <h1 className={`${inputValue ? 'slide-from-up-main-animation' : ''} weather-location`}>
                {inputValue.toLocaleUpperCase('tr')}
              </h1>
              {userData?.isAuth && (
                <button
                  className={`${inputValue ? 'slide-from-up-main-animation' : ''} favorite-btn`}
                  onClick={() => handleFavorite(inputValue, userData.uid)}
                >
                  {!isFavorite && <FaRegStar size={40} fill="#fff" stroke="#fff" />}
                  {isFavorite && <FaStar size={40} fill="#fff" stroke="#fff" />}
                </button>
              )}
            </div>
            <div className="cards-wrapper">
              {dailyWeather.map((item: any, index: number) => (
                <WeatherCard
                  key={index}
                  id={index}
                  isExpended={expendedCard === index}
                  isMounted={isMounted}
                  onClick={() => handleClick(index)}
                  oneDay={item}
                />
              ))}
            </div>
            {isClick && windowSize > 864 && (
              <div className="widget-wrapper">
                {/* {isMounted && cardOwnInfo?.length.map((widget, index) => <WeatherWidget key={index} id={index} isClick={isClick} />)} */}
                {isMounted &&
                  Object.keys(cardOwnInfo).map((key, index) => (
                    <WeatherWidget key={index} cardKey={key} id={index} isClick={isClick} value={cardOwnInfo} />
                  ))}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Home;
