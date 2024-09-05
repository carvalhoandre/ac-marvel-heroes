import { MarvelCharacter } from "src/@types/character";

export interface ICard {
  character: MarvelCharacter;
  isFavorite: boolean;
  onClick: (character: MarvelCharacter) => void;
}
