/*eslint-disable */
import {expect, renderComponent} from '../../test-helper';
import CoursesPage from './courses-page';

describe('CoursesPage', function () {
    let component = null;

    beforeEach(() => {
        component = renderComponent(CoursesPage);
    });

    it('contains component class', function () {
        expect(component).to.have.class('CoursesPage');
    });

    it('contains text box to add new course.', function () {
        expect(component.find('input[type="text"]')).to.exist;
    });

    it('contains button to add new course.', function () {
        expect(component.find('input[type="submit"]')).to.exist;
    });


    describe('On Save', function () {
        it('clears text on submit', function () {
            component.find('input[type="text"]').simulate('change', 'test value');
            component.find('input[type="submit"]').simulate('click');
            expect(component.find('input[type="text"]')).to.have.value('');
        });
    });
});