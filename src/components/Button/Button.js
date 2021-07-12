import React from 'react'
import { StyledButton } from './styles'

const Button = ({ height, width, color, bgColor, title, link, weight, size, marginTop }) => (
	<StyledButton
		bgColor={bgColor}
		color={color}
		width={width}
		height={height}
		weight={weight}
		size={size}
		marginTop={marginTop}
	>
		<a href={link}>
			{title}
		</a>
	</StyledButton>
)

export default Button