import React from 'react'
import styled, { withTheme } from 'styled-components'
import InfoCard from '../../components/InfoCard'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Theme } from '../../theme';
import { FlexWrapper } from '../../components/styledComponents';

const StyledLocationIcon = styled(LocationOnOutlinedIcon)`
	font-size: 14px !important;
`

const SunCardWrapper = styled.div`
	width: 194px;
	height: 60px;
	background-color: ${props => props.theme.shallowSecondColor};
	padding: 8px;
	border-radius: 8px;
	margin: 10px 0;
`

const LocationText = styled.p`
	font-size: 12px;
	font-weight: 600;
`

const SunCard = () => {
	const Header = withTheme((props: { theme: Theme }) => (
		<FlexWrapper>
			<StyledLocationIcon htmlColor={props.theme.mainColor} />
			<LocationText>Sydney</LocationText>
		</FlexWrapper>
	))
	return <SunCardWrapper>
		<Header />
		<FlexWrapper>

		</FlexWrapper>
	</SunCardWrapper>
}

const SunDetailsCard = () => {
	return (
		<InfoCard title='Sunrise & Sunset'>
			<>
				<SunCard />

			</>

		</InfoCard>
	)
}

export default SunDetailsCard