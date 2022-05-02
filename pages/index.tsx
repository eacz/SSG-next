import { GetStaticProps } from 'next'
import { NextPage } from 'next'
import { pokeApi } from '../api'
import { Layout } from '../components/layouts'

const HomePage: NextPage = (props) => {
  console.log({ props })
  return (
    <Layout title='Pokemon List'>
      <ul>
        <li>Poke</li>
        <li>Poke</li>
        <li>Poke</li>
        <li>Poke</li>
        <li>Poke</li>
        <li>Poke</li>
        <li>Poke</li>
        <li>Poke</li>
        <li>Poke</li>
        <li>Poke</li>
        <li>Poke</li>
        <li>Poke</li>
        <li>Poke</li>
      </ul>
    </Layout>
  )
}

//This only runs server-side, and the props are passed to the component
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get('/pokemon?limit=151')

  return {
    props: {
      pokemon: data.results,
    },
  }
}

export default HomePage
