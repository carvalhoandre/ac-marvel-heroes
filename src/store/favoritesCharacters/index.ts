import { create } from "zustand";
import { persist } from "zustand/middleware";

import { FavoritesCharactersStore } from "./types";
import { MarvelCharacter } from "src/@types/character";

export const useLoggedUserStore = create<FavoritesCharactersStore>()(
  persist(
    (set, get) => ({
      favoritesCharacters: [],

      toggleFavoriteCharacter: (newCharacter: MarvelCharacter) => {
        const currentFavorites = get().favoritesCharacters;

        const isFavorite = currentFavorites.some(
          (favorite) => favorite.id === newCharacter.id
        );

        const updatedFavorites = isFavorite
          ? currentFavorites.filter(
              (favorite) => favorite.id !== newCharacter.id
            )
          : [...currentFavorites, newCharacter];

        set({
          favoritesCharacters: updatedFavorites,
        });
      },
    }),
    {
      name: "character-favorite-storage",
    }
  )
);
