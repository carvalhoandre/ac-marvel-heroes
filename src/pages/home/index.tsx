import IComponent from "src/@types";

const Home: IComponent = ({ testId = "home-page" }) => {
  return <h1 data-testId={testId}>Home</h1>;
};

export { Home };
