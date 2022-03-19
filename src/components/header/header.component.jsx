import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils';
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.component";
import {  createStructuredSelector } from 'reselect';

import './header.styles.scss'
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selectors";



const Header = ({ currentUser, hidden }) => (
    <div className="header">
       <Link to="/" className="logo-container">
         <Logo className="logo" />
       </Link>
       <div className="options">
          <Link className="option" to='/shop'>
            SHOP
          </Link>
          <Link className="option" to='/'>
            CONTACT
          </Link>
        {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
      </div>
      { hidden ? null : <CartDropdown /> }
    </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header) ;