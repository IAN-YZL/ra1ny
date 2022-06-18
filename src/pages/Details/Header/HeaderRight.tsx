import React, { useContext } from 'react';
import styled from 'styled-components';
import { CitiesContext } from '../../../context';

const HeaderRightWrapper = styled.div`
  color: ${(props) => props.theme.mainColor};
  margin: 8px 16px;
  font-size: 36px;
  font-weight: bold;
`;

const HeaderRight: React.FC = () => {
  const { cities } = useContext(CitiesContext);

  return cities ? <HeaderRightWrapper>{cities[0].name}</HeaderRightWrapper> : null;
};

export default HeaderRight;
