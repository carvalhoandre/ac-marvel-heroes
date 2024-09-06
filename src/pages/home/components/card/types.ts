import { MarvelCharacter } from "src/@types/character";

export interface ICard {
  character: MarvelCharacter;
  isFavorite: boolean;
  onFavoriteClick: (character: MarvelCharacter) => void;
  onClick: (character: MarvelCharacter) => void;
}
