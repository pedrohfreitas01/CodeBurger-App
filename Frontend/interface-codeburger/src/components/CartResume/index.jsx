import React, { useEffect, useState } from "react";
import {
  ResumeContainer,
  ItemsContainer,
  InfoResume,
  ContainerResume,
  TotalContainer,
} from "./style";

import { Button } from "./../Button";
import { useCart } from "../../hooks/CartContext";
import formatCurrency from "../../utils/formatCurrency";

export function CartResume() {
  const { cartProducts } = useCart();
  const [finalPrice, setFinalPrice] = useState(0);
  const [delivery] = useState(5);

  useEffect(() => {
    const sumAllItens = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);

    setFinalPrice(sumAllItens);
  }, [cartProducts, delivery]);

  return (
    <ResumeContainer>
      <ItemsContainer>
        <ContainerResume>
          <h2>Resume itens</h2>
          <InfoResume>
            <p>Itens</p>
            <p>{formatCurrency(finalPrice)}</p>
          </InfoResume>
          <InfoResume>
            <p>Taxa de entrega</p>
            <p>{formatCurrency(delivery)}</p>
          </InfoResume>
        </ContainerResume>
        <TotalContainer>
          <h1>Total</h1>
          <h1> {formatCurrency(finalPrice + delivery)}</h1>
        </TotalContainer>
      </ItemsContainer>
      <Button className="button">Finish Order</Button>
    </ResumeContainer>
  );
}
