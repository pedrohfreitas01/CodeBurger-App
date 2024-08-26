import styled from "styled-components";

export const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .button {
    margin-top: 24px;
    width: 315px;
    height: 48px;
  }
`;

export const ItemsContainer = styled.div`
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.03);
  width: 315px;
  height: 301px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContainerResume = styled.div`
  color: #222;

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  
  h2 {
    margin-bottom: 14px;
  }
`;

export const InfoResume = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
`;
export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
