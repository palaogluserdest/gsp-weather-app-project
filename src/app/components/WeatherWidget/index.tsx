import { FC } from 'react';
import './WeatherWidget.scss';

type WeatherWidgetProps = {
  isClick: boolean | null;
  id: number;
};

const WeatherWidget: FC<WeatherWidgetProps> = ({ id, isClick }) => {
  return (
    <div
      className={`${isClick ? 'slide-left-to-right-widget' : 'slide-right-to-right-widget'} weather-widget-container`}
      style={{ animationDelay: `${id * 0.2}s` }}
    >
      <h3 className="widget-title">Hissedilen Sıcaklık:</h3>
      <span className="widget-value">
        20<small className="celsius">°C</small>
      </span>
    </div>
  );
};

export default WeatherWidget;
