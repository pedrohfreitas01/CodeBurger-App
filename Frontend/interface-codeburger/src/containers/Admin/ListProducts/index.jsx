import React, { useEffect, useState } from "react";
import { Container, EditIconStyled } from "./style";
import api from "../../../services/api";

import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CancelIcon from "@mui/icons-material/Cancel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import formatCurrency from "../../../utils/formatCurrency"
import EditProducts from "../EditProducts";
import { useNavigate } from "react-router-dom";
import paths from "../../../utils/constance/path";



function ListProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadOrder() {
      try {
        const { data } = await api.get("/products");

        if (data) {
          setProducts(data);
        } else {
          console.warn("No data received from API");
        }
      } catch (error) {
        console.error("Error loading order:", error);
      }
    }

    loadOrder();
  }, []);

  function isOffer(offerStatus) {
    if (offerStatus) {
      return <CheckBoxIcon style={{ color: "#006400" }} />;
    }
    return <CancelIcon style={{ color: "#f0001b" }} />;
  }

  function editProducts(product) {
     navigate(paths.EditProducts, { state: { product } });
  }


  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Offer</TableCell>
              <TableCell>Imagem</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell>{formatCurrency(product.price)}</TableCell>
                <TableCell>{isOffer(product.offer)}</TableCell>
                <TableCell>
                  <img
                    src={product.url}
                    alt="image-product"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                </TableCell>
                <TableCell>
                  <EditIconStyled  onClick={() => editProducts(product)}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default ListProducts;
