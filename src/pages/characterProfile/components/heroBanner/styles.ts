import styled from "styled-components";

export const HeroBannerContainer = styled.div`
  background-image: url("src/assets/background.svg");
  background-size: cover;
  background-position: center;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  padding: 0 20px;

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    text-transform: uppercase;
    line-height: 1.2;
    max-width: 400px;
    text-align: left;
  }
`;
