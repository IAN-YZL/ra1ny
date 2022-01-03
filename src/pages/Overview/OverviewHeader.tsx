import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../components/styledComponents'
import SearchBar from './SearchBar'

const HeaderWrapper = styled(FlexWrapper)`
	margin-bottom: 24px;
`
const OverviewHeader = (props: { setCity: (value: React.SetStateAction<string>) => void }) => {
	return (
		<HeaderWrapper>
			<SearchBar setCity={(value) => props.setCity(value)} />


		</HeaderWrapper>
	)
}

export default OverviewHeader