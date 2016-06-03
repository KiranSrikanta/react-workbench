import {IndexRoute, Route} from 'react-router';
import App from './components/app';
import CoursesPage from './components/courses-page';
import React from 'react';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={CoursesPage} />
    </Route>
);