import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from './styledComponents'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { IWeather } from '../api/weather';
import { getWeatherIconUrl } from './WeatherCardSm';

const LocationText = styled.p`
	font-size: 16px;
	color: #ffffff;
`

const PrimaryCardWrapper = styled.div`
	height: 280px;
	width: 100%;
	background-color: ${props => props.theme.mainColor};
	border-radius: 12px;
	padding: 12px;
	box-sizing: border-box;
	color: #ffffff;
`

const WeatherIcon = styled.img`
	width: 120px;
	position: relative;
	bottom: 20px;
`

const InfoWrapper = styled.div`
	text-align: center;
	position: relative;
`

const InforDetails = styled.div`
	position: absolute;
	width: 100%;
	top: 80px;
`

const DateString = styled.p`
	font-size: 12px;
`

const TempText = styled.p`
	font-size: 40px;
	font-weight: 600;
	margin: 8px 0;
`

const Location = () => {

	return (
		<FlexWrapper>
			<LocationOnOutlinedIcon htmlColor='#ffffff' fontSize='small' />
			<LocationText>Sydney</LocationText>
		</FlexWrapper>
	)
}

const PrimaryCard = (props: IWeather) => {

	const date = new Date()

	return (
		<PrimaryCardWrapper>
			<Location />
			<InfoWrapper>
				<WeatherIcon src={getWeatherIconUrl(props.weather[0].icon)} alt={props.weather[0].description} />
				<InforDetails>
					<DateString>{`Today, ${date.toLocaleString(undefined, { day: 'numeric', month: 'long' })}`}</DateString>
					<TempText>{props.main.temp.toFixed()}<span>&#176;</span></TempText>
				</InforDetails>
			</InfoWrapper>
		</PrimaryCardWrapper>
	)
}

export default PrimaryCard