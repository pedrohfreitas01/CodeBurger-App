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
import apiCodeBurger from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function CartResume() {
  const { cartProducts } = useCart();
  const [finalPrice, setFinalPrice] = useState(0);
  const [delivery] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const sumAllItens = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);

    setFinalPrice(sumAllItens);
  }, [cartProducts, delivery]);

  const submitOrder = async () => {
    const order = cartProducts.map((product) => {
      return { id: product.id, quantity: product.quantity };
    });

    await toast.promise(apiCodeBurger.post("orders", { products: order }), {
      pending: "Authorizating order",
      success: "Order realized sucess !",
      error: "Fail, something wrong, please try again",
    });

    setTimeout(() => {
      navigate("/");
    }, 9000);
  };

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
      <Button className="button" onClick={submitOrder}>
        Finish Order
      </Button>
    </ResumeContainer>
  );
}
