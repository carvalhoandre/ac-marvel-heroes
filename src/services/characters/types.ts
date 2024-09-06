import { Comic } from "src/@types/comics";
import { MarvelCharacter } from "src/@types/character";

export interface IResponseData<Data> {
  data: Data;
  message: string;
  status: number;
}

export interface GetAllCharactersResponse {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Array<MarvelCharacter>;
}

export interface GetComicsByCharacterResponse {
  count: number;
  limit: number;
  offset: number;
  results: Array<Comic>;
  total: number;
}
