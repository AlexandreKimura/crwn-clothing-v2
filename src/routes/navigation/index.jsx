import { Outlet } from "react-router-dom";
import { useContext } from "react";

import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { UserContext } from "../../context/userContext";

//import './styles.jsx'
import { LogoContainer, NavigationContainer, NavLink, NavLinks } from './styles'
import { signOutUser } from "../../utils/firebase/firebase";
import CardIcon from "../../components/cart-icon";
import CartDropdown from "../../components/cart-dropdown";
import { CartContext } from "../../context/cartContext";

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrownLogo className="logo" />
        </LogoContainer> 
        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {currentUser ? (
              <NavLink as='span' onClick={signOutUser}>SING OUT</NavLink>
            ) : (
              <NavLink to='/auth'>
                SIGN IN
              </NavLink>
            )
          }
          <CardIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation