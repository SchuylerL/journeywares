import React from 'react';
import PropTypes from 'prop-types';
import Products from './Products';
import MenuBar from './MenuBar';
import Header from './Header';
export default function Home({ match }) {
  return (
    <div className="main-view">
      <Header />
      <MenuBar />
      <Products match={match} />
    </div>
  );
}

Home.propTypes = {
  match: PropTypes.object,
};
