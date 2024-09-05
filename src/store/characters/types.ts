import { MarvelCharacter } from "src/@types/character";

export interface CharacterState {
  characters: Array<MarvelCharacter>;
  totalCharacters: number;
  currentPage: number;
  search: string;
  showFavorites: boolean;
  itemsPerPage: number;

  setCharacters: (
    characters: Array<MarvelCharacter>,
    totalCharacters: number
  ) => void;
  setSearch: (search: string) => void;
  toggleFavorites: () => void;
  setCurrentPage: (page: number) => void;
}
