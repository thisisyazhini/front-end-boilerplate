import type { RickAndMorty } from '~/types/rick-and-morty'

export const useRickAndMortyStore = defineStore('RickAndMortyStore', {
  state: () => ({
    data: [] as RickAndMorty[],
  }),
  getters: {
  },
  actions: {
    async fetchData(id: string) {
      const character = this.data.find(val => val.id === Number(id))
      if (!character) {
        // Make API call and update state
        const response = await useRickAndMortyData<RickAndMorty>(`character/${id}`)
        if (response.data.value !== null) {
          this.updateDateStore([response.data.value])
        }
        return response.data.value
      }
      return character
    },
    updateDateStore(characters: RickAndMorty[]) {
      this.data = [...this.data, ...characters]
    },
  },
})
