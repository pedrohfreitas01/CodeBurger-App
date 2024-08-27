import styled from "styled-components";

export const Container = styled.div`
  height: 72px;
  background-color: #ffffff;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
  display: flex;

  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  padding: 10px;
`;

export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
`;

export const PageLink = styled.a`
  padding: 5px;
  cursor: pointer;
`;

export const PageLinkExit = styled.a`
  color: #9758a6;


  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

export const Line = styled.div`
  height: 40px;
  border: 0.5px solid #bababa;
`;

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ContainerText = styled.div`
  p {
    color: #555;

    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
`;
