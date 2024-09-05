import IComponent from "src/@types";
import { MarvelCharacter } from "src/@types/character";

import { useCharacterStore } from "@store/characters";
import { useLoggedUserStore } from "@store/favoritesCharacters";

import { getAllCharacters } from "@services/characters";

import FavoriteIcon from "@assets/icons/favorite.svg";
import FavoriteOutlinedIcon from "@assets/icons/favorite-outlined.svg";

import { Card } from "../card";
import { Search } from "../search";
import { Pagination } from "../pagination";

import {
  Grid,
  Container,
  BoxLine,
  Label,
  BoxFavorite,
  Icon,
  EmptyLabel,
} from "./styles";

const ITEMS_POR_PAGE = 8;

const GridCards: IComponent = ({ testId = "grid-cards-component" }) => {
  const {
    favoritesCharacters,
    favoritesSearch,
    setFavoritesSearch,
    toggleFavoriteCharacter,
  } = useLoggedUserStore();

  const {
    characters,
    totalCharacters,
    currentPage,
    search,
    showFavorites,
    setSearch,
    setCharacters,
    setCurrentPage,
    toggleFavorites,
  } = useCharacterStore();

  const currentFavorites: Array<MarvelCharacter> =
    favoritesSearch.length > 0 ? favoritesSearch : favoritesCharacters;

  const currentCharacters: Array<MarvelCharacter> = showFavorites
    ? currentFavorites
    : characters;

  const fetchCharacters = async (page: number, searchQuery = "") => {
    if (showFavorites) return;

    const offset = (page - 1) * ITEMS_POR_PAGE;

    const response = await getAllCharacters(
      ITEMS_POR_PAGE,
      offset,
      searchQuery
    );

    setCharacters(response.data.results, response.data.total);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    fetchCharacters(newPage, search);
  };

  const handleSearchChange = (currentSearch: string) => {
    setSearch(currentSearch);

    if (showFavorites) {
      const filteredFavorites = favoritesCharacters.filter((character) =>
        character.name.toLowerCase().includes(currentSearch.toLowerCase())
      );

      setFavoritesSearch(filteredFavorites);
    } else {
      fetchCharacters(1, currentSearch);
    }
  };

  const handleToggleFavorite = (character: MarvelCharacter) => {
    toggleFavoriteCharacter(character);

    const filteredFavorites = favoritesCharacters.filter(
      (currentCharacter) => currentCharacter.id !== character.id
    );

    setFavoritesSearch(filteredFavorites);
  };

  const handleToggleFavorites = () => {
    toggleFavorites();

    if (!showFavorites && characters.length === 0) {
      fetchCharacters(currentPage, search);
    }
  };

  return (
    <Container data-testid={`${testId}-container`}>
      <Search onSearch={handleSearchChange} testId={`${testId}-search-input`} />

      <BoxLine>
        <Label>
          {`Encontrados ${
            showFavorites ? currentFavorites.length : totalCharacters
          } heróis`}
        </Label>

        {favoritesCharacters.length > 0 && (
          <BoxFavorite onClick={handleToggleFavorites}>
            <Icon
              src={showFavorites ? FavoriteIcon : FavoriteOutlinedIcon}
              alt="ícone favorito"
            />
            <Label isFavorite>Somente favoritos</Label>
          </BoxFavorite>
        )}
      </BoxLine>

      {currentCharacters.length === 0 ? (
        <EmptyLabel>Sem heróis encontrados</EmptyLabel>
      ) : (
        <>
          <Grid>
            {currentCharacters.map((character) => {
              const isFavorite = favoritesCharacters.some(
                (favorite) => favorite.id === character.id
              );

              return (
                <Card
                  key={character.id}
                  character={character}
                  isFavorite={isFavorite}
                  onClick={handleToggleFavorite}
                />
              );
            })}
          </Grid>

          {!showFavorites && (
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(totalCharacters / ITEMS_POR_PAGE)}
              handlePageChange={handlePageChange}
            />
          )}
        </>
      )}
    </Container>
  );
};

export { GridCards };