import React from 'react'
import styled from 'styled-components'
import { IWeather } from '../../api/weather'
import PrimaryCard from '../../components/PrimaryCard'
import OverviewHeader from './OverviewHeader'

const OverviewWrapper = styled.div`
	background-color: #ffffff;
	height: 100%;
	width: 33%;
	padding: 24px;
	box-sizing: border-box;
`

const Overview = (props: IWeather) => {

	return (
		<OverviewWrapper>
			<OverviewHeader />
			<PrimaryCard {...props} />
		</OverviewWrapper>
	)
}

export default Overview