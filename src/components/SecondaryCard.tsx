import React from 'react';
import styled from 'styled-components';
import { DetailCardProps } from './PrimaryCard';
import { WeatherFeatureCollection } from './WeatherFeature';

const SecondaryCardWrapper = styled.div`
  height: 60px;
  width: 100%;
  background-color: ${(props) => props.color || props.theme.mainColor};
  border-radius: 12px;
  padding: 0 12px;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  align-items: center;
  margin-top: 16px;
  justify-content: space-between;
`;

const CollectionWrapper = styled.div`
  width: 60%;
`;

const RightWrapper = styled.div`
  width: 40%;
  text-align: right;
  & p {
    font-size: 14px;
  }
`;

const SecondaryCard: React.FC<DetailCardProps> = (props: DetailCardProps) => (
  <SecondaryCardWrapper color={props.color}>
    <CollectionWrapper>
      <WeatherFeatureCollection windSpeed={props.wind.speed} humidity={props.main.humidity} />
    </CollectionWrapper>
    <RightWrapper>
      <p style={{ marginBottom: '6px' }}>{props.name}</p>
      <p>
        {props.main.temp.toFixed()}
        <span>&#176;</span>
      </p>
    </RightWrapper>
  </SecondaryCardWrapper>
);

export default SecondaryCard;
