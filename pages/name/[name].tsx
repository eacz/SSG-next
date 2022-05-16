import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { pokeApi } from '../../api'
import { Layout } from '../../components/layouts'
import { PokemonDetailed } from '../../components/pokemon'
import { Pokemon, PokemonListResponse } from '../../interfaces'
import { capitalize, getPokemonInfo } from '../../utils'

interface Props {
  pokemon: Pokemon
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title={capitalize(pokemon.name)}>
      <PokemonDetailed pokemon={pokemon} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string }

  const pokemon = await getPokemonInfo(name)

  if (!pokemon) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return {
    props: {
      pokemon,
    },
    revalidate: 86400,
  }
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=151`)

  return {
    paths: pokemons.data.results.map(({ name }) => ({ params: { name } })),
    fallback: 'blocking',
  }
}

export default PokemonByNamePage
