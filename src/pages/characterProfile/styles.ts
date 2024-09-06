import styled from "styled-components";

export const ComicsContainer = styled.div`
  display: flex;
  background-color: #f5f5f5;
  flex-direction: column;
  gap: 50px;
  margin: 70px 0px;
  min-height: calc(100vh - 718px);

  @media (max-width: 1021px) {
    min-height: calc(100vh - 678px);
  }

  @media (max-width: 768px) {
    gap: 30px;
    margin: 40px 0px;
    min-height: calc(100vh - 584px);
  }

  @media (max-width: 480px) {
    gap: 20px;
    margin: 20px 0px;
    min-height: calc(100vh - 500px);
  }
`;
