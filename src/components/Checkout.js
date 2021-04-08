import React from 'react';
import PropTypes from 'prop-types';
import { Elements, StripeProvider } from 'react-stripe-elements';
import { connect } from 'react-redux';

import StripeCard from './StripeCard';
import { getCart } from '../storeReducers/cartReducer';
import { listProductsThunk } from '../actions/productActions';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      transactionComplete: false,
      transacitons: [],
    };
    this.updateCart = this.updateCart.bind(this);
  }

  calcTotal(cart) {
    const total = cart.items.reduce((acc, item) => {
      return acc + item.product.cost * item.quantity;
    }, 0);
    this.setState({ total: total });
  }

  updateCart(data) {
    this.props.getCart();
    this.props.listProductsThunk();
    this.setState({ transactionComplete: true, transactions: [...data] });
  }

  componentDidMount() {
    const { cart } = this.props;
    this.calcTotal(cart);
  }
  render() {
    if (this.state.total === 0) {
      return (
        <div className="checkout">
          <h2>Cart is Empty</h2>
        </div>
      );
    } else if (!this.state.transactionComplete) {
      return (
        <div className="checkout">
          <div id="payment-box">
            <p>Would you like to complete the purchase?</p>
            <StripeProvider apiKey={null}>
              <Elements>
                <StripeCard updateCart={this.updateCart} />
              </Elements>
            </StripeProvider>
          </div>
          <div id="payment-details">
            <h2>Your total for this purchase is ${this.state.total}</h2>
          </div>
        </div>
      );
    } else {
      return (
        <div className="checkout">
          <h2>Your transaction is complete!</h2>
          <div>
            Total cost: {this.state.transactions[0].totalCost}
            <br />
            Transaction #: {this.state.transactions[0].id}
            <br />
            <br />
            Your Items:
            {this.state.transactions.map((item, idx) => (
              <p key={idx}>
                {item.product.name} | Quantity: {item.quantity}
              </p>
            ))}
          </div>
        </div>
      );
    }
  }
}

Checkout.propTypes = {
  cart: PropTypes.object,
  getCart: PropTypes.func,
  listProductsThunk: PropTypes.func,
};

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
  getCart: () => dispatch(getCart()),
  listProductsThunk: () => dispatch(listProductsThunk()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Checkout);
