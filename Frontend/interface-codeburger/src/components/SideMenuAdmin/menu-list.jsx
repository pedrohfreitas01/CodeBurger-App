import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import AddBoxIcon from "@mui/icons-material/AddBox";
import paths from "../../utils/constance/path";

const listMenu = [
  {
    id: 1,
    label: "Pedidos",
    link: paths.AdminOrder,
    icon: ShoppingBagIcon,
  },
  {
    id: 2,
    label: "Products",
    link: paths.Products,
    icon: FastfoodIcon,
  },
  {
    id: 3,
    label: "Add New Product",
    link: paths.NewProduct,
    icon: AddBoxIcon,
  },
];

export default listMenu;
