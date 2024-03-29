import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SingleProduct from './SingleProduct';

export function Products({ products, user }) {
  const classProducts = products.productList.filter(
    a => a.class === user.class,
  );
  if (classProducts.length !== 0) {
    return (
      <div>
        <div className="products-list">
          {classProducts.map(p => {
            return <SingleProduct key={p.id} product={p} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h2 className="products-list" style={{ color: 'white' }}>
          <p>Please login to see your class recommended products</p>
        </h2>
      </div>
    );
  }
}

Products.propTypes = {
  productList: PropTypes.array,
  user: PropTypes.object,
};

const mapStateToProps = state => ({
  products: state.products,
  user: state.user,
});

export default connect(mapStateToProps)(Products);
