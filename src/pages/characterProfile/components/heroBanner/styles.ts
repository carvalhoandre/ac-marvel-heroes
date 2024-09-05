import styled from "styled-components";

export const HeroBannerContainer = styled.div`
  background-image: url("src/assets/background.svg");
  background-size: cover;
  background-position: center;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #fff;
  text-align: center;
  padding: 0 20px;

  div {
    margin: 0px auto 0px auto;
    width: 80%;
    max-width: 900px;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    text-transform: uppercase;
    line-height: 1.2;
    max-width: 400px;
    text-align: left;
  }
`;
