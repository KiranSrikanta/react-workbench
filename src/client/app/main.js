import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap-theme.css';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import React from 'react';
import configureStore from './store/configure-store';
import {render} from 'react-dom';
import routes from './routes';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);