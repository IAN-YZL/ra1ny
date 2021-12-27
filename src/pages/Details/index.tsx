import React from 'react'
import styled from 'styled-components'
import Header from './Header'

const DetailsWrapper = styled.div`
	padding: 22px;
	width: 660px;
	height: 656px;
	background-color: ${props => props.theme.shallowMainColor};
`


const Details = () => (
	<DetailsWrapper>
		<Header />
	</DetailsWrapper>
)

export default Details