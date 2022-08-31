/* eslint-disable react/prop-types */
import React from 'react';

import { Link } from 'react-router-dom';

export function CartHeader({ cart }) {
  // const cartItems = cart ? cart.length : 0;
  return (
    <div id="cart-header">
      <Link to="/myCart">
        <div id="cart-button">
          <br />
          <br />
          <img id="cart-icon" src="/img/cart.png"></img>
          <br />
          <center>
            Cart
            {/* : {cartItems} */}
          </center>
        </div>
      </Link>
    </div>
  );
}
