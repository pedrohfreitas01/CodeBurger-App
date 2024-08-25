import React from "react";
import { Container, Header, Body } from "./style";
import { useCart } from "../../hooks/CartContext";

export function CartItens() {
  const { cartProducts } = useCart();

  return (
    <Container>
      <Header>
        <p></p>
        <p>Products</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </Header>

      {cartProducts &&
        cartProducts.map((product) => (
          <Body key={product.id}>
            <img src={product.url} alt="" />
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.quantity}</p>
            <p>{product.quantity * product.price}</p>
          </Body>
        ))}
    </Container>
  );
}
