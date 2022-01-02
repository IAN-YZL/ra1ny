import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../components/styledComponents'
import SearchBar from './SearchBar'

const HeaderWrapper = styled(FlexWrapper)`
	margin-bottom: 24px;
`
const OverviewHeader = () => {

	return (
		<HeaderWrapper>
			<SearchBar />


		</HeaderWrapper>
	)
}

export default OverviewHeader