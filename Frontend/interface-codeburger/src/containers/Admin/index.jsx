import React, { useEffect, useState } from "react";
import { Container } from "./style";
import Orders from "./Orders";

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

import api from "../../services/api";

export function Admin() {
  const [orders, setOrders] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function loadOrder() {
      try {
        const { data } = await api.get("orders");

        console.log(orders);

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
      date: order.createdAt,
      status: order.status,
      products: order.products,
    };
  }

  useEffect(() => {
    const newRows = orders.map((ord) => createData(ord));
    setRows(newRows);
  }, [orders]);

  console.log(rows);
  return (
    <Container>
      <Orders />
    </Container>
  );
}
