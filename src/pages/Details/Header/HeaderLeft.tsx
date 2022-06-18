import React, { useEffect, useState } from 'react';
import Heading from '../../../components/Heading';
import styled from 'styled-components';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import getDayPeriod from '../../../helpers/getDayPeroiod';

const HeaderWrapper = styled.div`
  margin: 10px 0;
`;

const DateWrapper = styled.p`
  font-size: 12px;
  margin-top: 5px;
`;

const GreetingWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.mainColor};
  margin: 10px 0;
  font-weight: 600;
`;

const GreetingText = styled.p`
  font-size: 16px;
  margin-left: 5px;
`;

const refreshTimer = 60 * 1000;

const HeaderLeft: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), refreshTimer);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <HeaderWrapper>
      <Heading
        text={time.toLocaleTimeString('en-AU', {
          hour12: true,
          hour: '2-digit',
          minute: '2-digit',
        })}
      />
      <DateWrapper>
        {time.toLocaleDateString('en-AU', {
          weekday: 'long',
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        })}
      </DateWrapper>
      <GreetingWrapper>
        {getDayPeriod(time) === 'Evening' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
        <GreetingText>{`Good ${getDayPeriod(time)}!`}</GreetingText>
      </GreetingWrapper>
    </HeaderWrapper>
  );
};

export default HeaderLeft;
