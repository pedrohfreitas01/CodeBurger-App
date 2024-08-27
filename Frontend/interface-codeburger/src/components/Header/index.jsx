import React from "react";
import {
  Container,
  ContainerRight,
  ContainerText,
  ContainerLeft,
  PageLink,
  Line,
  PageLinkExit,
} from "./style";

import { useNavigate, useLocation } from "react-router-dom";

import profile from "../../assets/profile.svg";
import cart from "../../assets/cart.png";

export function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => navigate("/")} isActive={pathname === "/"}>
          HOME
        </PageLink>
        <PageLink
          onClick={() => navigate("/products")}
          isActive={pathname.includes("products")}
        >
          Ver Produto
        </PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink>
          <img src={cart} alt="" onClick={() => navigate("/cart")} />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img src={profile} alt="" />
        </PageLink>

        <ContainerText>
          <p>Ola , Potter</p>
          <PageLinkExit>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  );
}
