import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  max-width: 780px;
  padding: 16px 24px;
  border-radius: 100px;
  background-color: #f99a9933;
  box-sizing: border-box;
  margin: auto;

  @media (max-width: 768px) {
    padding: 12px 16px;
    gap: 8px;
  }

  @media (max-width: 480px) {
    padding: 10px 12px;
    gap: 6px;
    border-radius: 50px;
  }
`;

export const Input = styled.input`
  color: #f99a99cc;
  background-color: transparent;
  border: none;
  width: 100%;
  font-size: 1rem;
  padding: 8px;
  outline: none;

  ::placeholder {
    color: #f99a99cc;
    opacity: 1;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 6px;
  }
`;

export const Image = styled.img`
  width: 1.5rem;
  height: 1.5rem;

  @media (max-width: 768px) {
    width: 1.25rem;
    height: 1.25rem;
  }

  @media (max-width: 480px) {
    width: 1rem;
    height: 1rem;
  }
`;
