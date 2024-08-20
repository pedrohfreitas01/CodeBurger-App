import React from "react";

import homePhoto from "../../assets/homePhoto.svg";
import { Container, HomeImg } from "./style";
import CategoryCarousel from "../../components/CategoryCarousel";
import OffersCarousel from "../../components/OffersCarousel";

function Home() {
  return (
    <Container>
      <HomeImg src={homePhoto} alt="home-logo" />
      <CategoryCarousel />
      <OffersCarousel/>
    </Container>
  );
}

export default Home;
