import { RingLoader } from "react-spinners";

import IComponent from "src/@types";

import { LoadingContainer } from "./styles";

const Loading: IComponent = ({ testId = "loading-component" }) => {
  return (
    <LoadingContainer data-testid={`${testId}-container`}>
      <RingLoader size={100} color="#F43735" />
    </LoadingContainer>
  );
};

export { Loading };
