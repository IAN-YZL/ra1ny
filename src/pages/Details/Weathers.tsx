import React, { useEffect, useState } from 'react'
import { getForecastWeather, IForecastWeather } from '../../api/weather'

const Weathers = () => {

	const [weathers, setWeathers] = useState<IForecastWeather[]>()

	useEffect(() => {
		async function fetchWeatherAPI() {
			const response = await getForecastWeather()
			if (!!response) {
				console.log(response)
				setWeathers(response)
			}
		}
		fetchWeatherAPI()
	}, [])

	return <div>test</div>
}

export default Weathers