import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

export const PaginationButton = styled.button<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid ${({ isActive }) => (isActive ? "#F43735" : "#E5E5E5")};
  background-color: ${({ isActive }) => (isActive ? "#F43735" : "#FFFFFF")};
  color: ${({ isActive }) => (isActive ? "#FFFFFF" : "#000000")};
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.75rem;

  transition: background-color 0.3s ease, color 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? "#F43735" : "#F0F0F0")};
  }
`;

export const PaginationArrowButton = styled(PaginationButton)`
  background-color: #f43735;
  border-color: #f43735;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  img {
    width: 20px;
    height: 20px;
  }

  & > img {
    height: 14px;
    width: 9px;
  }
`;
