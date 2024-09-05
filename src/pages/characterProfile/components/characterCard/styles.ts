import styled from "styled-components";

export const CharacterCardContainer = styled.div`
  display: flex;
  gap: 20px;
  background: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: -100px auto 20px auto;
  width: 80%;
  max-width: 900px;
`;

export const CharacterImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

export const CharacterInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 2rem;
    margin: 0;
  }

  p {
    font-size: 1rem;
    color: #666;
  }
`;
