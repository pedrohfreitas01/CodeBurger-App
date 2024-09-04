import React, { useEffect, useState } from "react";
import { Container } from "./style";
import Orders from "./Orders";
import { SideMenuAdm } from "../../components";



export function Admin() {
  return (
    <Container>
      <SideMenuAdm/>    
      <Orders />
    </Container>
  );
}
