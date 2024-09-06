import styled from "styled-components";

export const ComicCardContainer = styled.div`
  display: flex;
  gap: 20px;
  background: white;
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px #00000040;
  margin: 0px auto;
  width: 80%;
  max-width: 900px;

  @media (max-width: 768px) {
    flex-direction: column; // Stack items vertically on tablets
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 95%; // Further reduce width on mobile
  }
`;

export const ComicImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px 0 0 20px;
  max-width: 200px;
  max-height: 2200px;
  object-fit: cover;

  @media (max-width: 768px) {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }

  @media (max-width: 480px) {
    max-height: 400px;
  }
`;

export const ComicInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px 23px;
  gap: 20px;

  h3 {
    font-size: 1.5rem;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 1.3rem;
    }

    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }

  .meta {
    font-size: 0.9rem;
    color: #888;

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }

    @media (max-width: 480px) {
      font-size: 0.7rem;
    }
  }

  p {
    font-size: 1rem;
    color: #666;
    margin-top: 16px;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.85rem;
    }
  }
`;
