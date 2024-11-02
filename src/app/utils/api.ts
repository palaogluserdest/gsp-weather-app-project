const fetcher = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

// => Get Location Info from Open Weather Maps

export const getLocation = async (location: string) => {
  try {
    const locationData = await fetcher(
      `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${process.env.NEXT_PUBLIC_OWM_KEY!}`,
    );

    return locationData;
  } catch (error) {
    return error;
  }
};

// => Get Location's Weather Infos

export const getWeatherInfos = async (lat: number, lon: number) => {
  const weatherData = await fetcher(
    `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${lat}&lon=${lon}&exclude=hourly&appid=${process.env.NEXT_PUBLIC_OWM_KEY!}`,
  );

  return weatherData;
};

// => Fetched Weather Filtered

export const filteredWeather = (weatherData: any) => {
  const dailyDate: string[] = [];
  const dateTracker = new Set();

  weatherData.map((item: any) => {
    const date = item.dt_txt.split(' ')[0];
    if (!dateTracker.has(date)) {
      dailyDate.push(item);
      dateTracker.add(date);
    }
  });

  return dailyDate;
};
