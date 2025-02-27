import { pokemonImageBaseUrl } from '../../app/constants/index'

export function getPokemonImageUrl(url: string) {
  const id = url.match(/\/(\d+)/)?.[1]
  return `${pokemonImageBaseUrl}/${id}.png`
}

export function getPokemonId(url: string) {
  return url.match(/\/(\d+)/)?.[1]
}
