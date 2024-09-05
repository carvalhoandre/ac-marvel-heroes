import IComponent from "src/@types";
import { ICharacterCard } from "./types";

import {
  CharacterCardContainer,
  CharacterImage,
  CharacterInfo,
} from "./styles";

const CharacterCard: IComponent<ICharacterCard> = ({
  name,
  description,
  imageUrl,
}) => {
  return (
    <CharacterCardContainer>
      <CharacterImage src={imageUrl} alt={name} />

      <CharacterInfo>
        <h2>{name}</h2>
        <p>{description}</p>
      </CharacterInfo>
    </CharacterCardContainer>
  );
};

export { CharacterCard };
