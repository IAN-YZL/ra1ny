import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { FlexWrapper } from './styledComponents'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { IWeather } from '../api/weather';
import { getWeatherIconUrl } from './WeatherCardSm';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import OpacityOutlinedIcon from '@mui/icons-material/OpacityOutlined';

const LocationText = styled.p`
	font-size: 16px;
	color: #ffffff;
	margin-left: 2px;
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
	bottom: 28px;
`

const InfoWrapper = styled.div`
	text-align: center;
	position: relative;
`

const InforDetails = styled.div`
	position: absolute;
	width: 100%;
	top: 72px;
`

const DateString = styled.p`
	font-size: 12px;
`

const TempText = styled.p`
	font-size: 48px;
	font-weight: 600;
	margin: 6px 0;
`

const WeatherText = styled.p`
	font-size: 14px;
`

const BottomWrapper = styled.div`
	margin: 10px 36px;
`

const WeatherFeatureLeft = styled.div`
	display: flex;
	width: 50%;
`

const StyledWindIcon = styled(AirOutlinedIcon)`
	font-size: 16px !important;
`

const FeatureLabel = styled.p`
	margin-left: 4px;
`

const WeatherFeatureWrapper = styled(FlexWrapper)`
	width: 100%;
	align-items: center;
	font-size: 12px;
	margin-bottom: 4px;
`

const Divider = styled.div`
	border: 1px solid #ffffff;
	height: 10px;
	margin-right: 17px;
`

const StyledWaterIcon = styled(OpacityOutlinedIcon)`
	font-size: 16px !important;
`

const WeatherFeature = (props: { icon: ReactNode, label: string, value: string }) => {
	return (
		<WeatherFeatureWrapper>
			<WeatherFeatureLeft>
				{props.icon}
				<FeatureLabel>{props.label}</FeatureLabel>
			</WeatherFeatureLeft>
			<Divider />
			<div>{props.value}</div>
		</WeatherFeatureWrapper>
	)
}


const Location = (props: { location: string }) => {

	return (
		<FlexWrapper>
			<LocationOnOutlinedIcon htmlColor='#ffffff' fontSize='small' />
			<LocationText>{props.location}</LocationText>
		</FlexWrapper>
	)
}

const PrimaryCard = (props: IWeather) => {

	const date = new Date()

	return (
		<PrimaryCardWrapper>
			<Location location={props.name} />
			<InfoWrapper>
				<WeatherIcon src={getWeatherIconUrl(props.weather[0].icon)} alt={props.weather[0].description} />
				<InforDetails>
					<DateString>{`Today, ${date.toLocaleString(undefined, { day: 'numeric', month: 'long' })}`}</DateString>
					<TempText>{props.main.temp.toFixed()}<span>&#176;</span></TempText>
					<WeatherText>{props.weather[0].main}</WeatherText>
					<BottomWrapper>
						<WeatherFeature
							icon={<StyledWindIcon />}
							label='Wind'
							value={`${props.wind.speed.toFixed()} km/h`}
						/>
						<WeatherFeature
							icon={<StyledWaterIcon />}
							label='Hum'
							value={`${props.main.humidity.toFixed()} %`}
						/>
					</BottomWrapper>
				</InforDetails>
			</InfoWrapper>
		</PrimaryCardWrapper>
	)
}

export default PrimaryCard