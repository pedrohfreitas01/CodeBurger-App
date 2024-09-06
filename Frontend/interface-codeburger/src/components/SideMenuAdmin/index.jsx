import React, { useState } from "react"; // Import useState
import { Container, ItemContainer, ListLink } from "./style";
import listMenu from "./menu-list";
import LogoutIcon from "@mui/icons-material/Logout";
import { useUser } from "../../hooks/UserContext";

export function SideMenuAdm() {
  const { logout } = useUser();
  const [activeItem, setActiveItem] = useState(null); // Estado para o item ativo

  const handleItemClick = (id) => {
    setActiveItem(id); // Define o item clicado como ativo
  };

  return (
    <Container>
      <hr />
      {listMenu.map((item) => (
        <ItemContainer
          to={item.link}
          key={item.id}
          isActive={activeItem === item.id} // Verifica se o item é o ativo
          onClick={() => handleItemClick(item.id)} // Atualiza o item ativo ao clicar
        >
          <item.icon className="icon" />
          <ListLink to={item.link}>{item.label}</ListLink>
        </ItemContainer>
      ))}
      <hr />
      <ItemContainer style={{ position: "absolute", bottom: "30px" }}>
        <LogoutIcon style={{ color: "#fffff" }} />
        <ListLink to="/login" onClick={logout}>
          Sair
        </ListLink>
      </ItemContainer>
    </Container>
  );
}
