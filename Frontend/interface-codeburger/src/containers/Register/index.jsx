import React from "react";

import RegisterImgBurger from "../../assets/registerImg.svg";
import LogoBurger from "../../assets/logoBurgerCode.svg";

import {
  Container,
  RegisterImg,
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
import Button from "../../components/Button/index";

function Register() {
  const schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Send a valid name")
      .required("Email is required"),
    password: Yup.string()
      .required("The password is required")
      .min(6, "The password must have unleast 6 characters"),
    confirmPassword: Yup.string()
      .required("This field is required")
      .oneOf([Yup.ref("password")], "The passwords must be the same"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (clientData) => {
    const response = await apiCodeBurger.post("users", {
      name: clientData.name,
      email: clientData.email,
      password: clientData.password,
    });

    console.log(response);
  };

  return (
    <Container>
      <RegisterImg src={RegisterImgBurger} alt="register-image"></RegisterImg>
      <ContainerItens>
        <img src={LogoBurger} alt="logo-burger"></img>
        <h2>Register</h2>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Name</Label>
          <Input type="text" {...register("name")} />
          <ErrorFormMsn>{errors.name?.message}</ErrorFormMsn>

          <Label>Email</Label>
          <Input type="email" {...register("email")} />
          <ErrorFormMsn>{errors.email?.message}</ErrorFormMsn>

          <Label>Senha</Label>
          <Input type="password" {...register("password")} />
          <ErrorFormMsn>{errors.password?.message}</ErrorFormMsn>

          <Label>Confirm Password</Label>
          <Input type="password" {...register("confirmPassword")} />
          <ErrorFormMsn>{errors.confirmPassword?.message}</ErrorFormMsn>

          <Button type="submit" style={{ marginTop: 25, marginBottom: 25 }}>
            Sign Up
          </Button>
        </form>

        <SignInLink>
          already have an account ? <a>Sing IN</a>
        </SignInLink>
      </ContainerItens>
    </Container>
  );
}

export default Register;
