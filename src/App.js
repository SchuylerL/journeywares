import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { listProductsThunk } from '../src/actions/productActions';
import { checkSessionLogin } from './storeReducers/userReducer';
import { getCart } from './storeReducers/cartReducer';
import Home from './components/Home';
// import Header from './components/Header';
import ErrorList from './components/ErrorList';
import DetailProduct from './components/DetailedProduct';
import CreateUserForm from './components/CreateUserForm';
import UserProfile from './components/UserProfile';
import EditProduct from './components/EditProduct';
import UserCart from './components/UserCart';
import CreateProduct from './components/CreateProduct';
import EditUser from './components/EditUser';
import Checkout from './components/Checkout';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.props.listProductsThunk();
    this.props.getCart();
    this.props.checkSessionLogin();
    this.setState({ loading: false });
  }

  render() {
    return (
      <Router>
        <ErrorList />
        <Route exact path="/" component={Home} />
        <Route
          path="/:filterBar"
          render={({ match }) => <Home match={match} />}
        />
        <Route exact path="/CreateUserForm" component={CreateUserForm} />
        <Route path="/user/profile" component={UserProfile} />
        <Route path="/edit-user" component={EditUser} />
        <Route path="/myCart" component={UserCart} />
        <Route exact path="/create-product" component={CreateProduct} />
        <Route
          exact
          path="/products/:id"
          render={({ match }) => <DetailProduct match={match} />}
        />
        <Route
          exact
          path="/products/:id/edit"
          render={({ match }) => <EditProduct match={match} />}
        />
        <Route exact path="/checkout" component={Checkout} />
      </Router>
    );
  }
}

App.propTypes = {
  listProductsThunk: PropTypes.func,
  getCart: PropTypes.func,
  checkSessionLogin: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  checkSessionLogin: () => dispatch(checkSessionLogin()),
  getCart: () => dispatch(getCart()),
  listProductsThunk: () => dispatch(listProductsThunk()),
});

export default connect(null, mapDispatchToProps)(App);
