import IComponent from "src/@types";

import { HeroBannerContainer } from "./styles";

const HeroBanner: IComponent = ({ testId = "hero-banner" }) => {
  return (
    <HeroBannerContainer data-testid={`${testId}-banner`}>
      <div>
        <h1>Descubra todos os quadrinhos deste personagem</h1>
      </div>
    </HeroBannerContainer>
  );
};

export { HeroBanner };
