import styled from "styled-components";

// Estiliza o contêiner do carrossel
export const Container = styled.div`
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  align-items: center; /* Centraliza o conteúdo horizontalmente */
  justify-content: center;
  width: 100%; /* Garante que o item ocupe toda a largura do contêiner */
  border: 1px solid black;

  p {
    color: var(--Theme-Gray-800, #424242);

    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 26.4px */
  }

  .slick-track {
    display: flex;
    justify-content: center;
  }
`;

export const ImageCate = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 16px;
`;

export const Button = styled.button`
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
  padding: 21px 38px;
  align-items: center;

  display: flex;
`;
