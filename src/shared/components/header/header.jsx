import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
  state = {};

  render() {
    return (
      <header className="header">
        <h1 className="header-logo">
          <a href="/">Nike Store</a>
        </h1>
        <div className="header-cart">My cart (2)</div>
      </header>
    );
  }
}
