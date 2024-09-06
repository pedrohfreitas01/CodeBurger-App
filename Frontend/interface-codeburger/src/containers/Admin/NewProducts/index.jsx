import React, { useEffect, useState } from "react";
import { Container, Label, Input } from "./style";
import api from "../../../services/api";

import ReactSelect from "react-select";
import { useForm } from "react-hook-form";

import { Button } from "../../../components";

function NewProducts() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadOrder() {
      const { data } = await api.post("/products");
    }

    loadOrder();
  }, []);

  return (
    <Container>
      <form noValidate>
        <Label>Name</Label>
        <Input typeof="text" {...register("name")} />

        <Label>Price</Label>
        <Input type="number" {...register("price")} />

        <Label>Upload Img</Label>
        <Input type="file" accept="image/png, image/jpeg" />

        <ReactSelect />

        <Button>Add new Product</Button>
      </form>
    </Container>
  );
}

export default NewProducts;
