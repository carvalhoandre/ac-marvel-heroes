import IComponent from "src/@types";
import { ICharacterCard } from "./types";

import {
  CharacterCardContainer,
  CharacterImage,
  CharacterInfo,
} from "./styles";

const CharacterCard: IComponent<ICharacterCard> = ({
  testId = "character-card",
  name,
  description,
  imageUrl,
}) => {
  return (
    <CharacterCardContainer data-testid={`${testId}-container`}>
      <CharacterImage
        src={imageUrl}
        alt={name}
        data-testid={`${testId}-image`}
      />

      <CharacterInfo data-testid={`${testId}-info`}>
        <h2 data-testid={`${testId}-name`}>{name}</h2>
        <p data-testid={`${testId}-description`}>{description}</p>
      </CharacterInfo>
    </CharacterCardContainer>
  );
};

export { CharacterCard };
