import { Card, Grid } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import Layout from '../../components/layouts/Layout'
import { FavoritePokemons } from '../../components/pokemon'
import { NoFavorites } from '../../components/ui'
import { localFavorites } from '../../utils'

export default function FavoritePage() {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons())
  }, [])

  return (
    <Layout title='Favorites'>
      <h1>Favorites</h1>
      {favoritesPokemons.length === 0 ? <NoFavorites /> : <FavoritePokemons pokemons={favoritesPokemons} />}
    </Layout>
  )
}
