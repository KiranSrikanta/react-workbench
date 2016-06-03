import {IndexRoute, Route} from 'react-router';
import App from './components/app';
import CoursesPage from './components/courses/courses-page';
import HomePage from './components/home/home-page';
import React from 'react';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="courses" component={CoursesPage} />
    </Route>
);