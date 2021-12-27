import { IForecastWeather } from '../api/weather';

const getFirstWeathersData = (weathers: IForecastWeather[]): IForecastWeather[] => {
  const output = [];
  for (let i = 0; i < 40; i++) {
    if ((i + 8) % 8 !== 0) {
      continue;
    }
    const data = weathers[i];
    output.push(data);
  }
  return output;
};

export default getFirstWeathersData;
