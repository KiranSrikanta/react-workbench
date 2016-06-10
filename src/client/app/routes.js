import {IndexRoute, Route} from 'react-router';
import App from './common/components/app';
import CoursePage from './courses/components/course-page';
import CoursesPage from './courses/components/courses-page';
import HomePage from './home/components/home-page';
import React from 'react';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="courses" component={CoursesPage} />
        <Route path="course" component={CoursePage} />
        <Route path="course/:id" component={CoursePage} />
    </Route>
);