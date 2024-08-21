import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%; /* Garante que o container ocupe a altura total da tela */
  gap: 20px;
`;

export const ProductImg = styled.img`
  width: 100vw;
  height: auto;
  object-fit: cover;
  max-width: none; /* Remove a restrição da largura máxima */
  margin: 0;
`;

export const CategoriesMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap; /* Permite que os botões se ajustem melhor em telas menores */
  margin-top: 20px;
`;

export const CategoryBtn = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: ${(props) => props.isActiveCategory && "2px solid #9758a6"};
  color: ${(props) => (props.isActiveCategory ? "#9758a6" : "#9a9a9d")};
  font-family: Roboto;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
padding-bottom: 5px;
`;
