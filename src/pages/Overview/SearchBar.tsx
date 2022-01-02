import React from 'react'
import styled, { withTheme } from 'styled-components'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { FlexWrapper } from '../../components/styledComponents';
import { Theme } from '../../theme';

const SearchBarInput = styled.input`
	height: 24px;
	width: 120px;
	border: transparent;
	background-color: ${props => props.theme.shallowMainColor};
	padding: 4px 4px 4px 30px;
	border-radius: 8px;

	&::placeholder {
		color: ${props => props.theme.searchColor};
	}

	&:focus{
		outline: none;
	}
`

const SearchBarWrapper = styled(FlexWrapper)`
	align-items: center;
	position: relative;
`

const StyledSearchIcon = styled(SearchOutlinedIcon)`
	position: absolute;
	left: 6px;
	font-size: 20px !important;
`

const SearchBar = (props: { theme: Theme }) => {
	return (
		<SearchBarWrapper>
			<StyledSearchIcon htmlColor={props.theme.searchColor} />
			<SearchBarInput
				type="text"
				placeholder="Search..."
				name="search"
			/>
		</SearchBarWrapper>
	)
}

export default withTheme(SearchBar)