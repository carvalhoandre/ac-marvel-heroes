import { useState } from "react";

import { ICard } from "./types";
import IComponent from "src/@types";

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

const Card: IComponent<ICard> = ({
  testId = "card-component",
  character,
  isFavorite,
  onClick,
  onFavoriteClick,
}) => {
  const [isImageBroken, setIsImageBroken] = useState(false);

  const thumbnail = `${character.thumbnail.path}.${character.thumbnail.extension}`;

  const handleError = () => setIsImageBroken(true);

  return (
    <Container
      data-testid={`${testId}-container`}
      onClick={() => onClick(character)}
    >
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
          onClick={() => onFavoriteClick(character)}
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
