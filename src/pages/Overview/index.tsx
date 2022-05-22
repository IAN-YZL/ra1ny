import React from 'react';
import styled, { withTheme } from 'styled-components';
import { IWeather } from '../../api/weather';
import PrimaryCard from '../../components/PrimaryCard';
import SecondaryCard from '../../components/SecondaryCard';
import { Theme } from '../../theme';
import OverviewHeader from './OverviewHeader';

const OverviewWrapper = styled.div`
  background-color: #ffffff;
  height: 100%;
  width: 33%;
  padding: 24px;
  box-sizing: border-box;
`;

interface OverviewProps {
  citiesData: IWeather[];
  setCity: (value: React.SetStateAction<string>) => void;
  theme: Theme;
}

const Overview: React.VFC<OverviewProps> = (props: OverviewProps) => {
  const [primary, ...others] = props.citiesData;
  const colors = [props.theme.mainColor2, props.theme.mainColor3];

  return (
    <OverviewWrapper>
      <OverviewHeader setCity={(value) => props.setCity(value)} />
      <PrimaryCard {...primary} />
      {others.map((data, index) => {
        return (
          <SecondaryCard {...data} color={colors[index]} key={`overview-${data.name}-index`} />
        );
      })}
    </OverviewWrapper>
  );
};

export default withTheme(Overview);
