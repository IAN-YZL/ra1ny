import React from 'react';
import { FlexSpaceBetweenWrapper } from '../../../components/styledComponents';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

const Header: React.FC = () => {
  return (
    <FlexSpaceBetweenWrapper>
      <HeaderLeft />
      <HeaderRight />
    </FlexSpaceBetweenWrapper>
  );
};

export default Header;
