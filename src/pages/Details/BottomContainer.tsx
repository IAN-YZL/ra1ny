import React from 'react'
import styled from 'styled-components'
import { WeatherDataProps } from '../Dashboard'
import CloudinessCard from './CloudinessCard'
import ComfortDetailsCard from './ComfortDetailsCard'
import SunDetailsCard from './SunDetailsCard'

const BottomContainerWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`

const BottomContainer = (props: WeatherDataProps) => {
	const { currentData } = props
	return (
		<BottomContainerWrapper>
			<div>
				<ComfortDetailsCard {...currentData.wind} {...currentData.main} />
				<CloudinessCard forecastData={props.forecastData} />
			</div>
			<SunDetailsCard />

		</BottomContainerWrapper>
	)

}

export default BottomContainer