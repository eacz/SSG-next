import { useState } from 'react'
import { Grid, Card, Button, Container, Text, Image, Avatar, Spacer } from '@nextui-org/react'
import confetti from 'canvas-confetti'
import { capitalize, localFavorites } from '../../utils'
import { Pokemon } from '../../interfaces'

interface Props {
  pokemon: Pokemon
}

const PokemonDetailed = ({ pokemon }: Props) => {
  const [isFavorite, setIsFavorite] = useState(localFavorites.existInFavorites(pokemon.id))

  const onToggleFavorite = () => {
    localFavorites.toggleFavorites(pokemon.id)
    setIsFavorite((s) => !s)
    if (isFavorite) return

    confetti({
      zIndex: 9999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    })
  }

  return (
    <Grid.Container css={{ marginTop: '5px' }} gap={2}>
      <Grid xs={12} sm={4}>
        <Card css={{ padding: '30px' }}>
          <Card.Body>
            <Card.Image
              src={pokemon.sprites.other?.dream_world.front_default || ''}
              alt={pokemon.name}
              width={'100%'}
              height={200}
            />
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={12} sm={8}>
        <Card>
          <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
            <Text transform='capitalize' h1>
              {pokemon.name}
            </Text>
            <Button onClick={onToggleFavorite} color='gradient' ghost={!isFavorite}>
              {isFavorite ? 'Remove from favorites' : 'Save on favorites'}
            </Button>
          </Card.Header>
          <Card.Body>
            <Text size={30}>Sprites</Text>
            <Container display='flex' direction='row'>
              <Image src={pokemon.sprites.front_default} alt={pokemon.name} height={100} width={100} />
              <Image src={pokemon.sprites.back_default} alt={pokemon.name} height={100} width={100} />
              <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} height={100} width={100} />
              <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} height={100} width={100} />
            </Container>
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={12} sm={3}>
        <Card css={{ display: 'grid' }}>
          {pokemon.stats.map((s) => (
            <Container display='flex' direction='row' key={s.stat.name}>
              <Avatar color='gradient' text={s.stat.name.toUpperCase()} />
              <Spacer x={0.3} />
              <Avatar color='success' text={`${s.base_stat}`} />
            </Container>
          ))}
        </Card>
      </Grid>

      <Grid xs={12} sm={4}>
        <Card>
          <Card.Header>
            <Text h2>Abilites</Text>
          </Card.Header>
          <Card.Body>
            {pokemon.abilities.map(({ ability }) => (
              <Text key={ability.name}>{capitalize(ability.name)}</Text>
            ))}
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  )
}

export default PokemonDetailed
