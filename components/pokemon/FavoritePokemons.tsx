import { Grid } from '@nextui-org/react'
import { FavoriteCardPokemon } from './'

interface Props {
  pokemons: number[]
}

const FavoritePokemons = ({ pokemons }: Props) => {
  return (
    <Grid>
      <Grid.Container gap={2} direction='row' justify='flex-start'>
        {pokemons.map((id) => (
          <FavoriteCardPokemon key={id} id={id} />
        ))}
      </Grid.Container>
    </Grid>
  )
}

export default FavoritePokemons
