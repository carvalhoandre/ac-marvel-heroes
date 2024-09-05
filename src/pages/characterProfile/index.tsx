import IComponent from "src/@types";

import { HeroBanner } from "./components";
import { Container } from "./styles";

const CharacterProfile: IComponent = ({
  testId = "character-profile-page",
}) => {
  return (
    <Container data-testid={`${testId}-container`}>
      <HeroBanner />
    </Container>
  );
};

export { CharacterProfile };
