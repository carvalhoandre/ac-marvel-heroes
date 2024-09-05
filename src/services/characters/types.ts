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
