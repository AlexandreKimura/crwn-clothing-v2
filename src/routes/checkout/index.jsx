import { useContext } from 'react'
import CheckoutItem from '../../components/checkout-item'
import { CartContext } from '../../context/cartContext'
import './styles.scss'

const Checkout = () => {

  const { cartItems, addItemToCart, removeItemToCart, cartTotal } = useContext(CartContext)

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return (
          <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
        )
      })}
      <span className='Total'>Total: ${cartTotal}</span>
    </div>
  )
}

export default Checkout