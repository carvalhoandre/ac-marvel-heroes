import IComponent from "src/@types";

import { Container } from "./styles";

const CharacterProfile: IComponent = ({
  testId = "character-profile-page",
}) => {
  return <Container data-testid={`${testId}-container`}></Container>;
};

export { CharacterProfile };
