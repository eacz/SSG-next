import { Container, Image, Text } from '@nextui-org/react'

const styles = {
  display: 'flex',
  flexDirection: 'column',
  height: 'calc(100vh - 100px)',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'center',
}

const NoFavorites = () => {
  return (
    <Container css={styles}>
      <Text h1>There&apos;s no favorites</Text>
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/54.svg'
        alt='confused psyduck'
        width={250}
        height={250}
        css={{ opacity: 0.5 }}
      />
    </Container>
  )
}

export default NoFavorites
