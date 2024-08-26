import React from "react";
import { Container, Header, Body, EmptyCart } from "./style";
import { useCart } from "../../hooks/CartContext";

import formatCurrency from "../../utils/formatCurrency";

export function CartItens() {
  const { cartProducts, increaseProducts, decreaseProducts } = useCart();

  return (
    <Container>
      <Header>
        <p></p>
        <p>Products</p>
        <p>Price</p>
        <p style={{ paddingRight: 30 }}>Quantity</p>
        <p>Total</p>
      </Header>

      {cartProducts && cartProducts.length > 0 ? (
        cartProducts.map((product) => (
          <Body key={product.id}>
            <img src={product.url} alt="" />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <div className="quantityContainer">
              <button onClick={() => decreaseProducts(product.id)}>-</button>
              <p>{product.quantity}</p>
              <button onClick={() => increaseProducts(product.id)}>+</button>
            </div>
            <p>{formatCurrency(product.quantity * product.price)}</p>
          </Body>
        ))
      ) : (
        <EmptyCart>Carrinho Vazio</EmptyCart>
      )}
    </Container>
  );
}
