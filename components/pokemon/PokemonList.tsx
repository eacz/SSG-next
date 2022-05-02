import { Grid } from '@nextui-org/react'
import { PokemonItem } from '../../interfaces'
import { PokemonCard } from './'

interface Props {
  pokemons: PokemonItem[]
}
const PokemonList = ({ pokemons }: Props) => {
  return (
    <Grid.Container gap={2} justify='flex-start'>
      {pokemons.map((poke) => (
        <PokemonCard pokemon={poke} key={poke.id} />
      ))}
    </Grid.Container>
  )
}

export default PokemonList
