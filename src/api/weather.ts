import axios from 'axios';

const weatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});

export interface ForecastWeatherInfo {
  date: any;
  weather: any;
  temp: any;
}

export interface WeatherBasic {
  main: string;
  description: string;
  icon: string;
}

export interface IWindBasic {
  speed: number;
  deg: number;
  gust: number;
}

export interface IWeatherBase {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  weather: WeatherBasic[];
  clouds: {
    all: number;
  };
  wind: IWindBasic;
  visibility: number;
  rain?: {
    '3h': number;
  };
}

export interface ISunDetails {
  sunrise: number;
  sunset: number;
}

export interface IWeather extends IWeatherBase {
  sys: ISunDetails;
  timezone: number;
}

export interface IForecastWeather extends IWeather {
  dt_txt: string;
}

export const getCurrentWeather = (city = 'Sydney'): Promise<void | IWeather> => {
  return weatherApi
    .get('/weather', {
      params: {
        q: `${city},AU`,
        units: 'metric',
        appid: process.env.REACT_APP_WEATHER_API_KEY,
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      console.error(err);
    });
};

export const getForecastWeather = (city = 'Sydney'): Promise<void | IForecastWeather[]> => {
  return weatherApi
    .get('/forecast', {
      params: {
        q: `${city},AU`,
        units: 'metric',
        APPID: process.env.REACT_APP_WEATHER_API_KEY,
      },
    })
    .then((res) => res.data.list);
};
