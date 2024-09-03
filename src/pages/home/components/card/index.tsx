import { useState } from "react";
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
import { ICard } from "./types";

const Card: IComponent<ICard> = ({
  testId = "card-component",
  id,
  name,
  description,
  isFavorite,
  thumbnail,
  onFavorite,
}) => {
  const [isImageBroken, setIsImageBroken] = useState(false);

  const handleError = () => {
    setIsImageBroken(true);
  };

  return (
    <Container data-testid={`${testId}-container`}>
      {!isImageBroken ? (
        <Image
          src={thumbnail}
          data-testid={`${testId}-image`}
          alt={`imagem ilustrativa do ${name}`}
          onError={handleError}
        />
      ) : (
        <FallbackImage data-testid={`${testId}-fallback-image`}>
          {name.charAt(0)}
        </FallbackImage>
      )}

      <BoxLine>
        <Title data-testid={`${testId}-title`}>{name}</Title>

        <Icon
          onClick={() => onFavorite(id)}
          data-testid={`${testId}-icon`}
          src={isFavorite ? FavoriteIcon : FavoriteOutlinedIcon}
          alt="ícone favorito"
        />
      </BoxLine>

      <Paragraph data-testid={`${testId}-paragraph`}>{description}</Paragraph>
    </Container>
  );
};

export { Card };
