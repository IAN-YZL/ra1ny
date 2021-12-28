import React, { ReactNode } from 'react'
import styled from 'styled-components'

const InfoCardWrapper = styled.div`
	padding: 12px;
	width: 220px;
	background-color: #ffffff;
	border-radius: 10px;
	margin-bottom: 10px;
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
}

const InfoCard = (props: InfoCardProps) => {

	return (
		<InfoCardWrapper>
			<HeaderWrapper>
				<Title>{props.title}</Title>
				{props.headerRight}
			</HeaderWrapper>

			{props.children}
		</InfoCardWrapper>
	)
}

export default InfoCard