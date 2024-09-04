import React from "react";
import { Container, ItemContainer, ListLink } from "./style";
import listMenu from "./menu-list";

export function SideMenuAdm() {
  return (
    <Container>
      <hr />
      {listMenu.map((item) => (
        <ItemContainer key={item.id}>
          <item.icon className="icon"/>
          <ListLink to={item.link}>{ item.label}</ListLink>
        </ItemContainer>
      ))}
    </Container>
  );
}
