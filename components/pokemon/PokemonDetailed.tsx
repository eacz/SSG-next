import { useState } from 'react'
import { Grid, Card, Button, Container, Text, Image, Avatar, Spacer } from '@nextui-org/react'
import confetti from 'canvas-confetti'
import { capitalize, localFavorites, unitsConversion } from '../../utils'
import { Pokemon, Type } from '../../interfaces'

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

  const getTypesFormatted = (types: Type[]) => {
    const type = types.map((t) => t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)).join('/')
    return type
  }

  //TODO: split this into multiple components
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
      <Grid xs={12} sm={2}>
        <Card css={{ display: 'grid' }}>
          <Container display='flex' direction='row'>
            {pokemon.stats.map(({ base_stat, stat }) => (
              <Grid key={stat.name} xs>
                <Avatar color='gradient' text={stat.name.toUpperCase()} />
                <Spacer x={0.3} />
                <Avatar color='success' text={`${base_stat}`} />
              </Grid>
            ))}
          </Container>
        </Card>
      </Grid>

      <Grid xs={12} sm={4}>
        <Card>
          <Text h2>Types</Text>

          <Container>
            <Text>{getTypesFormatted(pokemon.types)}</Text>
          </Container>

          <Text h2>Abilites</Text>

          {pokemon.abilities.map(({ ability, is_hidden }) => (
            <Container
              css={{ padding: 0, margin: '0 !important' }}
              display='flex'
              justify='space-between'
              key={ability.name}
            >
              <Text b>{capitalize(ability.name)}</Text>
              <Text>{is_hidden ? 'Hidden Abilty' : 'Normal Abilty'}</Text>
            </Container>
          ))}
          <Text h3>Other Info</Text>
          <Container css={{ padding: 0, margin: '0 !important' }} display='flex' justify='space-between'>
            <Text b>Weight: </Text>
            <Text>{unitsConversion.LbsToKg(pokemon.weight)} Kgs</Text>
          </Container>
          <Container css={{ padding: 0, margin: '0 !important' }} display='flex' justify='space-between'>
            <Text b>Height: </Text>
            <Text>{unitsConversion.formatHeight(pokemon.height)} Mts</Text>
          </Container>
          <Container css={{ padding: 0, margin: '0 !important' }} display='flex' justify='space-between'>
            <Text b>Pokedex N°: </Text>
            <Text>{pokemon.order}</Text>
          </Container>
        </Card>
      </Grid>
    </Grid.Container>
  )
}

export default PokemonDetailed
