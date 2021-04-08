import React from 'react';
import { NavLink } from 'react-router-dom';

function selector(e) {
  window.location.hash = e.target.value;
}

function MenuBar() {
  return (
    <div id="menu-bar">
      <ul>
        <li>
          <NavLink className="navlink" exact to="/">
            All Products
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" exact to="/armor">
            Armor
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" exact to="/weapon">
            Weapons
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" exact to="/potion">
            Potions
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" exact to="/ClassProducts">
            Class Products
          </NavLink>
        </li>
        <li id="liselect">
          <select onChange={selector}>
            <option key="0" value="">
              Sort Product by:
            </option>
            <option key="1" value="/costA">
              Cost Ascending
            </option>
            <option key="2" value="/costD">
              Cost Descending
            </option>
            <option key="3" value="/stockA">
              Stock Count Ascending
            </option>
            <option key="4" value="/stockD">
              Stock Count Descending
            </option>
            <option key="5" value="/inStock">
              In Stock
            </option>
            <option key="6" value="/outStock">
              Out of Stock
            </option>
            <option key="7" value="/warrior">
              Class: Warrior
            </option>
            <option key="8" value="/mage">
              Class: Mage
            </option>
            <option key="9" value="/rouge">
              Class: Rouge
            </option>
            <option key="10" value="/pnameA">
              Name Ascending
            </option>
            <option key="11" value="/pnameD">
              Name Descending
            </option>
          </select>
        </li>
      </ul>
    </div>
  );
}

export default MenuBar;
