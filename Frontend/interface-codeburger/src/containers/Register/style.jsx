import styled from "styled-components";
import backgroundLogin from "../../assets/backgroundLogin.svg";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url("${backgroundLogin}");

  display: flex;
  justify-content: center;
  align-items: center;
  /* background-repeat: no-repeat; */
  background-size: cover;
  background-position: 0%;
`;

export const RegisterImg = styled.img`
  height: 70%;
`;

export const ContainerItens = styled.div`
  border-radius: 0 10px 10px 0;
  background: #373737;
  box-shadow: 0px 4px 15px 0px rgba(74, 144, 226, 0.24);
  height: 70%;
  padding: 25px 75px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    color: #fff;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
    margin-top: 100px;
  }
`;

export const Label = styled.p`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 28px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  border-radius: 5px;
  background: #fff;
  box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
  width: 391.416px;
  height: 38.319px;
  flex-shrink: 0;
  border: none;
  padding-left: 10px;
`;

export const SignInLink = styled.a`
  color: #fff;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const ErrorFormMsn = styled.p`
  color: #cc1717;
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 9px;
`;
