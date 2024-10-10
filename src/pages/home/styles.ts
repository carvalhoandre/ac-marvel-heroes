import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 110px;
  padding: 120px 40px 80px 40px;
  align-items: center;
  background-color: #f5f5f5;
  min-height: calc(100vh - 88px);

  @media (max-width: 768px) {
    min-height: calc(100vh - 104px);
    gap: 60px;
    padding: 40px 20px;
  }

  @media (max-width: 480px) {
    gap: 40px;
    padding: 20px 10px;
  }
`;
