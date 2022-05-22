import React from 'react';
import styled from 'styled-components';

const HeadingWrapper = styled.h2`
  color: ${(props) => props.theme.mainColor};
  margin: 0;
  text-transform: uppercase;
  font-size: 28px;
`;

interface HeadingProps {
  text: string;
}

const Heading: React.VFC<HeadingProps> = ({ text }: HeadingProps) => (
  <HeadingWrapper>{text}</HeadingWrapper>
);

export default Heading;
