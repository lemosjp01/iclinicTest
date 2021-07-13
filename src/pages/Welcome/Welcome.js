import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../../components/Button/Button'
import { useTheme } from '../../hooks/useTheme'
import { Container, Title, Subtitle } from './styles'

const Welcome = () => {
  const { theme } = useTheme()
	const history = useHistory()

  return (
    <Container>
      <Title>Welcome to <strong>iClinic</strong></Title>
      <Subtitle >FRONTEND CHALLENGE</Subtitle>
      <Button bgColor={theme?.theme?.main?.colors?.blue} color={theme?.theme?.main?.colors?.white}  title="START" width={189} height={56} size={18} weight={700} marginTop={162} onClick={() => history.push('/master')} />
    </Container>
  )
}

export default Welcome
