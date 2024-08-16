import React, { useEffect } from 'react'
import categoryImg from '../../assets/homeCategoriImg.png'
import { CategoryImg, Container } from './style'

import api from '../../services/api'

function CategoryCarousel() {


    useEffect(() => {
        
        async function loadCategories() {
            const res = await api.get("categories");

            console.log(res);
        }

        loadCategories()
    }, [])


  return (
      <Container>
          <CategoryImg src={ categoryImg } alt="logo-category" />
    </Container>
  )
}

export default CategoryCarousel