import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  //funcao grava os dados
  const putProductsInCart = async (product) => {
    const cartIndex = cartProducts.findIndex(
      (produt) => produt.id === product.id
    );

    let newCartProducts = [];
    if (cartIndex >= 0) {
      newCartProducts = cartProducts;

      newCartProducts[cartIndex].quantity++;

      setCartProducts(newCartProducts);
    } else {
      product.quantity = 1;
      newCartProducts = [...cartProducts, product];
      setCartProducts(newCartProducts);
    }

    await localStorage.setItem(
      "codeburger:cartData",
      JSON.stringify(newCartProducts)
    );
  };
  //recuperando os dados do localstoregae
  useEffect(() => {
    const loadCartData = async () => {
      const clientCartData = await localStorage.getItem("codeburger:cartData");

      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData));
      }
    };

    loadCartData();
  }, []);

  return (
    <CartContext.Provider value={{ putProductsInCart, cartProducts }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useUser must be used with UserContext");
  }

  return context;
};

CartProvider.propTypes = {
  children: PropTypes.node,
};
