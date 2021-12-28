import React, { CSSProperties, ReactNode } from 'react'
import styled from 'styled-components'

const InfoCardWrapper = styled.div`
	padding: 12px;
	width: 220px;
	background-color: #ffffff;
	border-radius: 10px;
`

const Title = styled.h3`
	font-size: 12px;
`

const HeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`

interface InfoCardProps {
	title: string
	children?: ReactNode
	headerRight?: ReactNode
	style?: CSSProperties
}

const InfoCard = (props: InfoCardProps) => {

	return (
		<InfoCardWrapper style={props.style}>
			<HeaderWrapper>
				<Title>{props.title}</Title>
				{props.headerRight}
			</HeaderWrapper>

			{props.children}
		</InfoCardWrapper>
	)
}

export default InfoCard