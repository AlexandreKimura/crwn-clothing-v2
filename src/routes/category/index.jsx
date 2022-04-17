import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card'
import { CategoriesContext } from '../../context/categoriesContext'

import './styles.scss'

const Category = () => {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)
  const [ products, setProducts ] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <div className='category-container'>
      {products && products.map((product) => {
        return <ProductCard key={product.id} product={product}/>
      })}
    </div>
  )
}

export default Category