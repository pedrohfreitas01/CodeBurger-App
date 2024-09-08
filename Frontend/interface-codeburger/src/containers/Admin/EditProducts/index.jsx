import React, { useEffect, useState } from "react";
import {
  Container,
  Label,
  Input,
  ButtonStyled,
  LabelUpload,
  ContainerInput,
} from "./style";
import api from "../../../services/api";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ReactSelect from "react-select";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorFormMsn } from "../../../components";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

function EditProducts() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state || {};

  const schema = Yup.object().shape({
    name: Yup.string().required("Name Product is required"),
    price: Yup.string().required("Price Product is required"),
    category: Yup.object().required("Choose one category"),
    file: Yup.mixed().required("Product Image is required"), // Adicionando validação de arquivo
    offer: Yup.bool(),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    if (!product) {
      toast.error("Product not found.");
      return;
    }

    const productDataFormData = new FormData();
    productDataFormData.append("name", data.name);
    productDataFormData.append("price", data.price);
    productDataFormData.append("category_id", data.category.id);
    productDataFormData.append("file", data.file[0]); // Certifique-se de que data.file existe antes de acessar o índice
    productDataFormData.append("offer", data.offer);

    try {
      await toast.promise(
        api.put(`products/${product.id}`, productDataFormData),
        {
          pending: "Editing new product",
          success: "Product edited!",
          error: "Fail, something wrong",
        }
      );
      navigate("/list-products");
    } catch (error) {
      console.error("Error editing product:", error);
    }
  };

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("categories");
      setCategories(data);
    }

    loadCategories();

    if (product) {
      setValue("name", product.name);
      setValue("price", product.price);
      setValue("category", product.category);
      setValue("offer", product.offer);
    }
  }, [product, setValue]);

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
        <ContainerInput>
          <input type="checkbox" {...register("offer")} />
          <Label>Offer !?</Label>
        </ContainerInput>

        <ButtonStyled type="submit">Edit Product</ButtonStyled>
      </form>
    </Container>
  );
}

export default EditProducts;
