import React, { useContext } from 'react';
import { FlexSpaceBetweenWrapper } from '../../components/styledComponents';
import { CitiesContext } from '../../context';
import CloudinessCard from './CloudinessCard';
import ComfortDetailsCard from './ComfortDetailsCard';
import SunDetailsCard from './SunDetailsCard';

const BottomContainer: React.FC = () => {
  const { currentWeather, forecastWeathers } = useContext(CitiesContext);
  return (
    <FlexSpaceBetweenWrapper>
      <div>
        <ComfortDetailsCard
          {...currentWeather.wind}
          {...currentWeather.main}
          location={currentWeather.name}
        />
        <CloudinessCard forecastData={forecastWeathers.list} />
      </div>
      <SunDetailsCard />
    </FlexSpaceBetweenWrapper>
  );
};

export default BottomContainer;
