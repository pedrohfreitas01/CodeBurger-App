import React from "react";
import { Container, ContainerItens } from "./style";
import Orders from "./Orders";
import { SideMenuAdm } from "../../components";
import ListProducts from "./ListProducts";
import { useLocation } from "react-router-dom"; 

export function Admin() {
  const { pathname } = useLocation(); 

  return (
    <Container>
      <SideMenuAdm />
      <ContainerItens>
        {pathname === "/admin" && <Orders />}
        {pathname === "/list-products" && <ListProducts />}
      </ContainerItens>
    </Container>
  );
}

