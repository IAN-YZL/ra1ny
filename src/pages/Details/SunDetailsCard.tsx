import React from 'react'
import styled, { withTheme } from 'styled-components'
import InfoCard from '../../components/InfoCard'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Theme } from '../../theme';
import { FlexWrapper } from '../../components/styledComponents';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { ISunDetails } from '../../api/weather';
import { WeatherDataProps } from '../Dashboard';

const StyledLocationIcon = styled(LocationOnOutlinedIcon)`
	font-size: 14px !important;
`

const SunCardWrapper = styled.div`
width: 194px;
height: 56px;
background-color: #fff8ef;
padding: 6px;
border-radius: 8px;
margin: 6px 0;
`

const LocationText = styled.p`
	font-size: 12px;
	font-weight: 600;
	margin-left: 2px;
`

const SunStatusLabel = styled.p`
	font-size: 12px;
	color: ${props => props.theme.disabledColor};
`

const SunStatusTime = styled.p`
	font-size: 12px;
	color: ${props => props.theme.mainColor};
`

const SunStatusTextWrapper = styled.div`
	margin-left: 6px;
`

const SunStatusWrapper = styled(FlexWrapper)`
	align-items: center;
	width: 50%;
`

interface SunCardProps extends ISunDetails {
	location: string
}

const SunCard = (props: SunCardProps) => {
	const { location } = props
	const Header = withTheme((props: { theme: Theme }) => (
		<FlexWrapper>
			<StyledLocationIcon htmlColor={props.theme.mainColor} fontSize='small' />
			<LocationText>{location}</LocationText>
		</FlexWrapper>
	))

	const SunStatus = withTheme((props: { type: 'sunrise' | 'sunset', time: string, theme: Theme }) => {
		return (
			<SunStatusWrapper>
				{props.type === 'sunrise' ? <LightModeOutlinedIcon fontSize='small' htmlColor={props.theme.secondColor} /> : <DarkModeOutlinedIcon fontSize='small' htmlColor={props.theme.secondColor} />}
				<SunStatusTextWrapper>
					<SunStatusLabel>{props.type === 'sunrise' ? 'Sunrise' : 'Sunset'}</SunStatusLabel>
					<SunStatusTime>{props.time}</SunStatusTime>
				</SunStatusTextWrapper>
			</SunStatusWrapper>
		)
	})

	return (
		<SunCardWrapper>
			<Header />
			<FlexWrapper style={{ marginTop: '12px' }}>
				<SunStatus type='sunrise' time={new Date(props.sunrise * 1000).toLocaleTimeString('en-AU', { hour: 'numeric', minute: "2-digit" })} />
				<SunStatus type='sunset' time={new Date(props.sunset * 1000).toLocaleTimeString('en-AU', { hour: 'numeric', minute: "2-digit" })} />
			</FlexWrapper>
		</SunCardWrapper>
	)
}

const SunDetailsCard = (props: WeatherDataProps) => {
	const { citiesData } = props
	// {...currentData.sys} location={currentData.name}
	return (
		<InfoCard title='Sunrise & Sunset'>
			{/* <SunCard {...props} /> */}
			{citiesData.map(data => {
				return <SunCard {...data.sys} location={data.name} key={`sun-detail-${data.name}`} />
			})}
		</InfoCard>
	)
}

export default SunDetailsCard