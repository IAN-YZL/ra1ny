import React from 'react'
import styled from 'styled-components'
import { IForecastWeather, IWeather } from '../api/weather'
import Details from './Details'

const DashboardWrapper = styled.div`
	width: 1000px;
	height: 544px;
	margin: auto;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background-color: white;
`

export interface WeatherDataProps {
	forecastData: IForecastWeather[]
	currentData: IWeather
}

const Dashboard = (props: WeatherDataProps) => (
	<DashboardWrapper>
		<Details {...props} />
	</DashboardWrapper>
)

export default Dashboard