import { IResponseData, GetAllCharactersResponse } from "./types";
import PortalApi from "../api";

export const getAllCharacters = async (
  limit = 20,
  offset = 0,
  searchQuery?: string
): Promise<IResponseData<GetAllCharactersResponse>> => {
  try {
    const params: any = {
      limit,
      offset,
    };

    if (searchQuery) {
      params.nameStartsWith = searchQuery;
    }

    const response = await PortalApi.get("/characters", {
      params,
    });

    if (response.status !== 200) throw new Error(response.statusText);

    return response.data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
};
