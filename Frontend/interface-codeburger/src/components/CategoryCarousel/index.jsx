import React, { useEffect, useState } from "react";
import categoryImg from "../../assets/homeCategoriImg.png";
import {
  CategoryImgLogo,
  Container,
  Button,
  ImageCate,
  ContainerItens,
} from "./style";
import Slider from "react-slick";
import api from "../../services/api";

export function CategoryCarousel() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      try {
        const { data } = await api.get("categories");
        console.log("Categorias carregadas:", data); // Verifica se os dados estão corretos
        setCategories(data);
      } catch (error) {
        console.error("Erro ao carregar categorias:", error);
      }
    }

    loadCategories();
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
      <CategoryImgLogo src={categoryImg} alt="logo-category" />

      <Slider
        {...settings}
        style={{ width: "90%", textAlign: "center" }}
      >
        {categories.map((category) => (
          <ContainerItens key={category.id}>
            <ImageCate src={category.url} alt={category.name} />
            <Button>{category.name}</Button>
          </ContainerItens>
        ))}
      </Slider>
    </Container>
  );
}
;
