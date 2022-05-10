import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { pokeApi } from '../../api'
import { Layout } from '../../components/layouts'
import { PokemonDetailed } from '../../components/pokemon'
import { Pokemon, PokemonListResponse } from '../../interfaces'
import { getPokemonInfo } from '../../utils'

interface Props {
  pokemon: Pokemon
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title='pokemon'>
      <PokemonDetailed pokemon={pokemon} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string }

  return {
    props: {
      pokemon: await getPokemonInfo(name),
    },
  }
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=151`)

  return {
    paths: pokemons.data.results.map(({ name }) => ({ params: { name } })),
    fallback: false,
  }
}

export default PokemonByNamePage
