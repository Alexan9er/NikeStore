import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import ErrorBoundary from './shared/components/errorBoundary';
import ShoesStoreService from './services/shoesStoreService';
import { ShoesServiceProvider } from './components/shoesServiceContext';

import App from './components/app';

import store from './store';

const shoesStoreService = new ShoesStoreService();

ReactDom.render(
  <Provider store={store}>
    <ErrorBoundary>
      <ShoesServiceProvider value={shoesStoreService}>
        <Router>
          <App />
        </Router>
      </ShoesServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);
