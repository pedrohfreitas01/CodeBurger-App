import React, { useEffect, useState } from "react";
import { Container } from "./style";
import Orders from "./Orders";

export function Admin() {
  return (
    <Container>
      <Orders />
    </Container>
  );
}
