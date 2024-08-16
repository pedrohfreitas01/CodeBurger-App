import React from "react";

import homePhoto from "../../assets/homePhoto.svg";
import { Container, HomeImg } from "./style";
import CategoryCarousel from "../../components/CategoryCarousel";

function Home() {
  return (
    <Container>
      <HomeImg src={homePhoto} alt="home-logo" />
      <CategoryCarousel/>
    </Container>
  );
}

export default Home;
