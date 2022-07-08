import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function SingleProduct({ product }) {
  let stocked = 'No';
  if (product.inStock) {
    stocked = 'Yes';
  }
  return (
    <div key={product.id} className="product-card">
      <Link to={`/products/${product.id}`}>
        <center>
          <img
            className="product-image"
            src={
              product.image
                ? product.image
                : '/img/products/default-product.jpg'
            }
            alt="Product Image"
          />
        </center>
        <div key={product.id} className="product-container">
          <h3>{product.name}</h3>
          {product.description ? product.description.slice(0, 70) + '...' : ''}
          <center>
            <br />
            Cost: {product.cost} Gold
            <br />
            Class:{' '}
            {product.class.charAt(0).toUpperCase() + product.class.slice(1)}
            <br />
            In Stock: {stocked}
            <br />
            Stock Count: {product.stock}
          </center>
        </div>
      </Link>
    </div>
  );
}

SingleProduct.defaultProps = {
  image: '',
  product: {},
  description: '',
  name: '',
};

SingleProduct.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  product: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number,
  ]),
};

export default SingleProduct;
