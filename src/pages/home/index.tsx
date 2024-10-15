import IComponent from "src/@types";

import { Header } from "@components/header";
import { Emphasys, GridCards } from "./components";

import { Container } from "./styles";

const Home: IComponent = ({ testId = "home-page" }) => {
  return (
    <Container data-testid={`${testId}-container`}>
      <Header />

      <Emphasys />

      <GridCards />
    </Container>
  );
};

export default Home;
