import React from 'react';
import styled, { withTheme } from 'styled-components';
import { IWindBasic } from '../../api/weather';
import InfoCard from '../../components/InfoCard';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import {
  getWindDirection,
  getWindScale,
  getWindTerm,
  getWindTermAu,
} from '../../helpers/windCategories';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Theme } from '../../theme';
import { FlexSpaceBetweenWrapper, FlexWrapper } from '../../components/styledComponents';

const WindHeaderWrapper = styled.div`
  margin: 12px 0;
  display: flex;
  color: ${(props) => props.theme.thirdColor};
  align-items: center;
`;

const WindTerm = styled.p`
  font-size: 12px;
`;

const WindTermAu = styled.p`
  color: ${(props) => props.theme.disabledColor};
  font-size: 12px;
`;

const TermsWrapper = styled.div`
  margin-left: 2px;
`;

const ComfortInfosContainer = styled(FlexSpaceBetweenWrapper)`
  color: ${(props) => props.theme.thirdColor};
`;

const ComfortInfoWrapper = styled.div`
  width: 32px;
  height: 42px;
  background-color: ${(props) => props.theme.shallowThirdColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

const ComfortInfoValue = styled.p`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const ComfortInfoLabel = styled.p`
  font-size: 8px;
`;

const ComfortInfoTextWrapper = styled.div`
  text-align: center;
`;

const ComfortInfo = (props: { label: string; value: string }) => {
  return (
    <ComfortInfoWrapper>
      <ComfortInfoTextWrapper>
        <ComfortInfoValue>{props.value}</ComfortInfoValue>
        <ComfortInfoLabel>{props.label}</ComfortInfoLabel>
      </ComfortInfoTextWrapper>
    </ComfortInfoWrapper>
  );
};

interface ComfortDetailsCardProps extends IWindBasic {
  feels_like: number;
  humidity: number;
  pressure: number;
  location: string;
}

const ComfortDetailHeader = (props: { windTerm: string; windTermAu: string }) => (
  <WindHeaderWrapper>
    <AirOutlinedIcon />
    <TermsWrapper>
      <WindTerm>{props.windTerm}</WindTerm>
      <WindTermAu>{props.windTermAu}</WindTermAu>
    </TermsWrapper>
  </WindHeaderWrapper>
);

const StyledLocationIcon = styled(LocationOnOutlinedIcon)`
  font-size: 14px !important;
`;

const LocationComp = withTheme((props: { location: string; theme: Theme }) => {
  return (
    <FlexWrapper>
      <StyledLocationIcon htmlColor={props.theme.mainColor} />
      <WindTermAu>{props.location}</WindTermAu>
    </FlexWrapper>
  );
});

const ComfortDetailsCard: React.FC<ComfortDetailsCardProps> = ({
  speed,
  location,
  deg,
  feels_like,
  humidity,
  pressure,
}: ComfortDetailsCardProps) => {
  const windScale = getWindScale(speed);
  const windTerm = getWindTerm(windScale);
  const windTermAu = getWindTermAu(windScale);

  return (
    <InfoCard title="Comfort Index" headerRight={<LocationComp location={location} />}>
      <ComfortDetailHeader windTerm={windTerm} windTermAu={windTermAu} />
      <ComfortInfosContainer>
        <ComfortInfo label="Speed" value={speed.toFixed(1).toString()} />
        {/* openWeather api removed 'gust' data. */
        /* <ComfortInfo label='Gust' value={props.gust.toFixed(1).toString()} /> */}
        <ComfortInfo label="DIR" value={getWindDirection(deg)} />
        <ComfortInfo label="Feels" value={feels_like.toFixed(1).toString()} />
        <ComfortInfo label="HUM" value={`${humidity}%`} />
        <ComfortInfo label="Press" value={pressure.toString()} />
      </ComfortInfosContainer>
    </InfoCard>
  );
};

export default ComfortDetailsCard;
