import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'
import Button from '../button'
import CartItem from '../cart-item'
import './styles.scss'

const CartDropdown = () => {

  const { cartItems } =  useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown