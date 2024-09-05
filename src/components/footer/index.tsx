import IComponent from "src/@types";

import { FooterContainer, Typography, Inline } from "./styles";

const Footer: IComponent = ({ testId = "footer-component" }) => {
  return (
    <FooterContainer data-testid={`${testId}-container`}>
      <Typography>Data provided by Marvel. © 2024 MARVEL</Typography>

      <Inline>
        <Typography>Desenvolvido por</Typography>
        <Typography color="#999999">André Carvalho</Typography>
      </Inline>
    </FooterContainer>
  );
};

export { Footer };
