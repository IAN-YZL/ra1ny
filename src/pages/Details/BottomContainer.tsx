import React, { useEffect, useState } from 'react'
import { getCurrentWeather, WeatherInfo } from '../../api/weather'
import { getWindScale } from '../../helpers/windCategories'

const BottomContainer = () => {
	const [currentWeather, setCurrentWeather] = useState<WeatherInfo>()

	useEffect(() => {
		async function fetchWeatherAPI() {
			const response = await getCurrentWeather()
			if (!!response) {
				// const sanitisedData = getFirstWeathersData(response)
				setCurrentWeather(response)
			}
		}
		fetchWeatherAPI()
	}, [])
	return (currentWeather ? <>{getWindScale(currentWeather.wind)}</> : <></>)
}

export default BottomContainer