import { MarvelCharacter } from "src/@types/character";

export interface FavoritesCharactersStore {
  favoritesCharacters: Array<MarvelCharacter>;
  toggleFavoriteCharacter: (newCharacter: MarvelCharacter) => void;
}
