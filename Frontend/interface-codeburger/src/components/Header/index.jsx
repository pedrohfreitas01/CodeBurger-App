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

import profile from "../../assets/profile.svg";
import cart from "../../assets/cart.png";

export function Header() {
  return (
    <Container>
      <ContainerLeft>
        <PageLink>HOME</PageLink>
        <PageLink>Ver Produto</PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink>
          <img src={cart} alt="" />
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
