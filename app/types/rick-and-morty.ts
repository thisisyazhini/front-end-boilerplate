export interface RickAndMortyList {
  info: {
    count: number
    pages: number
    next: string
    prev: any
  }
  results: RickAndMorty[]
}

export interface RickAndMorty {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
  }
  location: {
    name: string
  }
  image: string
  episode: Array<string>
}
