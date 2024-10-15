import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import IComponent from "@/@types";
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
  const navigate = useNavigate();

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

  const itemsPerPage = getItemsPerPage();
  const currentFavorites =
    favoritesSearch.length > 0 ? favoritesSearch : favoritesCharacters;
  const currentCharacters = showFavorites ? currentFavorites : characters;
  const hasFavorites = favoritesCharacters.length > 0;

  const fetchCharacters = async (page: number, searchQuery = "") => {
    if (showFavorites) return;

    const offset = (page - 1) * itemsPerPage;
    const response = await getAllCharacters(itemsPerPage, offset, searchQuery);
    setCharacters(response.data.results, response.data.total);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleSearchChange = (currentSearch: string) => {
    setSearch(currentSearch);

    if (showFavorites) {
      const filteredFavorites = favoritesCharacters.filter((character) =>
        character.name.toLowerCase().includes(currentSearch.toLowerCase())
      );

      setFavoritesSearch(filteredFavorites);
    } else {
      setCurrentPage(1);
    }
  };

  const handleToggleFavorite = (character: MarvelCharacter) => {
    toggleFavoriteCharacter(character);
    if (showFavorites) {
      const filteredFavorites = favoritesCharacters.filter(
        (currentCharacter) => currentCharacter.id !== character.id
      );
      setFavoritesSearch(filteredFavorites);
    }
  };

  const handleToggleFavorites = () => {
    if (!hasFavorites) return;
    toggleFavorites();
  };

  const handleSelectedCharacter = (character: MarvelCharacter | null): void => {
    setselectedCharacter(character);

    if (!character) return;

    navigate(`/hero/${character.id}`);
  };

  useEffect(() => {
    if (!showFavorites) {
      fetchCharacters(currentPage, search);
    }
  }, [currentPage, search, showFavorites]);

  if (currentCharacters?.length === 0) return <Loading />;

  return (
    <Container data-testid={`${testId}-container`}>
      <Search onSearch={handleSearchChange} testId={`${testId}-search-input`} />

      <BoxLine>
        <Label>{`Encontrados ${
          showFavorites ? currentFavorites.length : totalCharacters
        } heróis`}</Label>

        <BoxFavorite onClick={handleToggleFavorites} isDisabled={!hasFavorites}>
          <Icon
            src={showFavorites ? FavoriteIcon : FavoriteOutlinedIcon}
            alt="ícone favorito"
          />
          <Label isFavorite>Somente favoritos</Label>
        </BoxFavorite>
      </BoxLine>

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
              onClick={() => handleSelectedCharacter(character)}
              onFavoriteClick={() => handleToggleFavorite(character)}
            />
          );
        })}
      </Grid>

      {!showFavorites && (
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(totalCharacters / itemsPerPage)}
          handlePageChange={handlePageChange}
        />
      )}
    </Container>
  );
};

export { GridCards };
