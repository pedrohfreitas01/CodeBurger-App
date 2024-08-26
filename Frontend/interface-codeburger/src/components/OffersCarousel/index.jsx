import React, { useEffect, useState } from "react";
import offersImg from "../../assets/homeOfferIMG.png";
import {
  CategoryImgLogo,
  Container,
  Button,
  ImageCate,
  ContainerItens,
} from "./style";
import Slider from "react-slick";
import api from "../../services/api";
import formatCurrency from "../../utils/formatCurrency";

export function OffersCarousel() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function loadOffers() {
      try {
        const { data } = await api.get("products");

        const onlyOffer = data
          .filter((product) => product.offer)
          .map((product) => {
            return { ...product, formatedPrice: formatCurrency(product.price) };
          });

        console.log("Offers carregadas:", onlyOffer); // Verifica se os dados estão corretos
        setOffers(onlyOffer);
      } catch (error) {
        console.error("Erro ao carregar ofertas:", error);
      }
    }

    loadOffers();
  }, []);

  //setting para o carrousel
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true, // Centraliza o slide ativo
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <Container>
      <CategoryImgLogo
        src={offersImg}
        alt="logo-offer"
        className="slider-container"
      />

      <Slider
        {...settings}
        style={{
          width: "90%", // Garante que o slider não ocupe toda a largura, mas ainda é centralizado
          margin: "0 auto", // Centraliza o slider horizontalmente
          textAlign: "center", // Centraliza o texto dentro do slider
          justifyContent: "center",
        }}
      >
        {offers.map((product) => (
          <ContainerItens key={product.id}>
            <ImageCate src={product.url} alt={product.name} />

            <p>{product.name}</p>
            <p>{product.formatedPrice}</p>

            <Button>Order now</Button>
          </ContainerItens>
        ))}
      </Slider>
    </Container>
  );
}
