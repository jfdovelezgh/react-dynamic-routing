import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="App-header">
      <h3 className="App-logo">Logo</h3>
      <ul>
        <Link className="App-link" to="/about">
          <li>About</li>
        </Link>
        <Link className="App-link" to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
