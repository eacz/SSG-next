import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Layout } from '../../components/layouts'
import { Pokemon } from '../../interfaces'
import { PokemonDetailed } from '../../components/pokemon'
import { capitalize, getPokemonInfo } from '../../utils'

interface Props {
  pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title={capitalize(pokemon.name)}>
      <PokemonDetailed pokemon={pokemon} />
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
    // fallback 'blocking' lets the app pass to GetStaticProps, so the validation of the requested page
    // needs to be done there
    fallback: 'blocking',
  }
}

//2
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }

  const pokemon = await getPokemonInfo(id)

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
    //the page will be recreated every 86400 seconds (one day) when a request comes in after that period
    revalidate: 86400,
  }
}

export default PokemonPage
