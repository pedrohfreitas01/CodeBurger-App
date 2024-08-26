import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const updateLocalStorage = async (products) => {
    await localStorage.setItem("codeburger:cartData", JSON.stringify(products));
  };

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

    await updateLocalStorage(newCartProducts);
  };

  const deleteProcuts = async (productid) => {
    const newCart = cartProducts.filter((product) => product.id !== productid);

    setCartProducts(newCart);
    await updateLocalStorage(newCart);
  };

  const increaseProducts = async (Productid) => {
    const newCart = cartProducts.map((product) => {
      return product.id === Productid
        ? { ...product, quantity: product.quantity + 1 }
        : product;
    });

    setCartProducts(newCart);

    await updateLocalStorage(newCart);
  };

  const decreaseProducts = async (Productid) => {
    const cartIndex = cartProducts.findIndex((pd) => pd.id === Productid);

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map((product) => {
        return product.id === Productid
          ? { ...product, quantity: product.quantity - 1 }
          : product;
      });

      setCartProducts(newCart);
      await updateLocalStorage(newCart);
    } else {
      deleteProcuts(Productid);
    }
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
    <CartContext.Provider
      value={{
        putProductsInCart,
        cartProducts,
        increaseProducts,
        decreaseProducts,
      }}
    >
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
