import { Timestamp } from 'firebase/firestore';

export type FormikRegisterValues = {
  firstName: string;
  lastName: string;
  userRegisterEmail: string;
  userRegisterPassword: string;
  rePassword: string;
  isAccept: boolean;
};

export type FormikLoginValues = {
  userLoginEmail: string;
  userLoginPassword: string;
  rememberMe: boolean;
};

export type FormikProfileValues = {
  firstName?: string;
  lastName?: string;
  userEmail?: string;
};

export type FormikPasswordValues = {
  password: string;
  rePassword: string;
};

export type userProfile = {
  uid: string;
  firstName: string;
  lastName: string;
  email: string;
  favorites: string[];
  isAuth: boolean;
  createdAt?: Timestamp;
};

export type dailyWeatherInfosProps = {
  maxTemp: number;
  minTemp: number;
  feelsLike: number;
  windSpeed: number;
  humidity: number;
};
