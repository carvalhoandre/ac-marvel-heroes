import { useEffect, useState } from "react";

import IComponent from "src/@types";
import { MarvelCharacter } from "src/@types/character";

import { getAllCharacters } from "@services/characters";

import FavoriteIcon from "@assets/icons/favorite.svg";

import { Card } from "@/pages/home/components/card";
import { Grid, Container, BoxLine, Label, BoxFavorite, Icon } from "./styles";

const GridCards: IComponent = ({ testId = "grid-cards-component" }) => {
  const [caracters, setCaracters] = useState<Array<MarvelCharacter>>([]);

  const fetchCaracters = async () => {
    const newCaracters = await getAllCharacters();

    setCaracters(newCaracters.data.results);
  };

  const handleOnFavorite = (id: number) => {
    console.log(id);
  };

  useEffect(() => {
    fetchCaracters();
  }, []);

  return (
    <Container data-testid={`${testId}-container`}>
      <BoxLine>
        <Label>{`Encontrados ${caracters.length} heróis`}</Label>

        <BoxFavorite>
          <Icon src={FavoriteIcon} alt="ícone favorito" />

          <Label isFavorite>Somente favoritos</Label>
        </BoxFavorite>
      </BoxLine>

      <Grid>
        {caracters?.map((caracter) => (
          <Card
            key={caracter.id}
            id={caracter.id}
            name={caracter.name}
            description={caracter.description}
            isFavorite={false}
            onFavorite={handleOnFavorite}
            thumbnail={`${caracter.thumbnail.path}.${caracter.thumbnail.extension}`}
          />
        ))}
      </Grid>
    </Container>
  );
};

export { GridCards };
