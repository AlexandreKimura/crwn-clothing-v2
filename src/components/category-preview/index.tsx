import { Link } from 'react-router-dom'
import ProductCard from '../product-card'
import './styles.scss'

import { CategoryItem } from '../../store/categories/categoryTypes'

type CategoryPreviewProps = {
  title: string
  products: CategoryItem[]
}

const CategoryPreview = ({ title, products }: CategoryPreviewProps) => {
  return (
    <div className='category-preview-container'>
      <h2>
        <Link to={title} className='title'>{title.toUpperCase()}</Link>
      </h2>
      <div className='preview'>
        {products.filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </div>
    </div>
  )
}

export default CategoryPreview