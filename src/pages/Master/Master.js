import React, {  useCallback, useEffect, useState } from 'react'
import { dark, light } from '../../styles/theme'
import { Container, StyledButton, Subtitle, Image, Content, Label, HeaderContainer, ContainerMaster } from './styles'
import lukeImage from '../../assets/images/luke-skywalker.png'
import vaderImage from '../../assets/images/darth-vader.png'
import { ReactComponent as Arrow } from '../../assets/images/arrow.svg'
import { getYourMaster } from '../../services/fetchMastersService'
import { useHistory } from 'react-router'


const Master = ({ toggleTheme }) => {
	const history = useHistory()
	const [master, setMaster] = useState(null)
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)

	const fetchMasters = useCallback(async() => {
		setLoading(true)
		try {
			const data = await getYourMaster()
			setMaster(data)
			setLoading(false)
		} catch (error) {
			setError(error)
			setLoading(false)
		}
	}, [])

	useEffect(() => {
		master?.name === 'Luke Skywalker' ?
		toggleTheme(light) : toggleTheme(dark)
	}, [toggleTheme, master?.name])

	useEffect(() => {
		fetchMasters()
	}, [fetchMasters])

  return (
		<Container>
			<HeaderContainer onClick={() => history.goBack()}>
				<Arrow />
				<Label>back</Label>
			</HeaderContainer>
			<Content>
				<StyledButton title="choose your path again, Padawan" width={347} height={56} size={16} weight={700} onClick={() => fetchMasters()} disabled={loading} />
				<ContainerMaster>
					<Image src={master?.name === 'Luke Skywalker' ? lukeImage : vaderImage} alt="master-image" />
					<Subtitle>Your master is <strong>{master?.name}</strong></Subtitle>
				</ContainerMaster>
				{error && <p>{error}</p>}
			</Content>
    </Container>
	)
}

export default Master
