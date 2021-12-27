import React from 'react'
import styled from 'styled-components'
import { WeatherBasic } from '../api/weather'

const WeatherCardWrapper = styled.div`
	width: 86px;
	height: 100px;
	background-color: #ffffff;
	border-radius: 10px;
	text-align: center;
	font-size: 12px;
	margin: 10px 0;
`

const WeatherIcon = styled.img`
	width: 50px;
	height: 50px;
`

const WeatherTempText = styled.p`
	margin-top: 4px;
`

export interface WeatherCardSmProps {
	day: string
	temp: number
	weather: WeatherBasic
}

const getWeatherIconUrl = (iconIndex: string) => {
	return `http://openweathermap.org/img/wn/${iconIndex.replace('n', 'd')}@2x.png`
}

const WeatherCardSm = (props: WeatherCardSmProps) => {

	return <WeatherCardWrapper>
		<WeatherIcon src={getWeatherIconUrl(props.weather.icon)} alt={props.weather.description} />
		<p>{props.day}</p>
		<WeatherTempText>{props.temp.toFixed()}<span>&#176;</span></WeatherTempText>

	</WeatherCardWrapper>
}

export default WeatherCardSm