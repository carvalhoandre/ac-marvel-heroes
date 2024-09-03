import { useEffect, useState } from "react";

import IComponent from "src/@types";
import { MarvelCharacter } from "src/@types/character";

import { getAllCharacters } from "@services/characters";

import FavoriteIcon from "@assets/icons/favorite.svg";

import { Card } from "../card";
import { Pagination } from "../pagination";
import { Grid, Container, BoxLine, Label, BoxFavorite, Icon } from "./styles";

const GridCards: IComponent = ({ testId = "grid-cards-component" }) => {
  const [characters, setCharacters] = useState<Array<MarvelCharacter>>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCharacters, setTotalCharacters] = useState(0);
  const itemsPerPage = 10;

  const fetchCharacters = async (page: number) => {
    const offset = (page - 1) * itemsPerPage;
    const response = await getAllCharacters(itemsPerPage, offset);

    setCharacters(response.data.results);
    setTotalCharacters(response.data.total);
  };

  const handleOnFavorite = (id: number) => {
    console.log(id);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    fetchCharacters(newPage);
  };

  useEffect(() => {
    fetchCharacters(currentPage);
  }, [currentPage]);

  const totalPages = Math.ceil(totalCharacters / itemsPerPage);

  return (
    <Container data-testid={`${testId}-container`}>
      <BoxLine>
        <Label>{`Encontrados ${totalPages} heróis`}</Label>

        <BoxFavorite>
          <Icon src={FavoriteIcon} alt="ícone favorito" />

          <Label isFavorite>Somente favoritos</Label>
        </BoxFavorite>
      </BoxLine>

      <Grid>
        {characters?.map((character) => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            description={character.description}
            isFavorite={false}
            onFavorite={handleOnFavorite}
            thumbnail={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          />
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
