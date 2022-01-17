import React from 'react'
import styled from 'styled-components'
import { DetailCardProps } from './PrimaryCard'
import { WeatherFeatureCollection } from './WeatherFeature'

const SecondaryCardWrapper = styled.div`
	height: 50px;
	width: 100%;
	background-color: ${props => props.color || props.theme.mainColor};
	border-radius: 12px;
	padding: 0 12px;
	box-sizing: border-box;
	color: #ffffff;
	display: flex;
	align-items: center;
	margin-top: 16px;
`

const CollectionWrapper = styled.div`
	width: 60%;
`

const RightWrapper = styled.div`
	justify-content: right;
	margin-left: auto;
	margin-right: 0;

	& p {
		float: right;
	}
`

const SecondaryCard = (props: DetailCardProps) => {
	console.log(props.color)
	return (
		<SecondaryCardWrapper color={props.color} >
			<CollectionWrapper>
				<WeatherFeatureCollection windSpeed={props.wind.speed} humidity={props.main.humidity} />

			</CollectionWrapper>
			<RightWrapper>
				<p>{props.name}</p>
				<p>{props.main.temp}</p>
			</RightWrapper>

		</SecondaryCardWrapper>
	)
}

export default SecondaryCard