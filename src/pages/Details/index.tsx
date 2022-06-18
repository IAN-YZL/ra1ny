import React, { useContext } from 'react';
import styled from 'styled-components';
import CurrentWeathers from './Weathers';
import Header from './Header';
import BottomContainer from './BottomContainer';
import { CitiesContext } from '../../context';

const DetailsWrapper = styled.div`
  padding: 22px;
  width: 67%;
  background-color: ${(props) => props.theme.shallowMainColor};
  box-sizing: border-box;
`;

const Details: React.FC = () => {
  const { forecastWeathers } = useContext(CitiesContext);
  return (
    <DetailsWrapper>
      <Header />
      <CurrentWeathers weathers={forecastWeathers.list} />
      <BottomContainer />
    </DetailsWrapper>
  );
};

export default Details;
