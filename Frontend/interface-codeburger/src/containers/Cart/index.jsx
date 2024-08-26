import React from "react";

import cartLogoImg from "../../assets/cartPhotoSection.svg";
import { Container, CartImg, Wrapper } from "./style";
import { CartItens, CartResume } from "../../components";

export function Cart() {
  return (
    <Container>
      <CartImg src={cartLogoImg} alt="cart-logo" />
      <Wrapper>
        <CartItens />
        <CartResume/>
      </Wrapper>
    </Container>
  );
}
