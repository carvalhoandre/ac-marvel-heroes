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
  IconWrapper,
} from "./styles";

const Card: IComponent<ICard> = ({
  testId = "card-component",
  character,
  isFavorite,
  loading = "eager",
  onClick,
  onFavoriteClick,
}) => {
  const [isImageBroken, setIsImageBroken] = useState(false);

  const thumbnail = `${character.thumbnail.path}.${character.thumbnail.extension}`;

  const handleError = () => setIsImageBroken(true);

  const handleFavoriteClick = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    onFavoriteClick(character);
  };

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
          loading={loading}
        />
      ) : (
        <FallbackImage data-testid={`${testId}-fallback-image`}>
          {character.name.charAt(0)}
        </FallbackImage>
      )}

      <BoxLine>
        <Title data-testid={`${testId}-title`}>{character.name}</Title>

        <IconWrapper
          onClick={handleFavoriteClick}
          data-testid={`${testId}-icon-wrapper`}
        >
          <Icon
            data-testid={`${testId}-icon`}
            src={isFavorite ? FavoriteIcon : FavoriteOutlinedIcon}
            alt="ícone favorito"
            loading="lazy"
          />
        </IconWrapper>
      </BoxLine>

      <Paragraph data-testid={`${testId}-paragraph`}>
        {character.description || "Sem descrição disponível."}
      </Paragraph>
    </Container>
  );
};

export { Card };
