import { useDispatch, useSelector } from 'react-redux'

import { selectCartItems } from '../../store/cart/cartSelector'
import { addItemToCart } from '../../store/cart/cartAction'

import { CategoryItem } from '../../store/categories/categoryTypes'

import Button, { BUTTON_TYPES_CLASSES } from '../button'
import './styles.scss'

type ProductCardProps = {
  product: CategoryItem
}

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch()
  const { name, price, imageUrl } = product

  const cartItems = useSelector(selectCartItems)

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product))

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPES_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
    </div>
  )
}

export default ProductCard