const localStoragePropertyName = 'favorites'

const getFavorites = (): number[] => JSON.parse(localStorage.getItem(localStoragePropertyName) || '[]')

const toggleFavorites = (id: number) => {
  let favorites: number[] = getFavorites()
  if (favorites.includes(id)) {
    favorites = favorites.filter((favId) => favId !== id)
  } else {
    favorites.push(id)
  }
  localStorage.setItem(localStoragePropertyName, JSON.stringify(favorites))
}

const existInFavorites = (id: number): boolean => {
  if (typeof window === 'undefined') return false

  const favorites: number[] = getFavorites()
  return favorites.includes(id)
}

const localFavorites = {
  toggleFavorites,
  existInFavorites,
}

export default localFavorites
