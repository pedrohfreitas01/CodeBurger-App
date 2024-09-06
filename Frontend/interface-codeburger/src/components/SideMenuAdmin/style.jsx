import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background: #3c3c3c;
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.15);
  width: 264px;
  top: 0;
  left: 0;

  hr {
    background: #e9ecef;
    margin: 50px 15px;
  }
`;

export const ItemContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background: ${(props) =>
    props.isActive
      ? "#565656"
      : "transparent"}; /* Cor de fundo do item ativo */
  border-radius: 2px;
  margin: 8px;
  cursor: pointer;

  .icon {
    color: white;
    margin-left: 5px;
  }
`;

export const ListLink = styled(Link)`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: white;
  text-decoration: none;
  margin-left: 8px;
`;
