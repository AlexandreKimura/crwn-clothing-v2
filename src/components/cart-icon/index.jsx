import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'

import { ShoppingIcon, CartIconContainer, ItemCount } from './styles'

const CardIcon = () => {

  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CardIcon