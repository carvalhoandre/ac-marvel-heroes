import IComponent from "src/@types";

import { Title, SubTitle, Container } from "./styles";

const Emphasys: IComponent = ({ testId = "emphasys-component" }) => {
  return (
    <Container data-testid={`${testId}-container`}>
      <Title data-testid={`${testId}-title`}>
        Explore o universo e crie sua equipe
      </Title>

      <SubTitle data-testid={`${testId}-subtitle`}>
        Os melhores personagens já feitos em quadrinhos. Fique viciado em uma
        generosa porção de heróis e vilões!
      </SubTitle>
    </Container>
  );
};

export { Emphasys };
