import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux'

import { ReactComponent as CrownLogo } from '../../assets/crown.svg'

//import './styles.jsx'
import { LogoContainer, NavigationContainer, NavLink, NavLinks } from './styles'
import { signOutUser } from "../../utils/firebase/firebase";
import CardIcon from "../../components/cart-icon";
import CartDropdown from "../../components/cart-dropdown";
import { selectIsCartOpen } from '../../store/cart/cartSelector'

import { selectCurrentUser } from "../../store/user/userSelector";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)

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