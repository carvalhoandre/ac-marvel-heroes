import styled from "styled-components";

export const Header = styled.header`
  position: absolute;
  top: 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem;

  width: 100%;

  background: #fcfcfc;
`;

export const LogoComponent = styled.img`
  width: 3rem;
  height: 3rem;
  display: block;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 0.3rem;
  align-items: center;
`;

export const Typography = styled.p`
  font-size: 1rem;
  color: rgb(26, 26, 26);
  font-weight: 500;
  text-transform: uppercase;
  position: relative;
`;
