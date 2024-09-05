import { create } from "zustand";

import { CharacterState } from "./types";

export const useCharacterStore = create<CharacterState>((set) => ({
  characters: [],
  totalCharacters: 0,
  currentPage: 1,
  search: "",
  showFavorites: false,
  itemsPerPage: 8,

  setCharacters: async (characters, totalCharacters) => {
    set({
      characters,
      totalCharacters,
    });
  },

  setSearch: (search) => set({ search }),

  toggleFavorites: () =>
    set((state) => ({
      showFavorites: !state.showFavorites,
      search: "",
      currentPage: 1,
    })),

  setCurrentPage: (page) => set({ currentPage: page }),
}));
