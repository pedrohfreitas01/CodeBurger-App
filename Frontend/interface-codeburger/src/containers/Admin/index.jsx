import React from "react";
import { Container, ContainerItens } from "./style";
import Orders from "./Orders";
import { SideMenuAdm } from "../../components";
import ListProducts from "./ListProducts";
import { useLocation } from "react-router-dom"; 
import NewProducts from "./NewProducts";
import EditProducts from "./EditProducts";

export function Admin() {
  const { pathname } = useLocation(); 

  return (
    <Container>
      <SideMenuAdm />
      <ContainerItens>
        {pathname === "/admin" && <Orders />}
        {pathname === "/list-products" && <ListProducts />}
        {pathname === "/new-product" && <NewProducts />}
        {pathname === "/edit-product" && <EditProducts />}
      </ContainerItens>
    </Container>
  );
}

