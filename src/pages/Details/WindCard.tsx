import React from 'react'
import styled from 'styled-components'
import { IWindBasic } from '../../api/weather'
import InfoCard from '../../components/InfoCard'
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import { getWindScale, getWindTerm, getWindTermAu } from '../../helpers/windCategories';

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

const WindCard = (props: IWindBasic) => {
	const windScale = getWindScale(props.speed)
	const windTerm = getWindTerm(windScale)
	const windTermAu = getWindTermAu(windScale)

	const WindHeader = () => (
		<WindHeaderWrapper>
			<AirOutlinedIcon />
			<TermsWrapper>
				<WindTerm>{windTerm}</WindTerm>
				<WindTermAu>{windTermAu}</WindTermAu>
			</TermsWrapper>
		</WindHeaderWrapper>
	)

	return (
		<InfoCard title='Wind Index'>
			<WindHeader />
		</InfoCard>
	)
}

export default WindCard