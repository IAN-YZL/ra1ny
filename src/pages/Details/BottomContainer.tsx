import React, { useEffect, useState } from 'react'
import { getCurrentWeather, IWeather } from '../../api/weather'
import CloudinessCard from './CloudinessCard'
import ComfortDetailsCard from './ComfortDetailsCard'

const BottomContainer = () => {
	const [currentWeather, setCurrentWeather] = useState<IWeather>()

	useEffect(() => {
		async function fetchWeatherAPI() {
			const response = await getCurrentWeather()
			if (!!response) {
				console.log(response)
				setCurrentWeather(response)
			}
		}
		fetchWeatherAPI()
	}, [])

	return (currentWeather ? <>
		<ComfortDetailsCard {...currentWeather.wind} {...currentWeather.main} />
		<CloudinessCard />
	</> : <></>)

}

export default BottomContainer