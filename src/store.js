import { applyMiddleware, combineReducers, createStore } from 'redux';

import productReducer from './storeReducers/productsReducer';
import reviewReducer from './storeReducers/reviewReducer';
import userReducer from './storeReducers/userReducer';
import cartReducer from './storeReducers/cartReducer';
import errorReducer from './storeReducers/errorReducer';

const thunkMiddleware = require('redux-thunk').default;

const reducer = combineReducers({
  products: productReducer,
  reviews: reviewReducer,
  user: userReducer,
  cart: cartReducer,
  errors: errorReducer,
});

export default createStore(reducer, applyMiddleware(thunkMiddleware));
