import React, {  useEffect } from 'react'
import { light } from '../../styles/theme'
import { Container, StyledButton, Subtitle, Image, Content, Label, HeaderContainer, ContainerMaster } from './styles'
import lukeImage from '../../assets/images/luke-skywalker.png'
import { ReactComponent as Arrow } from '../../assets/images/arrow.svg'


const Master = ({ toggleTheme }) => {

	useEffect(() => {
		toggleTheme(light)
	}, [toggleTheme])

  return (
		<Container>
			<HeaderContainer>
				<Arrow />
				<Label>back</Label>
			</HeaderContainer>
			<Content>
				<StyledButton title="choose your path again, Padawan" width={347} height={56} size={16} weight={700} />
				<ContainerMaster>
					<Image src={lukeImage} alt="master-image" />
					<Subtitle>Your master is <strong>Luke Skywalker</strong></Subtitle>
				</ContainerMaster>
			</Content>
    </Container>
	)
}

export default Master
