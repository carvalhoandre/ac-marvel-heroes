import styled from "styled-components";
import backgroundImage from "../../../../assets/background.svg";

export const HeroBannerContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #fff;
  text-align: center;
  padding: 0 20px;

  @media (max-width: 1024px) {
    height: 350px;
  }

  @media (max-width: 768px) {
    height: 300px;
    padding: 0 15px;
  }

  @media (max-width: 480px) {
    height: 250px;
    padding: 0 10px;
  }

  div {
    margin: 0 auto;
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

    @media (max-width: 1024px) {
      font-size: 2.2rem;
      max-width: 350px;
    }

    @media (max-width: 768px) {
      font-size: 2rem;
      max-width: 300px;
    }

    @media (max-width: 480px) {
      font-size: 1.8rem;
      max-width: 250px;
    }
  }
`;
