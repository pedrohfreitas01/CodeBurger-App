import React from "react";

import homePhoto from "../../assets/homePhoto.svg";
import { Container, HomeImg } from "./style";
import { CategoryCarousel, Header, OffersCarousel } from "../../components";


export function Home() {
  return (
    <Container>
      <Header></Header>
      <HomeImg src={homePhoto} alt="home-logo" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  );
}


