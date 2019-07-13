import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './header.css';

export default class Header extends Component {
  state = {};

  render() {
    return (
      <header className="header">
        <h1 className="header-logo">
          <Link to="/">Nike Store</Link>
        </h1>
        <Link to="/cart" className="header-cart">
          My cart (2)
        </Link>
      </header>
    );
  }
}
