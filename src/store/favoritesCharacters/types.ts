import { MarvelCharacter } from "src/@types/character";

export interface FavoritesCharactersStore {
  favoritesCharacters: Array<MarvelCharacter>;
  favoritesSearch: Array<MarvelCharacter>;
  toggleFavoriteCharacter: (newCharacter: MarvelCharacter) => void;
  setFavoritesSearch: (filteredFavorites: Array<MarvelCharacter>) => void;
}
