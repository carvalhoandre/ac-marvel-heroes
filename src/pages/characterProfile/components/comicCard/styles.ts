import styled from "styled-components";

export const ComicCardContainer = styled.div`
  display: flex;
  gap: 20px;
  background: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  width: 80%;
  max-width: 900px;
`;

export const ComicImage = styled.img`
  width: 100px;
  height: 150px;
  border-radius: 10px;
  object-fit: cover;
`;

export const ComicInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
  }
`;
