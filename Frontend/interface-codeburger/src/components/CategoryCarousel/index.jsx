import React, { useEffect, useState } from "react";
import categoryImg from "../../assets/homeCategoriImg.png";
import { CategoryImg, Container } from "./style";
import Slider from "react-slick";
import api from "../../services/api";

function CategoryCarousel() {
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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <Container>
      <CategoryImg src={categoryImg} alt="logo-category" />
      <Slider {...settings} style={{width: '90%'}}>
        {categories.map((category) => (
          <div key={category.id}>
            <img
              src={category.url}
              alt={category.name}
            />
            <button>{category.name}</button>
          </div>
        ))}
      </Slider>
    </Container>
  );
}

export default CategoryCarousel;
