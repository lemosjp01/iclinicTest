import styled from 'styled-components'
import Button from '../../components/Button/Button'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.master.colors.background};
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    display: flex;
    flex: 1;
    width: 100%
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 94%;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
  }
`

export const ContainerMaster = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`

export const Subtitle = styled.h2`
	color: ${({ theme }) => theme.master.colors.text};
	font-size: 36px;
	font-weight: 400;

  @media (max-width: 800px) {
    margin: -40px 100px 50px 100px;
    text-align: center;
  }
`

export const StyledButton = styled(Button).attrs({ 
	bgColor: ({ theme }) => theme.master.colors.bgButton,
	color: ({ theme }) => theme.master.colors.textButton
})``

export const Image = styled.img`
  display: flex;
	width: 380px;
	height: 380px;
  border-radius: 50%;
  margin: 91px;

  @media (max-width: 800px) {
    width: 302px;
    height: 302px;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 6%;
  align-self: flex-start;
  margin: 31px 0 0 45.15px;
  align-items: center;
  cursor: pointer;

  svg {
    & path {
      fill: ${({ theme }) => theme.master.colors.back};
    }
  }
`

export const Label = styled.span`
  color: ${({ theme }) => theme.master.colors.back};
  align-self: flex-start;
  padding: 20px;
`
