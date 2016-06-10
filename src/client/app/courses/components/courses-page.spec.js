/*eslint-disable */
import {expect, renderComponent} from '../../test-helper';
import CoursesPage from './courses-page';

describe('CoursesPage', function () {
    let component = null;

    beforeEach(() => {
        component = renderComponent(CoursesPage, {courses: []}, {});
    });

    it('contains component class', function () {
        expect(component).to.have.class('CoursesPage');
    });

    it('contains button to add new course.', function () {
        expect(component.find('input[type="submit"]')).to.exist;
    });
});