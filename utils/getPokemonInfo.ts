import { pokeApi } from '../api'
import { Pokemon } from '../interfaces'

const getPokemonInfo = async (nameOrId: string) => {
  try {
    const {
      data: { id: pokeId, name, stats, sprites, types, abilities, weight, height, order },
    } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`)

    //TODO: type this as "Minified pokemon"
    const pokemon = {
      id: pokeId,
      name,
      stats,
      sprites: {
        front_default: sprites.front_default,
        back_default: sprites.back_default,
        front_shiny: sprites.front_shiny,
        back_shiny: sprites.back_shiny,
        other: {
          dream_world: { front_default: sprites.other?.dream_world.front_default },
        },
      },
      types,
      abilities,
      weight,
      height,
      order,
    }
    return pokemon
  } catch (error) {
    return null
  }
}

export default getPokemonInfo
