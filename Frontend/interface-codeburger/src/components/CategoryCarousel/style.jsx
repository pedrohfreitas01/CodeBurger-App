import styled from "styled-components";

import { Link } from "react-router-dom";


// Estiliza o contêiner do carrossel
export const Container = styled.div`
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  .slick-prev,
  .slick-next {
    z-index: 1;
    width: 40px;
    height: 40px;
  }

  .slick-prev {
    left: -45px; // Ajusta a posição da seta à esquerda
  }

  .slick-next {
    right: -45px; // Ajusta a posição da seta à direita
  }

  .slick-slide {
    padding: 0 15px; // Ajusta o espaçamento entre os slides
  }
`;

export const CategoryImgLogo = styled.img``;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza o conteúdo horizontalmente */
  width: 100%; /* Garante que o item ocupe toda a largura do contêiner */
`;

export const ImageCate = styled.img`
  width: 202px;
  
  border-radius: 10px;
`;

export const Button = styled(Link)`
  margin-top: 16px;
  border-radius: 8px;
  background: #9758a6;
  box-shadow: 0px 5px 10px 0px rgba(151, 88, 166, 0.22),
    0px 20px 40px 0px rgba(151, 88, 166, 0.24);
  height: 50px;
  border: none;

  
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 100%;
  color: white;
  cursor: pointer;
  
  justify-content: center;
  align-items: center;
  text-decoration: none;
  display: flex;
`;
