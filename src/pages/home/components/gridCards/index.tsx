import IComponent from "src/@types";
import { MarvelCharacter } from "src/@types/character";

import { useCharacterStore } from "@store/characters";
import { useLoggedUserStore } from "@store/favoritesCharacters";

import { getAllCharacters } from "@services/characters";

import { getItemsPerPage } from "@helpers/innerWidth";

import FavoriteIcon from "@assets/icons/favorite.svg";
import FavoriteOutlinedIcon from "@assets/icons/favorite-outlined.svg";

import { Loading } from "@components/loading";

import { Card } from "../card";
import { Search } from "../search";
import { Pagination } from "../pagination";

import { Grid, Container, BoxLine, Label, BoxFavorite, Icon } from "./styles";

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
    setselectedCharacter,
  } = useCharacterStore();

  const itemsPorPage = getItemsPerPage();

  const currentFavorites: Array<MarvelCharacter> =
    favoritesSearch.length > 0 ? favoritesSearch : favoritesCharacters;

  const currentCharacters: Array<MarvelCharacter> = showFavorites
    ? currentFavorites
    : characters;

  console.log(favoritesCharacters);
  const hasFavorites = favoritesCharacters.length > 0;

  const fetchCharacters = async (page: number, searchQuery = "") => {
    if (showFavorites) return;

    const offset = (page - 1) * itemsPorPage;

    const response = await getAllCharacters(itemsPorPage, offset, searchQuery);

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
    if (!hasFavorites) return;

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

        <BoxFavorite onClick={handleToggleFavorites} isDisabled={!hasFavorites}>
          <Icon
            src={showFavorites ? FavoriteIcon : FavoriteOutlinedIcon}
            alt="ícone favorito"
          />
          <Label isFavorite>Somente favoritos</Label>
        </BoxFavorite>
      </BoxLine>

      {currentCharacters.length > 0 ? (
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
                  onClick={setselectedCharacter}
                  onFavoriteClick={handleToggleFavorite}
                />
              );
            })}
          </Grid>

          {!showFavorites && (
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(totalCharacters / itemsPorPage)}
              handlePageChange={handlePageChange}
            />
          )}
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export { GridCards };
