import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import UserCart from './UserCart';
import Reviews from './Reviews';
import Transactions from './Transactions';

class UserProfile extends React.Component {
  render() {
    const { user, cart } = this.props;
    return (
      <div id="userProfile">
        <div id="pad-left">
          <h3>
            User profile for {user.firstName} {user.lastName}
          </h3>
          <div id="userInfo">
            First Name: {user.firstName}
            <br />
            Last Name: {user.lastName}
            <br />
            Class: {user.class}
            <br />
            Email:{user.email}
            <br />
          </div>
          <Link to="/edit-user">Edit Profile Info</Link>
          <div className="admin-tools">
            {user.isAdmin ? <a href="/edit-user">Edit Current Users</a> : ''}
          </div>
          <div className="admin-tools">
            {user.isAdmin ? (
              <Link to="/create-product">Create Product</Link>
            ) : (
              ''
            )}
          </div>
        </div>
        <div id="pad-left">
          <UserCart cart={cart} />
        </div>
        <div id="pad-left">
          <h1>Authored Reviews</h1>
          <Reviews user={user} />
        </div>
        <div className="pad-left">
          <h2>Your past Transactions</h2>
          <Transactions />
        </div>
      </div>
    );
  }
}

UserProfile.propTypes = {
  user: PropTypes.object,
  cart: PropTypes.object,
};

const mapStateToProps = state => ({
  user: state.user,
  reviews: state.reviews,
  cart: state.cart,
});

export default connect(mapStateToProps, null)(UserProfile);
