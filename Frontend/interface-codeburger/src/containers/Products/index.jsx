import React, { useEffect, useState } from "react";

import productPhoto from "../../assets/productsImglOGO.svg";
import { Container, ProductImg, CategoryBtn, CategoriesMenu } from "./style";
import api from "../../services/api";

function Products() {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    async function loadCategories() {
      try {
        const { data } = await api.get("categories");
        console.log("Categorias carregadas:", data); // Verifica se os dados estão corretos

        const newCategories = [{ id: 0, name: "Todos" }, ...data];

        setCategories(newCategories);
      } catch (error) {
        console.error("Erro ao carregar categorias:", error);
      }
    }

    loadCategories();
  }, []);
  return (
    <Container>
      <ProductImg src={productPhoto} alt="home-logo" />
      <CategoriesMenu>
        {categories &&
          categories.map((category) => (
            <CategoryBtn
              key={category.id}
              isActiveCategory = {activeCategory == category.id}
              onClick={() => {
                setActiveCategory(category.id);
              }}
            >
              {category.name}
            </CategoryBtn>
          ))}
      </CategoriesMenu>
    </Container>
  );
}

export default Products;
