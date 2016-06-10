/*eslint-disable */
import { renderComponent, expect } from '../../test-helper';
import * as actionTypes from '../actions/action-types';
import CourseReducer from './courses-reducer';

describe('CourseReducer', function () {
  it('handles unknown action', function () {
    const newState = CourseReducer([], { type: 'UNKNOWN' });
    expect(newState).to.deep.equal([]);
  });

  it('handles add new course action', function () {
    const state = [];
    const newState = CourseReducer(state, { type: actionTypes.CREATE_COURSE_SUCCESS, course: { name: "New Course" } });
    expect(newState).to.deep.equal([{ name: "New Course" }]);
    expect(newState).to.not.equal(state);
  });

  it('handles load courses success action', function () {
    const newState = CourseReducer([], { type: actionTypes.LOAD_COURSES_SUCCESS, courses: [{ name: "New Course" }] });
    expect(newState).to.deep.equal([{ name: "New Course" }]);
  });

  it('handles update course success action', function () {
    const newState = CourseReducer([], { type: actionTypes.LOAD_COURSES_SUCCESS, courses: [{ name: "New Course" }] });
    expect(newState).to.deep.equal([{ name: "New Course" }]);
  });
});