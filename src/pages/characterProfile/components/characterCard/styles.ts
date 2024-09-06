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

  @media (max-width: 1024px) {
    margin: -80px auto 20px auto;
    gap: 50px;
    padding: 15px;
  }

  @media (max-width: 768px) {
    margin: -60px auto 20px auto;
    gap: 30px;
    padding: 20px;
    width: 90%;
  }

  @media (max-width: 480px) {
    margin: -30px auto 20px auto;
    gap: 20px;
    width: 95%;
    padding: 15px;
  }
`;

export const CharacterImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
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

    @media (max-width: 1024px) {
      font-size: 2.2rem;
    }

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1rem;
    color: #212121;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.85rem;
    }
  }
`;
