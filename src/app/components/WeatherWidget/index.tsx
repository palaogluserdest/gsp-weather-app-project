import { FC } from 'react';
import './WeatherWidget.scss';

type WeatherWidgetProps = {
  isClick: boolean | null;
  id: number;
  cardKey: string;
  value: any;
};

const WeatherWidget: FC<WeatherWidgetProps> = ({ id, isClick, value, cardKey }) => {
  return (
    <div
      className={`${isClick ? 'slide-left-to-right-widget' : 'slide-right-to-right-widget'} weather-widget-container`}
      style={{ animationDelay: `${id * 0.2}s` }}
    >
      <h3 className="widget-title">{cardKey}:</h3>
      <span className="widget-value">
        {Math.round(value[cardKey])}
        <small className="celsius">°C</small>
      </span>
    </div>
  );
};

export default WeatherWidget;
