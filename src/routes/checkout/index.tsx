import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../store/cart/cartSelector'

import CheckoutItem from '../../components/checkout-item'
import './styles.scss'
import PaymentForm from '../../components/payment-form'

const Checkout = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

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
      <PaymentForm/>
    </div>
    
  )
}

export default Checkout