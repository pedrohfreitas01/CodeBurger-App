import React, { useEffect, useState } from "react";
import { Container, Label, Input, ButtonStyled, LabelUpload } from "./style";
import api from "../../../services/api";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ReactSelect from "react-select";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorFormMsn } from "../../../components";

// Definindo o esquema de validação fora do componente
const schema = Yup.object().shape({
  name: Yup.string().required("Name Product is required"),
  price: Yup.string().required("Price Product is required"),
  category: Yup.object().required("Choose one category"),
  file: Yup.mixed()
    .required("Product image is required")
    .test(
      "fileSize",
      "The file is too large. Maximum size is 2 MB.",
      (value) => !value || (value && value[0]?.size <= 2 * 1024 * 1024) // 2MB em bytes
    )
    .test(
      "fileFormat",
      "Unsupported format. Only PNG or JPEG allowed.",
      (value) =>
        !value ||
        (value && ["image/jpeg", "image/png"].includes(value[0]?.type))
    ),
});

function NewProducts() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("categories");
      setCategories(data);
    }

    loadCategories();
  }, []);

  // Função de submissão do formulário
  const onSubmit = (data) => {
    console.log(data);
    // Aqui você pode enviar os dados para a API ou realizar outras ações
  };

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Name</Label>
          <Input type="text" {...register("name")} />
          <ErrorFormMsn>{errors.name?.message}</ErrorFormMsn>
        </div>
        <div>
          <Label>Price</Label>
          <Input type="number" {...register("price")} />
          <ErrorFormMsn>{errors.price?.message}</ErrorFormMsn>
        </div>

        <div>
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
          <ErrorFormMsn>{errors.file?.message}</ErrorFormMsn>
        </div>
        <div>
          <Label>Category</Label>
          <Controller
            name="category"
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
          <ErrorFormMsn>{errors.category?.message}</ErrorFormMsn>
        </div>
        <ButtonStyled type="submit">Add new Product</ButtonStyled>
      </form>
    </Container>
  );
}

export default NewProducts;
