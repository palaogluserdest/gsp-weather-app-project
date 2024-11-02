import { FC } from 'react';
import './WeatherWidget.scss';

type WeatherWidgetProps = {
  isClick: boolean | null;
  id: number;
  cardKey: string;
  value: any;
};

const handleTitle = (titleType: string) => {
  switch (true) {
    case titleType === 'maxTemp':
      return 'Maximum Temp.';
    case titleType === 'minTemp':
      return 'Minimum Temp.';
    case titleType === 'humidity':
      return 'Humidity';
    case titleType === 'feelsLike':
      return 'Sensed Temp.';
    case titleType === 'windSpeed':
      return 'Wind Speed';
    default:
      return 'unknown';
  }
};

const handleUnit = (titleType: string) => {
  switch (true) {
    case titleType === 'maxTemp':
      return '°C';
    case titleType === 'minTemp':
      return '°C';
    case titleType === 'humidity':
      return '%';
    case titleType === 'feelsLike':
      return '°C';
    case titleType === 'windSpeed':
      return 'm/s';
    default:
      return 'unknown';
  }
};

const WeatherWidget: FC<WeatherWidgetProps> = ({ id, isClick, value, cardKey }) => {
  const cardTitle = handleTitle(cardKey);
  const cardUnit = handleUnit(cardKey);

  return (
    <div
      className={`${isClick ? 'slide-left-to-right-widget' : 'slide-right-to-right-widget'} weather-widget-container`}
      style={{ animationDelay: `${id * 0.2}s` }}
    >
      <h3 className="widget-title">{cardTitle}:</h3>
      <span className="widget-value">
        {Math.round(value[cardKey])}
        <small className="celsius">{cardUnit}</small>
      </span>
    </div>
  );
};

export default WeatherWidget;
