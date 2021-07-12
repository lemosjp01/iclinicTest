import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.main.colors.white};
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.main.colors.blue};
  font-size: 72px;
  font-weight: 400;
  text-align: center;
`

export const Subtitle = styled.h2`
	color: ${({ theme }) => theme.main.colors.blue};
	font-size: 14px;
	font-weight: 400;
`
