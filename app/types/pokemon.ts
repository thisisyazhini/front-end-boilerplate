export interface Pokemon {
  name: string
  url: string
}

export interface PokemonDetail {
  id: number
  name: string
  base_experience: number
  height: number
  is_default: boolean
  order: number
  weight: number
  abilities: Array<{
    ability: {
      name: string
      url: string
    }
  }>
  forms: Array<{
    name: string
    url: string
  }>
  game_indices: Array<{
    game_index: number
    version: {
      name: string
      url: string
    }
  }>
  moves: Array<{
    move: {
      name: string
      url: string
    }
  }>
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
  stats: Array<{
    stat: {
      name: string
      url: string
    }
  }>
  types: Array<{
    type: {
      name: string
      url: string
    }
  }>

}
