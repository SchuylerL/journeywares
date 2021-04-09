import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { CartHeader } from './CartHeader';
import UserHeader from './UserHeader';

function Header({ cart }) {
  return (
    <div className="header">
      <Link to="/" id="eoTitle" href="/">
        JW
      </Link>
      <div id="eoTitle">Journey Wares</div>
      <Link id="eoTitle" to="/myCart">
        <img id="cart-icon" src="/img/cart.png" />
        <div id="cart-text">Cart</div>
        {/* <div id="cart-text">Cart: {cart.length > 0 ? cart[0].quantity : 0}</div> */}
      </Link>
      {/* <CartHeader cart={cart} /> */}
      <UserHeader />
    </div>
  );
}

Header.propTypes = {
  cart: PropTypes.array,
};

const mapStateToProps = state => ({
  cart: state.cart.items,
});

export default connect(mapStateToProps)(Header);
