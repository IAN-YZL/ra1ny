import React from 'react'
import styled from 'styled-components'
import { IForecastWeather } from '../../api/weather'
import WeatherCardSm from '../../components/WeatherCardSm'

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

const Weathers = (props: { weathers: IForecastWeather[] }) => {
	return (<WeathersWrapper>{props.weathers.map(weather => {
		return (
			<WeatherCardSm day={dayToWord(new Date(weather.dt_txt).getDay())} temp={weather.main.temp} weather={weather.weather[0]} />
		)
	})}</WeathersWrapper>)
}

export default Weathers