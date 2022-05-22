import React from 'react';
import { IForecastWeather } from '../../api/weather';
import { FlexSpaceBetweenWrapper } from '../../components/styledComponents';
import WeatherCardSm from '../../components/WeatherCardSm';
import getFirstWeathersData from '../../helpers/getFirstWeathersData';

const dayToWord = (day: number) => {
  return (
    {
      0: 'Sun',
      1: 'Mon',
      2: 'Tue',
      3: 'Wed',
      4: 'Thu',
      5: 'Fri',
      6: 'Sat',
    }[day] || ''
  );
};

interface WeathersProps {
  weathers: IForecastWeather[];
}

const Weathers: React.VFC<WeathersProps> = ({ weathers }: WeathersProps) => {
  const sanitisedData = getFirstWeathersData(weathers);
  return (
    <FlexSpaceBetweenWrapper>
      {sanitisedData.map((weather) => {
        return (
          <WeatherCardSm
            key={`${weather.dt_txt}-forecast`}
            day={dayToWord(new Date(weather.dt_txt).getDay())}
            temp={weather.main.temp}
            weather={weather.weather[0]}
          />
        );
      })}
    </FlexSpaceBetweenWrapper>
  );
};

export default Weathers;
