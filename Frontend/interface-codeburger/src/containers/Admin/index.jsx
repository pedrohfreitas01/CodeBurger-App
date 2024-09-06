import React, { useEffect, useState } from "react";
import { Container, ContainerItens } from "./style";
import Orders from "./Orders";
import { SideMenuAdm } from "../../components";
import ListProducts from "./ListProducts";

export function Admin() {
  return (
    <Container>
      <SideMenuAdm />
      <ContainerItens>
        {/* <Orders /> */}
        <ListProducts />
      </ContainerItens>
    </Container>
  );
}
