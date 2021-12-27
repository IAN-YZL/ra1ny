import React from 'react'
import styled from 'styled-components'
import Header from './Header'

const DetailsWrapper = styled.div`
	padding: 22px;
	width: 660px;
	height: 660px;
`


const Details = () => (
	<DetailsWrapper>
		<Header />
	</DetailsWrapper>
)

export default Details