import styled, { css } from "styled-components";
import { LabelProps, BoxFavoriteProps } from "./types";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 45px;
  padding: 0px 20px 20px 20px;
  justify-items: center;

  @media (min-width: 768px) {
    padding: 0px 40px 40px 40px;
  }
`;

export const BoxLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const BoxFavorite = styled.div<BoxFavoriteProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  max-width: 275px;

  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};

  &:hover {
    transform: ${({ isDisabled }) =>
      isDisabled ? "scale(1.0)" : "scale(1.1)"};
  }

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      & > * {
        opacity: 0.5;
      }
    `}
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 25px;
  }
`;

export const Label = styled.p<LabelProps>`
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
  color: ${({ isFavorite }) => (isFavorite ? "#F43735B2" : "#c5c5c5")};

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Icon = styled.img`
  width: 1.25rem;
  height: 1.25rem;

  @media (min-width: 768px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
