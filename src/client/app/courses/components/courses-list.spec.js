/*eslint-disable */
import {expect, renderComponent} from '../../test-helper';
import CoursesList from './courses-list';

describe('CoursesList', function () {
    let component = null;

    beforeEach(() => {
        component = renderComponent(CoursesList, {courses: [
            {
                id: "react-flux-building-applications",
                title: "Building Applications in React and Flux",
                watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
                authorId: "cory-house",
                length: "5:08",
                category: "JavaScript"
            },
            {
                id: "clean-code",
                title: "Clean Code: Writing Code for Humans",
                watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
                authorId: "cory-house",
                length: "3:10",
                category: "Software Practices"
            }
        ]}, {});
    });

    it('contains component class', function () {
        expect(component).to.have.class('CoursesList');
    });
    
    it('renders courses', function () {
        expect(component.find('tbody tr').length).to.equal(2);
    });
});