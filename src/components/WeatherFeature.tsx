import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { FlexWrapper } from './styledComponents'

const WeatherFeatureLeft = styled.div`
	display: flex;
	width: 50%;
`

const FeatureLabel = styled.p`
	margin-left: 4px;
`

const WeatherFeatureWrapper = styled(FlexWrapper)`
	width: 100%;
	align-items: center;
	font-size: 12px;
	margin-bottom: 4px;
`

const Divider = styled.div`
	border: 1px solid #ffffff;
	height: 10px;
	margin-right: 17px;
`



const WeatherFeature = (props: { icon: ReactNode, label: string, value: string }) => {
	return (
		<WeatherFeatureWrapper>
			<WeatherFeatureLeft>
				{props.icon}
				<FeatureLabel>{props.label}</FeatureLabel>
			</WeatherFeatureLeft>
			<Divider />
			<div>{props.value}</div>
		</WeatherFeatureWrapper>
	)
}

export default WeatherFeature