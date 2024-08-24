import React from "react";
import PropTypes from "prop-types";
import { Container, ProductName, ProductPrice, Image } from "./style";
import { Button } from "../Button";
import { useCart } from "../../hooks/CartContext";

export function CardProduct({ product }) {
  const { putProductsInCart } = useCart();

  return (
    <Container>
      <Image src={product.url} />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button onClick={() => putProductsInCart(product)}>Adicionar</Button>
      </div>
    </Container>
  );
}

CardProduct.propTypes = {
  product: PropTypes.object,
};
