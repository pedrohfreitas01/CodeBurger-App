import React from "react";
import PropTypes from "prop-types";
import { Container, ProductName, ProductPrice, Image } from "./style";
import { Button } from "../Button";

export function CardProduct({ product }) {
  return (
    <Container>
      <Image src={product.url} />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button>Adicionar</Button>
      </div>
    </Container>
  );
}


CardProduct.propTypes = {
  product: PropTypes.object,
};
