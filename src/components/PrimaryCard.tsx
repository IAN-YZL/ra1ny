import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from './styledComponents';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { IWeather } from '../api/weather';
import { getWeatherIconUrl } from './WeatherCardSm';

import { WeatherFeatureCollection } from './WeatherFeature';

const LocationText = styled.p`
  font-size: 16px;
  color: #ffffff;
  margin-left: 2px;
`;

const PrimaryCardWrapper = styled.div`
  height: 280px;
  width: 100%;
  background-color: ${(props) => props.color || props.theme.mainColor};
  border-radius: 12px;
  padding: 12px;
  box-sizing: border-box;
  color: #ffffff;
`;

const WeatherIcon = styled.img`
  width: 120px;
  position: relative;
  bottom: 28px;
`;

const InfoWrapper = styled.div`
  text-align: center;
  position: relative;
`;

const InforDetails = styled.div`
  position: absolute;
  width: 100%;
  top: 72px;
`;

const DateString = styled.p`
  font-size: 12px;
`;

const TempText = styled.p`
  font-size: 48px;
  font-weight: 600;
  margin: 6px 0;
`;

const WeatherText = styled.p`
  font-size: 14px;
`;

const BottomWrapper = styled.div`
  margin: 10px 36px;
`;

interface LocationProps {
  location: string;
}

const Location: React.FC<LocationProps> = ({ location }: LocationProps) => {
  return (
    <FlexWrapper>
      <LocationOnOutlinedIcon htmlColor="#ffffff" fontSize="small" />
      <LocationText>{location}</LocationText>
    </FlexWrapper>
  );
};

export interface DetailCardProps extends IWeather {
  color?: string;
}

const PrimaryCard: React.FC<DetailCardProps> = ({
  color,
  name,
  weather,
  wind,
  main,
}: DetailCardProps) => {
  const date = new Date();

  return (
    <PrimaryCardWrapper color={color}>
      <Location location={name} />
      <InfoWrapper>
        <WeatherIcon src={getWeatherIconUrl(weather[0].icon)} alt={weather[0].description} />
        <InforDetails>
          <DateString>{`Today, ${date.toLocaleString(undefined, {
            day: 'numeric',
            month: 'long',
          })}`}</DateString>
          <TempText>
            {main.temp.toFixed()}
            <span>&#176;</span>
          </TempText>
          <WeatherText>{weather[0].main}</WeatherText>
          <BottomWrapper>
            <WeatherFeatureCollection windSpeed={wind.speed} humidity={main.humidity} />
          </BottomWrapper>
        </InforDetails>
      </InfoWrapper>
    </PrimaryCardWrapper>
  );
};

export default PrimaryCard;
