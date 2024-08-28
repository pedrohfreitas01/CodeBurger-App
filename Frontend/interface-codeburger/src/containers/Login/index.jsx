import React from "react";

import LoginImg from "../../assets/loginImgBurger.svg";
import LogoBurger from "../../assets/logoBurgerCode.svg";

import {
  Container,
  ImageBurger,
  ContainerItens,
  Label,
  Input,
  SignInLink,
  ErrorFormMsn,
} from "./style";
import { useForm } from "react-hook-form";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import apiCodeBurger from "../../services/api";
import { Button } from "../../components";

import { toast } from "react-toastify";
import { useUser } from "../../hooks/UserContext";
import { Link, useNavigate } from "react-router-dom";

// type Inputs = {
//   example: string
//   exampleRequired: string
// }

export function Login() {
  const navigate = useNavigate();
  const { putUserData } = useUser();

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Send a valid name")
      .required("Email is required"),
    password: Yup.string()
      .required("The password is required")
      .min(6, "The password must have unleast 6 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (clientData) => {
    const { data } = await toast.promise(
      apiCodeBurger.post("sessions", {
        email: clientData.email,
        password: clientData.password,
      }),
      {
        pending: "Promise is pending",
        success: "Welcome Back 😍",
        error: "Something wrong, check your email and password ❌",
      }
    );

    putUserData(data);

    setTimeout(() => {
      if (data.admin) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    }, 1000);
  };

  return (
    <Container>
      <ImageBurger src={LoginImg} alt="login-image"></ImageBurger>
      <ContainerItens>
        <img src={LogoBurger} alt="logo-burger"></img>
        <h2>Login</h2>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input type="email" {...register("email")} />
          <ErrorFormMsn>{errors.email?.message}</ErrorFormMsn>

          <Label>Senha</Label>
          <Input type="password" {...register("password")} />
          <ErrorFormMsn>{errors.password?.message}</ErrorFormMsn>

          <Button type="submit" style={{ marginTop: 75, marginBottom: 25 }}>
            Sign In
          </Button>
        </form>

        <SignInLink>
          Nao possui conta?{" "}
          <Link to={"/register"} style={{ color: "white" }}>
            Sing UP
          </Link>
        </SignInLink>
      </ContainerItens>
    </Container>
  );
}
