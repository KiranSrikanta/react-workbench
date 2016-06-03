import { renderComponent, expect } from './test-helper';
import CoursesPage from '../app/components/courses-page';

describe('CoursesPage', function () {
    let component;
    beforeEach(() => {
        component = renderComponent(CoursesPage);
    });
    
    it('contains component class', function () {
        expect(component).to.have.class("CoursesPage");
    });
    
    it('contains text box to add new course.', function () {
        expect(component.find("input[type='text']")).to.exist;
    });
    
    it('contains button to add new course.', function () {
        expect(component.find("input[type='submit']")).to.exist;
    });
});