import styled from 'styled-components'

export const StyledButton = styled.button`
  background-color: ${({ bgColor, disabled }) => disabled ? 'gray' : bgColor};
  color: ${({ color }) => color};
	width: ${({ width }) => width ?? '0'}px;
	height: ${({ height }) => height ?? '0'}px;
	border-radius: 10px;
	font-size: ${({ size }) => size ?? '12'}px;
	border: none;
	margin-top: ${({ marginTop }) => marginTop ?? '0'}px;
	font-weight: ${({ weight }) => weight ?? 'normal'};
	line-height: 21.94px;
`