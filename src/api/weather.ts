import axios from 'axios';

const weatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});

export interface WeatherInfo {
  temp: any;
  wind: any;
  humidity: any;
  weather: any;
}

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

export interface IForecastWeather {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: WeatherBasic[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  dt_txt: string;
  rain?: {
    '3h': number;
  };
}

export const getCurrentWeather = (city = 'Sydney'): Promise<void | WeatherInfo> => {
  return weatherApi
    .get('/weather', {
      params: {
        q: `${city},AU`,
        units: 'metric',
        appid: process.env.REACT_APP_WEATHER_API_KEY,
      },
    })
    .then((res) => {
      const { main, wind, weather } = res.data;
      const { temp, humidity } = main;
      const output = {
        temp,
        wind: wind.speed,
        humidity,
        weather: weather[0].main,
      };
      return output;
    })
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
  // .then((res) => {
  //   const output = [];
  //   for (let i = 0; i < 40; i++) {
  //     if ((i + 8) % 8 !== 0) {
  //       continue;
  //     }
  //     const data = res.data.list[i];
  //     const date = data.dt_txt.slice(0, 10);
  //     output.push({
  //       date,
  //       weather: data.weather[0].main,
  //       temp: data.main.temp,
  //     });
  //   }
  //   return output;
  // });
};
