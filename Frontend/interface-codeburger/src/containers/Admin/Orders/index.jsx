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
import { LinkMenu, Menu } from "./style";
import formateDate from "../../../utils/formatDate";
import status from "./order-status";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [filtredOrders, setFiltredOrders] = useState([]);
  const [activeStatus, setActiveStatus] = useState(1);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function loadOrder() {
      try {
        const { data } = await api.get("orders");

        setOrders(data);
        setFiltredOrders(data);
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
    const newRows = filtredOrders.map((ord) => createData(ord));
    setRows(newRows);
  }, [filtredOrders]);

  function handleStatus(status) {
    console.log("Status clicado:", status); // Verifica o status recebido

    if (status.id === 1) {
      setFiltredOrders(orders); // Mostrar todos os pedidos
    } else {
      const newOrders = orders.filter((order) => order.status === status.value);
      console.log("Pedidos filtrados:", newOrders); // Verifica o resultado da filtragem
      setFiltredOrders(newOrders); // Atualiza a lista de pedidos filtrados
    }

    setActiveStatus(status.id);
  }

  return (
    <Box
      sx={{
        backgroundColor: "#efefef", // Cor de fundo para a página toda
        minHeight: "100vh", // Garante que a cor cubra toda a altura da página
        padding: "20px",
      }}
    >
      <Menu>
        {status &&
          status.map((status) => (
            <LinkMenu
              key={status.id}
              onClick={() => handleStatus(status)}
              isActiveStatus={activeStatus === status.id}
            >
              {status.label}
            </LinkMenu>
          ))}
      </Menu>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Order</TableCell>
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
