import { GetStaticProps } from 'next'
import { NextPage } from 'next'
import { pokeApi } from '../api'
import { Layout } from '../components/layouts'
import { PokemonItem, PokemonListResponse } from '../interfaces'

interface Props {
  pokemons: PokemonItem[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  console.log(pokemons)

  return (
    <Layout title='Pokemon List'>
      <ul>
        {pokemons.map((poke) => (
          <li key={poke.id}>
            #{poke.id} - {poke.name}
          </li>
        ))}
      </ul>
    </Layout>
  )
}

//This only runs server-side, and the props are passed to the component
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg
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
