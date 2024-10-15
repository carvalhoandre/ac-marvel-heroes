import { RingLoader } from "react-spinners";

import IComponent from "src/@types";
import { ILoadingProps } from "./types";

import { LoadingContainer } from "./styles";

const Loading: IComponent<ILoadingProps> = ({
  testId = "loading-component",
  isFullScreen = false,
}) => {
  return (
    <LoadingContainer
      isFullScreen={isFullScreen}
      data-testid={`${testId}-container`}
    >
      <RingLoader size={100} color="#F43735" />
    </LoadingContainer>
  );
};

export { Loading };
