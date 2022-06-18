import { createContext } from 'react';
import { IForecastData, IWeather } from './api/weather';

export interface ICity {
  id: number;
  name: string;
}

type CitiesContextType = {
  currentWeather: IWeather;
  forecastWeathers: IForecastData;
  cities: ICity[];
  citiesData: IWeather[];
  setCity: (name: string, id?: number) => void;
};

const mockWeather: IWeather = {
  sys: { sunrise: 0, sunset: 0 },
  name: '',
  timezone: 0,
  main: { temp: 0, feels_like: 0, temp_min: 0, temp_max: 0, pressure: 0, humidity: 0 },
  weather: [{ main: '', description: '', icon: '' }],
  clouds: { all: 0 },
  wind: { speed: 0, deg: 0, gust: 0 },
  visibility: 0,
};

const mockForecastWeather: IForecastData = {
  city: {
    name: '',
    coord: {
      lat: 0,
      lon: 0,
    },
    country: '',
  },
  list: [],
};

export const CitiesContext = createContext<CitiesContextType>({
  cities: [{ id: 1, name: '' }],
  citiesData: [mockWeather],
  currentWeather: mockWeather,
  setCity: () => null,
  forecastWeathers: mockForecastWeather,
});
