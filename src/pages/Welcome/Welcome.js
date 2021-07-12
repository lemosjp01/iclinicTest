import React from 'react'
import Button from '../../components/Button/Button'
import { useTheme } from '../../hooks/useTheme'
import { Container, Title, Subtitle } from './styles'

const Welcome = () => {
  const { theme } = useTheme()
  return (
    <Container>
      <Title>Welcome to <strong>iClinic</strong></Title>
      <Subtitle >FRONTEND CHALLENGE</Subtitle>
      <Button bgColor={theme?.theme?.main?.colors?.blue} color={theme?.theme?.main?.colors?.white} link="/master" title="START" width={189} height={56} size={18} weight={700} marginTop={162} />
    </Container>
  )
}

export default Welcome
