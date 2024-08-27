import React from "react";

import homePhoto from "../../assets/homePhoto.svg";
import { Container, HomeImg } from "./style";
import { CategoryCarousel, Header, OffersCarousel } from "../../components";


export function Home() {
  return (
    <Container>
      <HomeImg src={homePhoto} alt="home-logo" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  );
}


