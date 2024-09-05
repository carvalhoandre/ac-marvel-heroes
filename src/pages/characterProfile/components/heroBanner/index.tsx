import IComponent from "src/@types";

import { HeroBannerContainer } from "./styles";

const HeroBanner: IComponent = ({ testId = "hero-banner" }) => {
  return (
    <HeroBannerContainer data-testid={`${testId}-banner`}>
      <h1>Descubra todos os quadrinhos deste personagem</h1>
    </HeroBannerContainer>
  );
};

export { HeroBanner };
