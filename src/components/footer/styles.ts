import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  background-color: #202020;
  padding: 32px;
  justify-content: space-between;
  width: 100%;
`;

export const Typography = styled.p<{ color?: string }>`
  background-color: #202020;
  font-size: 1.25rem;
  font-weight: 400;
  color: ${({ color }) => (color ? color : "#FFFFFF")};
`;

export const Inline = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;
