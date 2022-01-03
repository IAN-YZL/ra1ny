import React from 'react'
import { FlexSpaceBetweenWrapper } from '../../components/styledComponents'
import { WeatherDataProps } from '../Dashboard'
import CloudinessCard from './CloudinessCard'
import ComfortDetailsCard from './ComfortDetailsCard'
import SunDetailsCard from './SunDetailsCard'

const BottomContainer = (props: WeatherDataProps) => {
	const { currentData } = props
	return (
		<FlexSpaceBetweenWrapper>
			<div>
				<ComfortDetailsCard {...currentData.wind} {...currentData.main} />
				<CloudinessCard forecastData={props.forecastData.list} />
			</div>
			<SunDetailsCard {...currentData.sys} />

		</FlexSpaceBetweenWrapper>
	)

}

export default BottomContainer