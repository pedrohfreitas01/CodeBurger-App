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

function OffersCarousel() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function loadOffers() {
      try {
        const { data } = await api.get("products");

        const onlyOffer = data.filter(product => product.offer).map(product => {
          return{...product, formatedPrice: formatCurrency(product.price)}
        })

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
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true, // Mantém o item centralizado
          centerPadding: "30px", // Ajusta o padding ao redor do item
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true, // Mantém o item centralizado
          centerPadding: "10px", // Ajusta o padding ao redor do item
        },
      },
    ],
  };

  return (
    <Container>
      <CategoryImgLogo src={offersImg} alt="logo-offer" />

      <Slider {...settings} style={{ width: "90%", textAlign: "center" }}>
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

export default OffersCarousel;
