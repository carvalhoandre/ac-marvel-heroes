import { useEffect, useState } from "react";

import IComponent from "src/@types";
import { MarvelCharacter } from "src/@types/character";

import { useLoggedUserStore } from "@store/favoritesCharacters";

import { getAllCharacters } from "@services/characters";

import FavoriteIcon from "@assets/icons/favorite.svg";
import FavoriteOutlinedIcon from "@assets/icons/favorite-outlined.svg";

import { Card } from "../card";
import { Pagination } from "../pagination";
import { Grid, Container, BoxLine, Label, BoxFavorite, Icon } from "./styles";

const GridCards: IComponent = ({ testId = "grid-cards-component" }) => {
  const favoritesCharacters = useLoggedUserStore(
    ({ favoritesCharacters }) => favoritesCharacters
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [showFavorites, setShowFavorites] = useState(false);
  const [characters, setCharacters] = useState<Array<MarvelCharacter>>([]);

  const itemsPerPage = 10;

  const totalPages = Math.ceil(totalCharacters / itemsPerPage);

  const currentCharacters = showFavorites ? favoritesCharacters : characters;

  const fetchCharacters = async (page: number) => {
    const offset = (page - 1) * itemsPerPage;
    const response = await getAllCharacters(itemsPerPage, offset);

    setCharacters(response.data.results);
    setTotalCharacters(response.data.total);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    fetchCharacters(newPage);
  };

  useEffect(() => {
    fetchCharacters(currentPage);
  }, [currentPage]);

  return (
    <Container data-testid={`${testId}-container`}>
      <BoxLine>
        <Label>{`Encontrados ${totalPages} heróis`}</Label>

        {favoritesCharacters.length > 0 && (
          <BoxFavorite onClick={() => setShowFavorites((state) => !state)}>
            <Icon
              src={showFavorites ? FavoriteIcon : FavoriteOutlinedIcon}
              alt="ícone favorito"
            />

            <Label isFavorite>Somente favoritos</Label>
          </BoxFavorite>
        )}
      </BoxLine>

      <Grid>
        {currentCharacters?.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </Grid>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </Container>
  );
};

export { GridCards };
