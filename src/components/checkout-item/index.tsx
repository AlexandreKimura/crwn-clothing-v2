import { useSelector, useDispatch } from 'react-redux'

import { selectCartItems } from '../../store/cart/cartSelector'
import { addItemToCart, clearItemToCart, removeItemFromCart } from '../../store/cart/cartAction'

import { CartItem } from '../../store/cart/cartTypes'

import './styles.scss'

type CheckoutItemProps = {
  cartItem: CartItem
}

const CheckoutItem = ({ cartItem }: CheckoutItemProps) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const { name, imageUrl, price, quantity } = cartItem

  const clearItemHandler = () => {
    dispatch(clearItemToCart(cartItems, cartItem))
  }

  const addItemHandler = () => {
    dispatch(addItemToCart(cartItems, cartItem))
  }

  const removeItemHandler = () => {
    dispatch(removeItemFromCart(cartItems, cartItem))
  }

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
    </div>
  )
}

export default CheckoutItem