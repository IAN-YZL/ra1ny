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
  name: string;
}

export interface IForecastWeather extends IWeather {
  dt_txt: string;
}

export interface IForecastData {
  city: {
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
  };
  list: IForecastWeather[];
}

export const getCurrentWeather = (city: string): Promise<IWeather | undefined> => {
  return weatherApi
    .get('/weather', {
      params: {
        q: `${city}`,
        units: 'metric',
        appid: process.env.REACT_APP_WEATHER_API_KEY,
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      console.error(err);
    });
};

export const getForecastWeather = (city: string): Promise<void | IForecastData> => {
  return weatherApi
    .get('/forecast', {
      params: {
        q: `${city}`,
        units: 'metric',
        APPID: process.env.REACT_APP_WEATHER_API_KEY,
      },
    })
    .then((res) => res.data);
};
