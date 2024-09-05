import styled from "styled-components";

export const CharacterCardContainer = styled.div`
  display: flex;
  gap: 70px;
  background: #fff;
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
  gap: 22px;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #212121;
    margin: 0;
  }

  p {
    font-size: 1rem;
    color: #212121;
  }
`;
