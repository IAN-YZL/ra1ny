import React from 'react'
import styled from 'styled-components'
import { IWindBasic } from '../../api/weather'
import InfoCard from '../../components/InfoCard'
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import { getWindDirection, getWindScale, getWindTerm, getWindTermAu } from '../../helpers/windCategories';

const WindHeaderWrapper = styled.div`
	margin: 12px 0;
	display: flex;
	color: ${props => props.theme.thirdColor};
	align-items: center;
`

const WindTerm = styled.p`
	font-size: 12px;
`

const WindTermAu = styled.p`
	color: ${props => props.theme.disabledColor};
	font-size: 10px;
`

const TermsWrapper = styled.div`
	margin-left: 2px;
`

const ComfortInfosContainer = styled.div`
	display: flex;
	color: ${props => props.theme.thirdColor};
	justify-content: space-between;

`

const ComfortInfoWrapper = styled.div`
	width: 32px;
	height: 42px;
	background-color: ${props => props.theme.shallowThirdColor};
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
`

const ComfortInfoValue = styled.p`
	font-size: 10px;
	font-weight: 600;
	margin-bottom: 4px;
`

const ComfortInfoLabel = styled.p`
	font-size: 8px;
`

const ComfortInfoTextWrapper = styled.div`
	text-align: center;
`

const ComfortInfo = (props: { label: string, value: string }) => {
	return (
		<ComfortInfoWrapper>
			<ComfortInfoTextWrapper>
				<ComfortInfoValue>{props.value}</ComfortInfoValue>
				<ComfortInfoLabel>{props.label}</ComfortInfoLabel>
			</ComfortInfoTextWrapper>

		</ComfortInfoWrapper>
	)
}

interface ComfortDetailsCardProps extends IWindBasic {
	feels_like: number
	humidity: number
	pressure: number
}

const ComfortDetailsCard = (props: ComfortDetailsCardProps) => {
	const windScale = getWindScale(props.speed)
	const windTerm = getWindTerm(windScale)
	const windTermAu = getWindTermAu(windScale)

	const ComfortDetailHeader = () => (
		<WindHeaderWrapper>
			<AirOutlinedIcon />
			<TermsWrapper>
				<WindTerm>{windTerm}</WindTerm>
				<WindTermAu>{windTermAu}</WindTermAu>
			</TermsWrapper>
		</WindHeaderWrapper>
	)

	return (
		<InfoCard title='Comfort Index'>
			<ComfortDetailHeader />
			<ComfortInfosContainer>
				<ComfortInfo label='Speed' value={props.speed.toFixed(1).toString()} />
				<ComfortInfo label='Gust' value={props.gust.toFixed(1).toString()} />
				<ComfortInfo label='DIR' value={getWindDirection(props.deg)} />
				<ComfortInfo label='Feels' value={props.feels_like.toFixed(1).toString()} />
				<ComfortInfo label='HUM' value={`${props.humidity}%`} />
				<ComfortInfo label='Press' value={props.pressure.toString()} />




			</ComfortInfosContainer>

		</InfoCard>
	)
}

export default ComfortDetailsCard