import React from 'react';
import styled from 'styled-components';
import { IForecastData, IWeather } from '../api/weather';
import { FlexWrapper } from '../components/styledComponents';
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
  setCity: (value: React.SetStateAction<string>) => void;
}

const Dashboard: React.VFC<WeatherDataProps> = (props: WeatherDataProps) => (
  <DashboardWrapper>
    <Details {...props} />
    <Overview setCity={(value) => props.setCity(value)} citiesData={props.citiesData} />
  </DashboardWrapper>
);

export default Dashboard;
