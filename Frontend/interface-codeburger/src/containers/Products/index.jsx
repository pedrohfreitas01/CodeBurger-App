import React, { useEffect, useState } from "react";

import productPhoto from "../../assets/productsImglOGO.svg";
import {
  Container,
  ProductImg,
  CategoryBtn,
  CategoriesMenu,
  ProductContainer,
} from "./style";
import api from "../../services/api";
import { CardProduct } from "../../components";

import formatCurrency from "../../utils/formatCurrency";

export function Products() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState(0);

  useEffect(() => {
    async function loadCategories() {
      try {
        const { data } = await api.get("categories");
        console.log("Categorias loaded:", data); // Verifica se os dados estão corretos

        const newCategories = [{ id: 0, name: "Todos" }, ...data];

        setCategories(newCategories);
      } catch (error) {
        console.error("Error load cate:", error);
      }
    }

    async function loadProducts() {
      try {
        const { data: allProducts } = await api.get("products");

        const newProducts = allProducts.map((product) => {
          return { ...product, formatedPrice: formatCurrency(product.price) };
        });

        setProducts(newProducts);
      } catch (error) {
        console.error("Erro load producst:", error);
      }
    }

    loadProducts();
    loadCategories();
  }, []);

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products);
    } else {
      const newFilterProducts = products.filter(
        (product) => product.category_id === activeCategory
      );

      setFilteredProducts(newFilterProducts);
    }
  }, [activeCategory, products]);

  return (
    <Container>
      <ProductImg src={productPhoto} alt="home-logo" />
      <CategoriesMenu>
        {categories &&
          categories.map((category) => (
            <CategoryBtn
              key={category.id}
              isActiveCategory={activeCategory == category.id}
              onClick={() => {
                setActiveCategory(category.id);
              }}
            >
              {category.name}
            </CategoryBtn>
          ))}
      </CategoriesMenu>
      <ProductContainer>
        {filteredProducts &&
          filteredProducts.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ProductContainer>
    </Container>
  );
}

