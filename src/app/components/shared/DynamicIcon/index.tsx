import React, { FC } from 'react';
import { FiSun } from 'react-icons/fi';
import { IoRainyOutline } from 'react-icons/io5';
import { RiSnowyLine } from 'react-icons/ri';
import { LuCloudy } from 'react-icons/lu';
import { FiCloudLightning } from 'react-icons/fi';
import { LuCloudFog } from 'react-icons/lu';
import { TiWeatherCloudy } from 'react-icons/ti';

const iconMap = {
  sunny: FiSun,
  rainy: IoRainyOutline,
  snowy: RiSnowyLine,
  partlyCloudy: LuCloudy,
  tunderly: FiCloudLightning,
  mistly: LuCloudFog,
  unknown: TiWeatherCloudy,
};

export type iconName = 'sunny' | 'rainy' | 'snowy' | 'partlyCloudy' | 'tunderly' | 'mistly' | 'unknown';

type DynamicIconProps = {
  icon: iconName;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
};

const DynamicIcon: FC<DynamicIconProps> = ({ icon, size, color, style }) => {
  const IconComponent = iconMap[icon];
  return <IconComponent size={size} color={color} style={style} />;
};

export default DynamicIcon;
