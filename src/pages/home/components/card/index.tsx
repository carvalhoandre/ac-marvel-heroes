import { useState, useCallback } from "react";

import IComponent from "src/@types";

import { useLoggedUserStore } from "@store/favoritesCharacters";

import FavoriteIcon from "@assets/icons/favorite.svg";
import FavoriteOutlinedIcon from "@assets/icons/favorite-outlined.svg";

import {
  Title,
  Paragraph,
  Container,
  Image,
  BoxLine,
  Icon,
  FallbackImage,
} from "./styles";
import { ICard } from "./types";

const Card: IComponent<ICard> = ({ testId = "card-component", character }) => {
  const [favoritesCharacters, toggleFavoriteCharacter] = useLoggedUserStore(
    ({ favoritesCharacters, toggleFavoriteCharacter }) => [
      favoritesCharacters,
      toggleFavoriteCharacter,
    ]
  );

  const [isToggling, setIsToggling] = useState(false);
  const [isImageBroken, setIsImageBroken] = useState(false);

  const thumbnail = `${character.thumbnail.path}.${character.thumbnail.extension}`;

  const isFavorite = favoritesCharacters.some(
    (favorite) => favorite.id === character.id
  );

  const handleError = () => setIsImageBroken(true);

  const handleToggleFavorite = useCallback(() => {
    if (!isToggling) {
      setIsToggling(true);
      toggleFavoriteCharacter(character);
      setTimeout(() => setIsToggling(false), 300);
    }
  }, [isToggling, toggleFavoriteCharacter, character]);

  return (
    <Container data-testid={`${testId}-container`}>
      {!isImageBroken ? (
        <Image
          src={thumbnail}
          data-testid={`${testId}-image`}
          alt={`imagem ilustrativa do ${character.name}`}
          onError={handleError}
        />
      ) : (
        <FallbackImage data-testid={`${testId}-fallback-image`}>
          {character.name.charAt(0)}
        </FallbackImage>
      )}

      <BoxLine>
        <Title data-testid={`${testId}-title`}>{character.name}</Title>

        <Icon
          onClick={handleToggleFavorite}
          data-testid={`${testId}-icon`}
          src={isFavorite ? FavoriteIcon : FavoriteOutlinedIcon}
          alt="ícone favorito"
        />
      </BoxLine>

      <Paragraph data-testid={`${testId}-paragraph`}>
        {character.description || "Sem descrição disponível."}
      </Paragraph>
    </Container>
  );
};

export { Card };
