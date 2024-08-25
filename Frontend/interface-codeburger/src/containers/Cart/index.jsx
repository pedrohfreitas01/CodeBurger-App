import React from "react";

import cartLogoImg from "../../assets/cartPhotoSection.svg";
import { Container, CartImg } from "./style";
import { CategoryCarousel, OffersCarousel, CartItens } from "../../components";


export function Cart() {
  return (
    <Container>
      <CartImg src={cartLogoImg} alt="cart-logo" />
      <CartItens/>
    </Container>
  );
}
