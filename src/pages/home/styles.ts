import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 110px;
  padding: 80px 40px;
  align-items: center;
  background-color: #f5f5f5;

  @media (max-width: 1024px) {
    gap: 80px;
    padding: 60px 30px;
  }

  @media (max-width: 768px) {
    gap: 60px;
    padding: 40px 20px;
  }

  @media (max-width: 480px) {
    gap: 40px;
    padding: 20px 10px;
  }
`;
