import React from 'react'
import { WeatherDataProps } from '../Dashboard'
import CloudinessCard from './CloudinessCard'
import ComfortDetailsCard from './ComfortDetailsCard'

const BottomContainer = (props: WeatherDataProps) => {
	const { currentData } = props
	return (
		<>
			<ComfortDetailsCard {...currentData.wind} {...currentData.main} />
			<CloudinessCard forecastData={props.forecastData} />
		</>
	)

}

export default BottomContainer