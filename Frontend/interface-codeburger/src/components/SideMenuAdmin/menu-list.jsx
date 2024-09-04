import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import AddBoxIcon from "@mui/icons-material/AddBox";

const listMenu = [
  {
    id: 1,
    label: "Pedidos",
    link: "/admin",
    icon: ShoppingBagIcon,
  },
  {
    id: 2,
    label: "Producst",
    link: "/products",
    icon: FastfoodIcon,
  },
  {
    id: 3,
    label: "Add New Product",
    link: "/newproduct",
    icon: AddBoxIcon,
  },
];

export default listMenu;
