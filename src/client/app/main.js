import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap-theme.css';
import '../../../node_modules/toastr/build/toastr.min.css';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import React from 'react';
import authorActions from './courses/actions/author-actions';
import configureStore from './store/configure-store';
import courseActions from './courses/actions/course-actions';
import {render} from 'react-dom';
import routes from './routes';

const store = configureStore();

store.dispatch(courseActions.loadCourses());
store.dispatch(authorActions.loadAuthors());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);