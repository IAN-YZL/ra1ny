import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { FlexWrapper } from './styledComponents'
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import OpacityOutlinedIcon from '@mui/icons-material/OpacityOutlined';

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
	margin-right: 12px;
`

const StyledWaterIcon = styled(OpacityOutlinedIcon)`
	font-size: 16px !important;
`

const StyledWindIcon = styled(AirOutlinedIcon)`
	font-size: 16px !important;

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

export const WeatherFeatureCollection = (props: { windSpeed: number, humidity: number }) => {

	return <div>
		<WeatherFeature
			icon={<StyledWindIcon />}
			label='Wind'
			value={`${props.windSpeed.toFixed()} km/h`}
		/>
		<WeatherFeature
			icon={<StyledWaterIcon />}
			label='Hum'
			value={`${props.humidity.toFixed()} %`}
		/>
	</div>
}

export default WeatherFeature