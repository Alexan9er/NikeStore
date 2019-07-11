import React, { Component } from 'react';
import Header from '../../shared/components/header/header';
import ErrorBoundary from '../../shared/components/errorBoundary';

export default class App extends Component {
  state = {};

  render() {
    return (
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
    );
  }
}
