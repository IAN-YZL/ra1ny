import React, { CSSProperties, ReactNode } from 'react';
import styled from 'styled-components';
import { FlexSpaceBetweenWrapper } from '../components/styledComponents';

const InfoCardWrapper = styled.div`
  padding: 12px;
  width: 210px;
  background-color: #ffffff;
  border-radius: 10px;
`;

const Title = styled.h3`
  font-size: 12px;
`;

interface InfoCardProps {
  title: string;
  children?: ReactNode;
  headerRight?: ReactNode;
  style?: CSSProperties;
}

const InfoCard: React.FC<InfoCardProps> = ({
  style,
  title,
  headerRight,
  children,
}: InfoCardProps) => {
  return (
    <InfoCardWrapper style={style}>
      <FlexSpaceBetweenWrapper>
        <Title>{title}</Title>
        {headerRight}
      </FlexSpaceBetweenWrapper>

      {children}
    </InfoCardWrapper>
  );
};

export default InfoCard;
