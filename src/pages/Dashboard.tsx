import React, { useContext } from 'react';
import styled from 'styled-components';
import { IForecastData, IWeather } from '../api/weather';
import { FlexWrapper } from '../components/styledComponents';
import { CitiesContext } from '../context';
import Details from './Details';
import Overview from './Overview';

const DashboardWrapper = styled(FlexWrapper)`
  width: 780px;
  max-height: 544px;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export interface WeatherDataProps {
  forecastData: IForecastData;
  currentData: IWeather;
  citiesData: IWeather[];
  setCity: (value: string) => void;
}

const Dashboard: React.FC = () => {
  const { setCity, citiesData } = useContext(CitiesContext);
  return (
    <DashboardWrapper>
      <Details />
      <Overview setCity={setCity} citiesData={citiesData} />
    </DashboardWrapper>
  );
};

export default Dashboard;
