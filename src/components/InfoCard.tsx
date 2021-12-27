import React, { ReactNode } from 'react'
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

interface InfoCardProps {
	title: string
	children?: ReactNode
}

const InfoCard = (props: InfoCardProps) => {

	return (
		<InfoCardWrapper>
			<Title>{props.title}</Title>
			{props.children}
		</InfoCardWrapper>
	)
}

export default InfoCard