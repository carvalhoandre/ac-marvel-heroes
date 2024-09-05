import IComponent from "src/@types";

import { useCharacterStore } from "@store/characters";

import { HeroBanner, CharacterCard } from "./components";
import { Container } from "./styles";

const CharacterProfile: IComponent = ({
  testId = "character-profile-page",
}) => {
  const { selectedCharacter } = useCharacterStore();

  if (!selectedCharacter) return <></>;

  const imageUrl = `${selectedCharacter.thumbnail.path}.${selectedCharacter.thumbnail.extension}`;

  return (
    <Container data-testid={`${testId}-container`}>
      <HeroBanner />

      <CharacterCard
        name={selectedCharacter.name}
        description={selectedCharacter.description}
        imageUrl={imageUrl}
      />
    </Container>
  );
};

export { CharacterProfile };
