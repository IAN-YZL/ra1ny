import React from 'react'
import styled from 'styled-components'
import CurrentWeathers from './Weathers'
import Header from './Header'
import BottomContainer from './BottomContainer'
import { WeatherDataProps } from '../Dashboard'

const DetailsWrapper = styled.div`
	padding: 22px;
	width: 480px;
	background-color: ${props => props.theme.shallowMainColor};
`


const Details = (props: WeatherDataProps) => (
	<DetailsWrapper>
		<Header />
		<CurrentWeathers weathers={props.forecastData} />
		<BottomContainer {...props} />
	</DetailsWrapper>
)

export default Details