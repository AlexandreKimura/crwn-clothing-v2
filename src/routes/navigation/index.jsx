import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";

import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { UserContext } from "../../context/userContext";

import './styles.scss'
import { signOutUser } from "../../utils/firebase/firebase";
import CardIcon from "../../components/cart-icon";
import CartDropdown from "../../components/cart-dropdown";
import { CartContext } from "../../context/cartContext";

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <CrownLogo className="logo" />
        </Link> 
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
              <span className="nav-link" onClick={signOutUser}>SING OUT</span>
            ) : (
              <Link className="nav-link" to='/auth'>
                SIGN IN
              </Link>
            )
          }
          <CardIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation