import IComponent from "src/@types";

import { Header } from "./components/header";

import { Container } from "./styles";

const Home: IComponent = ({ testId = "home-page" }) => {
  return (
    <Container data-testid={`${testId}-container`}>
      <Header />
    </Container>
  );
};

export { Home };
