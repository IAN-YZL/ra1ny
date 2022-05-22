import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../components/styledComponents';
import SearchBar from './SearchBar';

const HeaderWrapper = styled(FlexWrapper)`
  margin-bottom: 24px;
`;

interface OverviewHeaderProps {
  setCity: (city: string) => void;
}

const OverviewHeader: React.VFC<OverviewHeaderProps> = ({ setCity }: OverviewHeaderProps) => {
  return (
    <HeaderWrapper>
      <SearchBar setCity={(value) => setCity(value)} />
    </HeaderWrapper>
  );
};

export default OverviewHeader;
