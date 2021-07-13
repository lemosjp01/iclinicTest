import React from 'react'
import { StyledButton } from './styles'

const Button = ({ height, width, color, bgColor, title, weight, size, marginTop, onClick, disabled }) => (
	<StyledButton
		bgColor={bgColor}
		color={color}
		width={width}
		height={height}
		weight={weight}
		size={size}
		marginTop={marginTop}
		onClick={onClick}
		disabled={disabled}
	>
		{title}
	</StyledButton>
)

export default Button