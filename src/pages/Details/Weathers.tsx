import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getForecastWeather, IForecastWeather } from '../../api/weather'
import WeatherCardSm from '../../components/WeatherCardSm'
import getFirstWeathersData from '../../helpers/getFirstWeathersData'

const dayToWord = (day: number) => {
	return {
		0: 'Sun',
		1: 'Mon',
		2: 'Tue',
		3: 'Wed',
		4: 'Thu',
		5: 'Fri',
		6: 'Sat'
	}[day] || ''
}

const WeathersWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`

const Weathers = () => {

	const [weathers, setWeathers] = useState<IForecastWeather[]>()

	useEffect(() => {
		async function fetchWeatherAPI() {
			const response = await getForecastWeather()
			if (!!response) {
				const sanitisedData = getFirstWeathersData(response)
				console.log(sanitisedData)
				setWeathers(sanitisedData)
			}
		}
		fetchWeatherAPI()
	}, [])

	return (!!weathers ? <WeathersWrapper>{weathers.map(weather => {
		return (
			<WeatherCardSm day={dayToWord(new Date(weather.dt_txt).getDay())} temp={weather.main.temp} weather={weather.weather[0]} />
		)
	})}</WeathersWrapper> : <></>)
}

export default Weathers