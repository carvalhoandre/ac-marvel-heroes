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
`;

export const ComicImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px 0 0 20px;
  max-width: 200px;
  max-height: 2200px;
  object-fit: cover;
`;

export const ComicInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px 23px;
  gap: 20px;

  h3 {
    font-size: 1.5rem;
    margin: 0;
  }

  .meta {
    font-size: 0.9rem;
    color: #888;
  }

  p {
    font-size: 1rem;
    color: #666;
    margin-top: 16px;
  }
`;
