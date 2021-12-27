import React from 'react'
import styled from 'styled-components'
import CurrentWeathers from './Weathers'
import Header from './Header'

const DetailsWrapper = styled.div`
	padding: 22px;
	width: 480px;
	height: 500px;
	background-color: ${props => props.theme.shallowMainColor};
`


const Details = () => (
	<DetailsWrapper>
		<Header />
		<CurrentWeathers />
	</DetailsWrapper>
)

export default Details