import React from 'react'
import styled from 'styled-components'
import { IForecastWeather, IWeather } from '../api/weather'
import { FlexWrapper } from '../components/styledComponents'
import Details from './Details'
import Overview from './Overview'

const DashboardWrapper = styled(FlexWrapper)`
	width: 800px;
	max-height: 544px;
	margin: auto;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
`

export interface WeatherDataProps {
	forecastData: IForecastWeather[]
	currentData: IWeather
}

const Dashboard = (props: WeatherDataProps) => (
	<DashboardWrapper>
		<Details {...props} />
		<Overview />
	</DashboardWrapper>
)

export default Dashboard