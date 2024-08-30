import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import api from "../../../services/api";
import Row from "./row";
import { Container } from "./style";
import formateDate from "../../../utils/formatDate";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function loadOrder() {
      try {
        const { data } = await api.get("orders");

        console.log("API Response Data:", data); // Verifique os dados aqui

        setOrders(data);
      } catch (error) {
        console.error("Error load order:", error);
      }
    }

    loadOrder();
  }, []);


  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: formateDate(order.createdAt),
      status: order.status,
      products: order.products,
    };
  }

  useEffect(() => {
    const newRows = orders.map((ord) => createData(ord));
    setRows(newRows);
  }, [orders]);

  return (
    <Box
      sx={{
        backgroundColor: "#efefef", // Cor de fundo para a página toda
        minHeight: "100vh", // Garante que a cor cubra toda a altura da página
        padding: "20px",
      }}
    >
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell >Order</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Order Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.orderId} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Orders;
