import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 19px 17px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #c6c6c6;
  width: 100%;
`;

export const BoxLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  color: #212121;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: left;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 18.75px;
  text-align: left;
  color: #212121;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
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
`;

export const Icon = styled.img`
  width: 1.3rem;
  height: 1.3rem;
  cursor: pointer;
`;
