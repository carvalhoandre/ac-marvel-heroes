import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  gap: 10px;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;

  @media (min-width: 768px) {
    height: 250px;
  }

  @media (min-width: 1024px) {
    height: 200px;
  }
`;

export const FallbackImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e0e0e0;
  color: #555;
  font-size: 2rem;
  font-weight: bold;
  width: 100%;
  height: 200px;
  border-radius: 8px;

  @media (min-width: 768px) {
    height: 250px;
  }

  @media (min-width: 1024px) {
    height: 200px;
  }
`;

export const BoxLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  color: #333;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 0.875rem;
  color: #777;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 0.875rem;
  }
`;

export const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
    opacity: 0.8;
  }

  @media (min-width: 768px) {
    width: 2rem;
    height: 2rem;
  }

  @media (min-width: 1024px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
