import { NextPage, GetStaticProps } from 'next'
import { pokeApi } from '../api'
import { Layout } from '../components/layouts'
import { PokemonItem, PokemonListResponse } from '../interfaces'
import { PokemonList } from '../components/pokemon'

interface Props {
  pokemons: PokemonItem[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title='Pokemon List'>
      <PokemonList pokemons={pokemons} />
    </Layout>
  )
}

//This only runs server-side, and the props are passed to the component
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  const pokemons: PokemonItem[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`,
  }))
  return {
    props: {
      pokemons,
    },
  }
}

export default HomePage
