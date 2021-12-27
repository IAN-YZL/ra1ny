import React from 'react'
import styled from 'styled-components'

const WeatherCardWrapper = styled.div`
	width: 68px;
	height: 90px;
	background-color: #ffffff;
`

export interface WeatherCardSmProps {
	day: string
	temp: number
}

const WeatherCardSm = (props: WeatherCardSmProps) => {

	return <WeatherCardWrapper>
		<p>{props.day}</p>
		<p>{props.temp}</p>

	</WeatherCardWrapper>
}

export default WeatherCardSm