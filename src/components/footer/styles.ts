import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  background-color: #202020;
  padding: 32px;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 20px;
  }

  @media (max-width: 480px) {
    padding: 16px;
    gap: 15px;
  }
`;

export const Typography = styled.p<{ color?: string }>`
  background-color: #202020;
  font-size: 1.25rem;
  font-weight: 400;
  color: ${({ color }) => (color ? color : "#FFFFFF")};

  @media (max-width: 768px) {
    font-size: 1.15rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    text-align: center;
  }
`;

export const Inline = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
  }
`;
