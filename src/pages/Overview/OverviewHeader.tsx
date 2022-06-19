import React from 'react';
import styled from 'styled-components';
import { FlexSpaceBetweenWrapper } from '../../components/styledComponents';
import SearchBar from './SearchBar';
import EditButton from './EditButton';

const HeaderWrapper = styled(FlexSpaceBetweenWrapper)`
  margin-bottom: 24px;
`;

interface OverviewHeaderProps {
  setCity: (city: string) => void;
}

const OverviewHeader: React.FC<OverviewHeaderProps> = ({ setCity }: OverviewHeaderProps) => {
  return (
    <HeaderWrapper>
      <SearchBar setCity={(value) => setCity(value)} />
      <EditButton />
    </HeaderWrapper>
  );
};

export default OverviewHeader;
