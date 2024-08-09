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
import { useForm } from "react-hook-form";

// type Inputs = {
//   example: string
//   exampleRequired: string
// }

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <ImageBurger src={LoginImg} alt="login-image"></ImageBurger>
      <ContainerItens>
        <img src={LogoBurger} alt="logo-burger"></img>
        <h2>Login</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input type="email" {...register("email")} />

          <Label>Senha</Label>
          <Input type="password" {...register("password")} />

          <Button type="submit">Sign In</Button>
        </form>

        <SignInLink>
          Nao possui conta? <a>Sing UP</a>
        </SignInLink>
      </ContainerItens>
    </Container>
  );
}

export default Login;
