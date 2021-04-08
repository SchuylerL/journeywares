/* eslint-disable react/prop-types */
import React from 'react';

import { Link } from 'react-router-dom';

export function CartHeader({ cart }) {
  // const cartItems = cart ? cart.length : 0;
  console.log(cart);
  return (
    <div id="cart-header">
      <Link to="/myCart">
        {/* <h4 id="cart-button">*/}
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
        {/* </h4> */}
      </Link>
    </div>
  );
}
