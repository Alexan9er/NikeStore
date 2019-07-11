import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './app.css';

import Header from '../../shared/components/header/header';
import ErrorBoundary from '../../shared/components/errorBoundary';

import { HomePage, CartPage } from '../../pages';

require('jquery-mousewheel');

export default class App extends Component {
  state = {};

  render() {
    return (
      <ErrorBoundary>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cart" component={CartPage} />
        </Switch>
      </ErrorBoundary>
    );
  }
}
