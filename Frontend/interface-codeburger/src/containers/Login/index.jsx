import React from "react";

import LoginImg from "../../assets/loginImgBurger.svg";
import LogoBurger from "../../assets/logoBurgerCode.svg";

import {
  Container,
  ImageBurger,
  ContainerItens,
  Label,
  Input,
  Button,
  SignInLink,
} from "./style";

function Login() {
  return (
    <Container>
      <ImageBurger src={LoginImg} alt="login-image"></ImageBurger>
      <ContainerItens>
        <img src={LogoBurger} alt="logo-burger"></img>
        <h2>Login</h2>

        <Label>Email</Label>
        <Input />

        <Label>Senha</Label>
        <Input />

        <Button>Sign In</Button>
        <SignInLink>
          Nao possui conta? <a>Sing UP</a>{" "}
        </SignInLink>
      </ContainerItens>
    </Container>
  );
}

export default Login;
