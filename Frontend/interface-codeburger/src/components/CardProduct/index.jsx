import React from "react";
import PropTypes from "prop-types";
import { Container, ProductName, ProductPrice, Image, Button } from "./style";

function CardProduct({ product }) {
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

export default CardProduct;

CardProduct.propTypes = {
  product: PropTypes.object,
};
