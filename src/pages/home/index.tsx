import IComponent from "src/@types";

import { Header, GridCards } from "./components";

import { Container } from "./styles";

const Home: IComponent = ({ testId = "home-page" }) => {
  return (
    <Container data-testid={`${testId}-container`}>
      <Header />

      <GridCards />
    </Container>
  );
};

export { Home };
