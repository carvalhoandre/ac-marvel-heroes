import IComponent from "src/@types";

import { Header, Search, GridCards } from "./components";

import { Container } from "./styles";

const Home: IComponent = ({ testId = "home-page" }) => {
  const handleOnSearch = (search: string) => {
    console.log(search);
  };

  return (
    <Container data-testid={`${testId}-container`}>
      <Header />

      <Search onSearch={handleOnSearch} />

      <GridCards />
    </Container>
  );
};

export { Home };
