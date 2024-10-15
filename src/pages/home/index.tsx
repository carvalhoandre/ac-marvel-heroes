import IComponent from "src/@types";

import { Header } from "@components/header";
import { Emphasys, GridCards } from "./components";

import { Container } from "./styles";

const Home: IComponent = ({ testId = "home-page" }) => {
  return (
    <>
      <Header />

      <Container data-testid={`${testId}-container`}>
        <Emphasys />

        <GridCards />
      </Container>
    </>
  );
};

export default Home;
