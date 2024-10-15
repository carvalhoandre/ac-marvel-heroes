import styled from "styled-components";
import { ILoadingProps } from "./types";

export const LoadingContainer = styled.div<ILoadingProps>`
  height: ${({ isFullScreen }) =>
    isFullScreen ? "calc(100vh - 80px)" : "100%"};
  width: ${({ isFullScreen }) => (isFullScreen ? "100vw" : "100%")};
  margin: 40px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;

  & > * {
    margin: 0 auto;
  }
`;
