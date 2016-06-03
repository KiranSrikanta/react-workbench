/*eslint-disable */
import { renderComponent, expect } from '../test-helper';
import CourseReducer from './course-reducer';

describe('CourseReducer', function () {
    it('handles unknown action', function () {
        const newState = CourseReducer([], { type: 'UNKNOWN' });
        expect(newState).to.deep.equal([]);
    });
    
    it('handles add new course action', function () {
        const newState = CourseReducer([], { type: 'CREATE_COURSE', course: { name: "New Course"} });
        expect(newState).to.deep.equal([{ name: "New Course"}]);
    });
});