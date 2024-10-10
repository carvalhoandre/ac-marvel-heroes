import { Header } from "@components/header";

import IComponent from "@/@types";

import NotFoundImage from "../../assets/unDraw/notFound.svg";

import * as styles from "./styles";

const NotFound: IComponent = () => {
  return (
    <>
      <Header />

      <styles.Container>
        <styles.Image src={NotFoundImage} alt="Imagem_Ilustrativa" />

        <styles.Typography>404: Nada por aqui</styles.Typography>
      </styles.Container>
    </>
  );
};

export { NotFound };
