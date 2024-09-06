import React, { useEffect, useState } from "react";
import { Container, Label, Input, ButtonStyled, LabelUpload } from "./style";
import api from "../../../services/api";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ReactSelect from "react-select";
import { useForm, Controller } from "react-hook-form";

function NewProducts() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("categories");
      
      
      setCategories(data);
    }

    loadCategories();
  }, []);

  return (
    <Container>
      <form noValidate>
        <Label>Name</Label>
        <Input type="text" {...register("name")} />

        <Label>Price</Label>
        <Input type="number" {...register("price")} />

        <LabelUpload>
          {fileName ? (
            fileName
          ) : (
            <>
              <CloudUploadIcon />
              Send Product Image
            </>
          )}
          <Input
            type="file"
            accept="image/png, image/jpeg"
            {...register("file")}
            onChange={(e) => {
              setFileName(e.target.files[0]?.name);
            }}
          />
        </LabelUpload>

        <Controller
          name="category_id"
          control={control}
          render={({ field }) => (
            <ReactSelect
              {...field}
              options={categories}
              getOptionLabel={(cat) => cat.name}
              getOptionValue={(cat) => cat.id}
              placeholder="Select a category..."
            />
          )}
        />

        <ButtonStyled>Add new Product</ButtonStyled>
      </form>
    </Container>
  );
}

export default NewProducts;
