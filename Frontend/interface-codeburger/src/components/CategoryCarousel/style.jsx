import styled from "styled-components";

// Estiliza o contêiner do carrossel
export const Container = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;

  /* Ajusta a largura máxima para o contêiner */
  max-width: 1200px;
  margin: 0 auto; /* Centraliza o contêiner horizontalmente na página */
`;

// Estiliza a imagem do cabeçalho do carrossel
export const CategoryImg = styled.img`
  width: 100%; /* Faz com que a imagem se ajuste à largura do contêiner */
  height: auto; /* Mantém a proporção da imagem */
  max-width: 100%; /* Garante que a imagem não ultrapasse o tamanho do contêiner */
  margin-bottom: 20px; /* Adiciona espaçamento abaixo da imagem, se necessário */
  object-fit: cover; /* Ajusta a imagem para cobrir o contêiner sem distorção */
`;
