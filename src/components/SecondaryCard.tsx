import React from 'react'
import styled from 'styled-components'
import { DetailCardProps } from './PrimaryCard'

const SecondaryCardWrapper = styled.div`
	height: 50px;
	width: 100%;
	background-color: ${props => props.color || props.theme.mainColor};
	border-radius: 12px;
	padding: 12px;
	box-sizing: border-box;
	color: #ffffff;
`

const SecondaryCard = (props: DetailCardProps) => {
	console.log(props.color)
	return (
		<SecondaryCardWrapper color={props.color} >
			<p>{props.wind.speed}</p>

		</SecondaryCardWrapper>
	)
}

export default SecondaryCard