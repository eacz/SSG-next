import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react'
import { Layout } from '../../components/layouts'
import pokeApi from '../../api/pokeApi'
import { Pokemon } from '../../interfaces'

interface Props {
  pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout>
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
              <Button color='gradient' ghost>
                Save on favorites
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
      </Grid.Container>
    </Layout>
  )
}

/*
  On server, GetStaticPaths is executed first, and then it pass params
  to GetStaticProps, which is executed after this 
 */

//1
//This only runs once on build time, on development runs on every refresh
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons = [...Array(151)].map((value, i) => `${i + 1}`)

  return {
    paths: pokemons.map((id) => ({
      params: { id },
    })),
    fallback: false,
  }
}

//2
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`)

  return {
    props: {
      pokemon: data,
    },
  }
}

export default PokemonPage
